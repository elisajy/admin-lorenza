import { Button, Card, Form } from "antd";
import { getInputFormItem, getInputNumberFormItem } from "../../utils/FormItems";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";

const EditFAQSection = () => {
    const pageTitle = 'Edit FAQ Section'
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [form] = Form.useForm();
    const { setSuccessNotification, setErrorNotification } = useNotification();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/faq-section-details/${id}`)
            .then((response) => response.json())
            .then((data) => {
                form.setFieldsValue({
                    'name': data.name,
                    'sequence': data.sequence,
                })
            }
            );
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/update-faq-section`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...formValue,
                id: id
            }),
        })
            .then((response) => {
                if (response.status === 204) {
                    setSuccessNotification('Update Successful!')
                    navigate('/faq-section-settings');
                }
            }
            )
            .catch((error) => {
                console.log('Update FAQ Section error:', error);
                setErrorNotification('Update Failed. Please try again later.');
            });

    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Edit FAQ" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('FAQ Section', "name", 'Please fill in the FAQ Title.')}
                            {getInputNumberFormItem('FAQ Section Sequence', "sequence", 'Please fill in sequence.')}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate(-1)}>Cancel</Button>
            </div>
        </>
    )
}

export default EditFAQSection