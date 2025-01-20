import { Button, Collapse, CollapseProps, Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useNotification from "../../hooks/layout/useNotification";
import { handleImagePreview } from "../../shared/helpers/handle-image-preview.helper";
import PreviewImage from "../../shared/PreviewImage";
import TextEditor from "../../shared/TextEditor";
import { getInputFormItem, getTextAreaFormItem, getLimitUploadFormItem, getUploadFormItem } from "../utils/FormItems";

const EditProject = () => {
    const pageTitle = 'Edit Project'
    const location = useLocation();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [projectDetails, setProjectDetails] = useState<any>();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [projectType, setProjectType] = useState<any>();
    const [editorValue, setEditorValue] = useState<any>();
    const [thumbNail, setThumbnail] = useState<any>();
    const [segment, setSegment] = useState<any>();
    const [displayImg, setDisplayImg] = useState({
        previewVisible: false, previewImage: '', previewTitle: ''
    });


    useEffect(() => {
        try {
            const firstSegment = location.pathname.split('/')[1]; // Gets the part after the first slash
            let routeKey;
            if (firstSegment === 'project-residentials') {
                routeKey = 'project-residential-details'
            } else {
                routeKey = 'project-commercial-details'
            }
            setSegment(firstSegment);
            fetch(`${import.meta.env.VITE_API_KEY}/${routeKey}/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    form.setFieldsValue({
                        title: data.title,
                        description: data.description,
                        path: data.path,
                        thumbnail: [
                            {
                                uid: "-2",
                                status: "done",
                                url: data.thumbnail,
                                name: `thumbnail_${id}`,
                            },
                        ],
                    })
                    setEditorValue(data.content);
                    setProjectDetails(data);
                }
                );
        } catch (error) {
            console.error("Error fetching Project Details:", error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);  // 'image' is the field name expected by the server
        let routeKey;
        if (segment === 'project-residentials') {
            routeKey = 'upload-residential-thumbnail'
        } else {
            routeKey = 'upload-commercial-thumbnail'
        }
        fetch(`${import.meta.env.VITE_API_KEY}/${routeKey}/${id}`, {
            method: 'POST',
            body: formData,  // Sending the image data
        })
            .then(async (response) => {
                if (response.status === 201) {
                    setSuccessNotification('Upload Thumbnail Successful!');
                    navigate('/project-settings');
                }
            }
            )
            .catch((error) => {
                console.log('Upload Project error:', error);
                setErrorNotification('Upload Project Failed. Please try again later.');
            });
    };

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        const dataBody = {
            path: formValue.path,
            content: editorValue,
            description: formValue.description,
            title: formValue.title
        }
        let routeKey;
        if (segment === 'project-residentials') {
            routeKey = 'update-project-residential'
        } else {
            routeKey = 'update-project-commercial'
        }
        fetch(`${import.meta.env.VITE_API_KEY}/${routeKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...dataBody,
                id: id
            })
        })
            .then(async (response) => {
                if (response.status === 204) {
                    setSuccessNotification('Update Successful!');
                    if (thumbNail !== undefined) {
                        uploadImage(thumbNail)
                    } else {
                        navigate('/project-settings');
                    }
                }
            }
            )
            .catch((error) => {
                console.log('Update Project error:', error);
                setErrorNotification('Update Failed. Please try again later.');
            });
    };

    const checkFileType = (e: any) => {
        if (e.type === "image/jpeg" || e.type === "image/png") {
            if (e.size > 1000000) {
                setErrorNotification('Image file size is more than 1MB. Please try a smaller size file.');
                return Upload.LIST_IGNORE;
            }
            return false;
        }
        setErrorNotification('Only .jpg, .jpeg and .png image file format are accepted!');
        return Upload.LIST_IGNORE;
    };

    //upload file
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        setThumbnail(e.file);
        return e && e.fileList;
    };

    // Display image preview
    const handlePreview = async (file: any) => {
        file = await handleImagePreview(file);
        setDisplayImg({
            previewVisible: true,
            previewImage: file.url || file.preview,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
        });
    };

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Basic Information',
            children: <div className="form-container">

                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        {getInputFormItem('Title', "title", 'Please fill in the Title.')}
                        {getTextAreaFormItem('Description', "description", 'Please fill in the Description.', 6)}
                        {getInputFormItem('Path', "path", 'Please fill in the Path.')}
                        {getLimitUploadFormItem('thumbnail', 'Thumbnail', normFile, handlePreview, checkFileType, false)}
                        {/* {getUploadFormItem('thumbnail', 'Thumbnail', normFile, handlePreview, checkFileType, defaultTN, false)} */}
                    </Form>
                </div>
            </div>,
        },
        {
            key: '2',
            label: 'Project Content',
            children: <div className="form-container">
                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        <Form.Item name='content'>
                            <TextEditor className={'para-editor'} routeName={`/upload-${segment}-images`} setEditorValue={setEditorValue} editorValue={editorValue} />
                        </Form.Item>

                        <br />
                        <br />
                    </Form>
                </div>
            </div>,
        },
    ];

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Collapse style={{ textAlign: 'left' }} items={items} defaultActiveKey={['1']} onChange={onChange} />;
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/project-settings')}>Cancel</Button>
            </div>
            <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
        </>
    )
}

export default EditProject