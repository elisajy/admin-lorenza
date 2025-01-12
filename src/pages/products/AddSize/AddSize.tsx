import { Button, Card, Form } from "antd";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { getInputFormItem } from "../../utils/FormItems";

const AddSize = () => {
    const pageTitle = 'New Size'
    const [form] = Form.useForm();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const navigate = useNavigate();

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/add-size`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        })
            .then((response) => {
                if (response.status === 201) {
                    setSuccessNotification('Insert Successful!')
                    navigate('/product-sizes');
                }
            }
            )
            .catch((error) => {
                console.log('Insert Product Size error:', error);
                setErrorNotification('Insert Failed. Please try again later.');
            });
    };


    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Size Info" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Size Name', "name", 'Please fill in the Tag Name.')}
                            {getInputFormItem('Size Value', "value", 'Please fill in the Tag Value.')}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/product-sizes')}>Cancel</Button>
            </div>
        </>
    )
}

export default AddSize