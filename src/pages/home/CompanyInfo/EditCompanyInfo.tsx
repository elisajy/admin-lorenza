import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { Button, Card, Form, Upload } from "antd";
import { getInputFormItem, getTextAreaFormItem, getLimitUploadFormItem, getUploadFormItem } from "../../utils/FormItems";
import { handleImagePreview } from "../../../shared/helpers/handle-image-preview.helper";
import PreviewImage from "../../../shared/PreviewImage";
import TextEditorWithoutImage from "../../../shared/TextEditorWithoutImage";

const EditCompanyInfo = () => {
    const pageTitle = 'Edit Company Info'
    const navigate = useNavigate();
    const { key } = useParams<{ key: string }>();
    const [form] = Form.useForm();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [storyImage, setStoryImage] = useState<any>();
    const [displayImg, setDisplayImg] = useState({
        previewVisible: false, previewImage: '', previewTitle: ''
    });
    
    const [editorValue, setEditorValue] = useState<any>();

    const getKeyName = (key: string) => {
        switch (key) {
            case 'COMPANY_NAME':
                return 'Company Name';
            case 'COMPANY_REGISTRATION_NUMBER':
                return 'Company Registration Number';
            case 'ADDRESS':
                return 'Address';
            case 'OPERATING_HOURS':
                return 'Operating Hours';
            case 'CONTACT_DESKTOP':
                return 'Contact Desktop View';
            case 'CONTACT_MOBILE':
                return 'Contact Mobile View';
            case 'FACEBOOK':
                return 'Facebook Link';
            case 'INSTAGRAM':
                return 'Instagram Link';
            case 'OUR_STORY_TEXT':
                return 'Our Story - Text';
            case 'OUR_STORY_IMG':
                return 'Our Story - Image';
            default:
                return null;
        }
    }

    useEffect(() => {
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/company-info/${key}`)
                .then((response) => response.json())
                .then((data) => {
                    form.setFieldsValue({
                        title: getKeyName(data.key),
                        value: data.key !== 'OUR_STORY_IMG' ? data.value : [
                            {
                                uid: "-2",
                                status: "done",
                                url: data.value,
                                name: `img_${data.key}`,
                            },
                        ],
                    });
                    setEditorValue(data.value);
                }
                );
        } catch (error) {
            console.error("Error fetching Company Info:", error);
        }
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        const dataBody = {
            value: formValue.title.toUpperCase().includes("CONTACT") ? editorValue : formValue.value
        }
        fetch(`${import.meta.env.VITE_API_KEY}/update-company-info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...dataBody,
                key: key
            })
        })
            .then(async (response) => {
                if (response.status === 204) {
                    setSuccessNotification('Update Successful!');
                    if (key === 'OUR_STORY_IMG') {
                        uploadImage(storyImage);
                    } else {
                        navigate('/company-info');
                    }
                }
            }
            )
            .catch((error) => {
                console.log('Update Company Info error:', error);
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
        setStoryImage(e.file);
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

    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);  // 'image' is the field name expected by the server

        fetch(`${import.meta.env.VITE_API_KEY}/modify-our-story-image/${key}`, {
            method: 'POST',
            body: formData,  // Sending the image data
        })
            .then(async (response) => {
                if (response.status === 201) {
                    setSuccessNotification('Upload Image Successful!');
                    navigate('/company=info');
                }
            }
            )
            .catch((error) => {
                console.log('Upload Image error:', error);
                setErrorNotification('Upload Image Failed. Please try again later.');
            });
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Edit Company Info" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        {
                            key?.includes('OUR_STORY') ?
                                <>
                                    {
                                        key === 'OUR_STORY_TEXT' ?
                                            <Form
                                                layout='vertical'
                                                form={form}
                                                className="form-box"
                                            >
                                                {getInputFormItem('Title', "title", 'Please fill in the title.', '', true)}
                                                {getTextAreaFormItem('Text', "value", 'Please fill in the text.', 6)}
                                            </Form>
                                            :
                                            <Form
                                                layout='vertical'
                                                form={form}
                                                className="form-box"
                                            >
                                                {getInputFormItem('Title', "title", 'Please fill in the title.', '', true)}
                                                {getLimitUploadFormItem('value', 'Image', normFile, handlePreview, checkFileType, false)}
                                            </Form>
                                    }
                                </>
                                :
                                key?.includes('CONTACT') ?
                                    <Form
                                        layout='vertical'
                                        form={form}
                                        className="form-box"
                                    >
                                        {getInputFormItem('Title', "title", 'Please fill in the title.', '', true)}
                                        <Form.Item name='value'>
                                            <TextEditorWithoutImage className={'para-editor-small'} editorValue={editorValue} setEditorValue={setEditorValue} />
                                        </Form.Item>
                                    </Form>
                                    :
                                    <Form
                                        layout='vertical'
                                        form={form}
                                        className="form-box"
                                    >
                                        {getInputFormItem('Title', "title", 'Please fill in the title.', '', true)}
                                        {getInputFormItem('Value', "value", 'Please fill in the value.')}
                                    </Form>
                        }
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/company-info')}>Cancel</Button>
            </div>
            <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
        </>
    )
};

export default EditCompanyInfo