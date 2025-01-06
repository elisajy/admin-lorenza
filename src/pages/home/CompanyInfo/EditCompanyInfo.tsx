import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { Button, Card, Form } from "antd";
import { getInputFormItem, getTextAreaFormItem, getLimitUploadFormItem, getUploadFormItem } from "../../utils/FormItems";

const EditCompanyInfo = () => {
    const pageTitle = 'Edit Company Info'
    const navigate = useNavigate();
    const { key } = useParams<{ key: string }>();
    const [form] = Form.useForm();
    const { setSuccessNotification, setErrorNotification } = useNotification();

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
            case 'CONTACT_TEL':
                return 'Contact Tel No.';
            case 'CONTACT_FAX':
                return 'Contact Fax No.';
            case 'FACEBOOK':
                return 'Facebook Link';
            case 'INSTAGRAM':
                return 'Instagram Link';
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
                        value: data.value
                    })
                }
                );
        } catch (error) {
            console.error("Error fetching Company Info:", error);
        }
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        const dataBody = {
            value: formValue.value
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
                    navigate('/company-info');
                }
            }
            )
            .catch((error) => {
                console.log('Update Company Info error:', error);
                setErrorNotification('Update Failed. Please try again later.');
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
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Title', "title", 'Please fill in the title.', '', true)}
                            {getInputFormItem('Value', "value", 'Please fill in the value.')}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/company-info')}>Cancel</Button>
            </div>
        </>
    )
};

export default EditCompanyInfo