import { Button, Card, Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import PreviewImage from "../../../shared/PreviewImage";
import { handleImagePreview } from "../../../shared/helpers/handle-image-preview.helper";
import { getInputFormItem, getInputNumberFormItem, getLimitUploadFormItem } from "../../utils/FormItems";
import { useCookies } from "react-cookie";

const AboutUsImage = () => {
    const pageTitle = 'Modify About Us Image'
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const aToken: any = import.meta.env.VITE_ACCESS_TOKEN || 'abf-at';
    const [cookies, setCookie, removeCookie] = useCookies([aToken]);
    const [aboutUsImage, setAboutUsImage] = useState<any>();
    const [displayImg, setDisplayImg] = useState({
        previewVisible: false, previewImage: '', previewTitle: ''
    });

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/about-us`, {
            headers: {
                'Authorization': `Bearer ${cookies[aToken]}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                form.setFieldsValue({
                    image: [
                        {
                            uid: "-2",
                            status: "done",
                            url: data[5].content,
                            name: `image_aboutus`,
                        },
                    ],
                })
            }
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        setAboutUsImage(e.file);
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

        fetch(`${import.meta.env.VITE_API_KEY}/modify-about-us-image/6`, {
            method: 'POST',
            body: formData,  // Sending the image data
        })
            .then(async (response) => {
                if (response.status === 201) {
                    setSuccessNotification('Upload Image Successful!');
                    navigate('/');
                }
            }
            )
            .catch((error) => {
                console.log('Upload Partner error:', error);
                setErrorNotification('Upload Partner Failed. Please try again later.');
            });

    };

    const submitForm = async () => {
        const formValue = form.getFieldsValue();
        if ((formValue.image === undefined) || (formValue.image && formValue.image.length === 0)) {
            return setErrorNotification('Please ensure that image is uploaded.');
        }

        await uploadImage(aboutUsImage)

    };


    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="About Us Image" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout="vertical"
                            form={form}
                            className="form-box">
                            {getLimitUploadFormItem('image', 'About Us Image', normFile, handlePreview, checkFileType, false)}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/')}>Cancel</Button>
            </div>
            <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
        </>
    )
}

export default AboutUsImage