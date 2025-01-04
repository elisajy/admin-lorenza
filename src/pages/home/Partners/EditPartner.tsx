import { Button, Card, Form, Upload } from "antd";
import { useEffect, useState } from "react";
import useNotification from "../../../hooks/layout/useNotification";
import PreviewImage from "../../../shared/PreviewImage";
import { handleImagePreview } from "../../../shared/helpers/handle-image-preview.helper";
import { imageType } from "../../products/dummyProduct";
import { getInputFormItem, getInputNumberFormItem, getSelectFormItem, getUploadFormItem } from "../../utils/FormItems";

const EditPartner = () => {
    const pageTitle = 'Edit Partner'
    const [form] = Form.useForm();
    const [imageTypeList, setImageTypeList] = useState<any>();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [bannerImage, setBannerImage] = useState();
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const [displayImg, setDisplayImg] = useState({
        previewVisible: false, previewImage: '', previewTitle: ''
    });
    useEffect(() => {
        const arr = imageType();
        let array: { val: any; label: any; }[] = [];
        arr.map((x: any) => {
            array.push(
                { val: x.id, label: x.name }
            )
        })

        setImageTypeList(array);
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

    // Display image preview
    const handlePreview = async (file: any) => {
        file = await handleImagePreview(file);
        setDisplayImg({
            previewVisible: true,
            previewImage: file.url || file.preview,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
        });
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Edit Partner" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Partner Name', "name", 'Please fill in the Banner Name.')}
                            {getInputNumberFormItem('Partner Sequence', "sequence", 'Please fill in sequence.')}
                            {
                                imageTypeList && imageTypeList.length > 0 ?
                                    getSelectFormItem('Image Type', 'type', 'Please select an image type.', false, imageTypeList)
                                    :
                                    null
                            }
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
                            {getUploadFormItem('image', 'Partner Image', normFile, handlePreview, checkFileType)}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button'>Save</Button>
                <Button className='form-button'>Cancel</Button>
            </div>
            <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
        </>
    )
}

export default EditPartner