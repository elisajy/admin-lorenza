import { Button, Card, Form, Upload } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import PreviewImage from "../../../shared/PreviewImage";
import { handleImagePreview } from "../../../shared/helpers/handle-image-preview.helper";
import { getInputFormItem, getInputNumberFormItem, getLimitUploadFormItem } from "../../utils/FormItems";

const AddPartner = () => {
    const pageTitle = 'New Partner'
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [partnerImage, setPartnerImage] = useState<any>();
    const [displayImg, setDisplayImg] = useState({
        previewVisible: false, previewImage: '', previewTitle: ''
    });

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
        setPartnerImage(e.file);
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

    const uploadImage = async (file: File, responseId: any) => {
        const formData = new FormData();
        formData.append('image', file);  // 'image' is the field name expected by the server

        fetch(`${import.meta.env.VITE_API_KEY}/upload-home-partner/${responseId}`, {
            method: 'POST',
            body: formData,  // Sending the image data
        })
            .then(async (response) => {
                if (response.status === 201) {
                    setSuccessNotification('Upload Partner Successful!');
                    navigate('/partners');
                }
            }
            )
            .catch((error) => {
                console.log('Upload Partner error:', error);
                setErrorNotification('Upload Partner Failed. Please try again later.');
            });

    };

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        const dataBody = {
            name: formValue.name,
            sequence: formValue.sequence,
        }

        fetch(`${import.meta.env.VITE_API_KEY}/add-home-partner`, {
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
                    uploadImage(partnerImage, data.id)
                }
            }
            )
            .catch((error) => {
                console.log('Insert Partner error:', error);
                setErrorNotification('Insert Failed. Please try again later.');
            });
    };


    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="New Partner" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Partner Name', "name", 'Please fill in the Banner Name.')}
                            {getInputNumberFormItem('Partner Sequence', "sequence", 'Please fill in sequence.')}
                        </Form>
                    </div>
                </div>
            </Card>
            <Card title="Partner Image" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout="vertical"
                            form={form}
                            className="form-box">
                            {getLimitUploadFormItem('image', 'Partner Image', normFile, handlePreview, checkFileType)}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/partners')}>Cancel</Button>
            </div>
            <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
        </>
    )
}

export default AddPartner