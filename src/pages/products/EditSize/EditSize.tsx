import { Button, Card, Form } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { getInputFormItem } from "../../utils/FormItems";

const EditSize = () => {
    const pageTitle = 'Edit Size'
    const [form] = Form.useForm();
    const { id } = useParams<{ id: string }>();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/size-details/${id}`)
            .then((response) => response.json())
            .then((data) => {
                form.setFieldsValue({
                    'name': data.name,
                    'value': data.value,
                })
            }
            );
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/update-size`, {
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
                    navigate('/product-sizes');
                }
            }
            )
            .catch((error) => {
                console.log('Update Product Sizes error:', error);
                setErrorNotification('Update Failed. Please try again later.');
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
                            {getInputFormItem('Size Name', "name", 'Please fill in the Size Name.')}
                            {getInputFormItem('Size Value', "value", 'Please fill in the Size Value.')}
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

export default EditSize