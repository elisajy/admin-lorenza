import { Button, Card, Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import PreviewImage from "../../../shared/PreviewImage";
import { handleImagePreview } from "../../../shared/helpers/handle-image-preview.helper";
import { getInputFormItem, getInputNumberFormItem, getUploadFormItem } from "../../utils/FormItems";

const EditBanner = () => {
    const pageTitle = 'Edit Banner'
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [bannerImage, setBannerImage] = useState<any>();
    const [bannerMobileImage, setBannerMobileImage] = useState<any>();
    const [displayImg, setDisplayImg] = useState({
        previewVisible: false, previewImage: '', previewTitle: ''
    });
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/home-banner-details/${id}`)
            .then((response) => response.json())
            .then((data) => {
                form.setFieldsValue({
                    name: data.name,
                    sequence: data.sequence,
                    link: data.link,
                    imageUrl: [
                        {
                            uid: "-2",
                            status: "done",
                            url: data.imageUrl,
                            name: `image_${id}`,
                        },
                    ],
                    mobileImageUrl: data.mobileImageUrl ? [
                        {
                            uid: "-3",
                            status: "done",
                            url: data.mobileImageUrl,
                            name: `mobile_image_${id}`,
                        },
                    ] : [],
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
        setBannerImage(e.file);
        return e && e.fileList;
    };

    //upload file
    const normFileMobile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        setBannerMobileImage(e.file);
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

    const uploadImage = async (file: File, responseId: any, type: string) => {
        const formData = new FormData();
        formData.append('image', file);  // 'image' is the field name expected by the server

        fetch(`${import.meta.env.VITE_API_KEY}/upload-home-banner/${responseId}/${type}`, {
            method: 'POST',
            body: formData,  // Sending the image data
        })
            .then(async (response) => {
                if (response.status === 204) {
                    setSuccessNotification('Upload Banner Successful!');
                    navigate('/banners');
                }
            }
            )
            .catch((error) => {
                console.log('Upload Banner error:', error);
                setErrorNotification('Upload Banner Failed. Please try again later.');
            });

    };


    const submitForm = () => {
        const formValue = form.getFieldsValue();
        const dataBody = {
            name: formValue.name,
            sequence: formValue.sequence,
            link: formValue.link
        }

        fetch(`${import.meta.env.VITE_API_KEY}/update-home-banner`, {
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
                    if (bannerImage !== undefined) {
                        uploadImage(bannerImage, id, "normal");
                    }
                    if (bannerMobileImage !== undefined) {
                        uploadImage(bannerMobileImage, id, "mobile");
                    }
                    if (!bannerImage && !bannerMobileImage) {
                        navigate('/banners');
                    }
                }
            }
            )
            .catch((error) => {
                console.log('Update Banner error:', error);
                setErrorNotification('Update Failed. Please try again later.');
            });
    };


    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Edit Banner" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Banner Name', "name", 'Please fill in the Banner Name.')}
                            {getInputFormItem('Banner Link', "link", 'Please fill in the Banner Link.')}
                            {getInputNumberFormItem('Banner Sequence', "sequence", 'Please fill in sequence.')}
                        </Form>
                    </div>
                </div>
            </Card>
            <Card title="Banner Image" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout="vertical"
                            form={form}
                            className="form-box">
                            {getUploadFormItem('imageUrl', 'Banner Image', normFile, handlePreview, checkFileType, false)}
                        </Form>
                        <Form
                            layout="vertical"
                            form={form}
                            className="form-box">
                            {getUploadFormItem('mobileImageUrl', 'Banner Mobile Image', normFileMobile, handlePreview, checkFileType, false)}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate(-1)}>Cancel</Button>
            </div>
            <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
        </>
    )
}

export default EditBanner