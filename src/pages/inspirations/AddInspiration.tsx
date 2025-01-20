import { Button, Collapse, CollapseProps, Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/layout/useNotification";
import { handleImagePreview } from "../../shared/helpers/handle-image-preview.helper";
import PreviewImage from "../../shared/PreviewImage";
import TextEditor from "../../shared/TextEditor";
import { getInputFormItem, getTextAreaFormItem, getLimitUploadFormItem } from "../utils/FormItems";

const AddInspiration = () => {
    const pageTitle = 'New Inspiration'
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [thumbNail, setThumbnail] = useState<any>();
    const [editorValue, setEditorValue] = useState<any>();
    const [displayImg, setDisplayImg] = useState({
        previewVisible: false, previewImage: '', previewTitle: ''
    });

    const uploadImage = async (file: File, responseId: any) => {
        const formData = new FormData();
        formData.append('image', file);  // 'image' is the field name expected by the server

        fetch(`${import.meta.env.VITE_API_KEY}/upload-inspiration-thumbnail/${responseId}`, {
            method: 'POST',
            body: formData,  // Sending the image data
        })
            .then(async (response) => {
                if (response.status === 201) {
                    setSuccessNotification('Upload Thumbnail Successful!');
                    navigate('/inspiration-settings');
                }
            }
            )
            .catch((error) => {
                console.log('Upload Thumbnail error:', error);
                setErrorNotification('Upload Thumbnail Failed. Please try again later.');
            });

    };

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        if ((formValue.thumbnail === undefined) || (formValue.thumbnail && formValue.thumbnail.length === 0)) {
            return setErrorNotification('Please ensure that image is uploaded.');
        }

        const dataBody = {
            path: formValue.path,
            content: editorValue,
            description: formValue.description,
            title: formValue.title
        }
        fetch(`${import.meta.env.VITE_API_KEY}/add-inspiration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody)
        })
            .then(async (response) => {
                if (response.status === 201) {
                    setSuccessNotification('Insert Successful!');
                    const data = await response.json()
                    uploadImage(thumbNail, data.id)
                }
            }
            )
            .catch((error) => {
                console.log('Insert Inspiration error:', error);
                setErrorNotification('Insert Failed. Please try again later.');
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
                    </Form>
                </div>

            </div>,
        },
        {
            key: '2',
            label: 'Inspiration Content',
            children: <div className="form-container">
                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        <Form.Item name='content'>
                            <TextEditor className={'para-editor'} routeName={'/upload-inspirations-images'} setEditorValue={setEditorValue} editorValue={editorValue}/>
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
                <Button className='form-button' onClick={() => navigate('/inspiration-settings')}>Cancel</Button>
            </div>
            <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
        </>
    )
}

export default AddInspiration