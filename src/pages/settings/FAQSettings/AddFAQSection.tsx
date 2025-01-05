import { Button, Card, Form } from "antd";
import { getInputFormItem, getInputNumberFormItem } from "../../utils/FormItems";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";

const AddFAQSection = () => {
    const pageTitle = 'Add FAQ Section'
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { setSuccessNotification, setErrorNotification } = useNotification();

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/add-faq-section`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        })
            .then((response) => {
                if (response.status === 201) {
                    setSuccessNotification('Insert Successful!');
                    navigate('/faq-section-settings');
                }
            }
            )
            .catch((error) => {
                console.log('Insert FAQ Section error:', error);
                setErrorNotification('Insert Failed. Please try again later.');
            });

    };


    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Add FAQ Section" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('FAQ Section', "name", 'Please fill in the FAQ Section.')}
                            {getInputNumberFormItem('FAQ Section Sequence', "sequence", 'Please fill in sequence.')}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/faq-section-settings')}>Cancel</Button>
            </div>
        </>
    )
}

export default AddFAQSection