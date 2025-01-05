import { Button, Card, Form } from "antd";
import { useEffect, useState } from "react";
import { getInputFormItem, getSelectFormItem, getTextAreaFormItem } from "../../utils/FormItems";
import { useNavigate } from "react-router-dom";

const AddFAQ = () => {
    const pageTitle = 'Add FAQ Question'
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [faqTypeList, setFAQTypeList] = useState<any>();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/all-faq-sections`)
            .then((response) => response.json())
            .then((data) => {
                let array: { val: any; label: any; }[] = [];
                data.map((x: any) => {
                    array.push(
                        { val: x.id, label: x.name }
                    )
                })

                setFAQTypeList(array);
            }
            );
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/add-faq-question`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue)
        })
            .then((response) => console.log(response))
            .then((data) => {
                console.log(data);
                // setSuccessNotification('Update Successful!');
            })
            .catch((error) => {
                console.log(error);
                // setErrorNotification('Update Failed. Please try again later.');
            });
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Add FAQ Question" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {
                                faqTypeList && faqTypeList.length > 0 ?
                                    getSelectFormItem('FAQ Type', 'faqTypeId', 'Please select a FAQ Type.', false, faqTypeList)
                                    :
                                    null
                            }
                            {getInputFormItem('FAQ Title', "faqTitle", 'Please fill in the FAQ Title.')}
                            {getTextAreaFormItem('FAQ Description', "faqDesc", 'Please fill in the FAQ Description.', 6)}

                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/faq-settings')}>Cancel</Button>
            </div>
        </>
    )
}

export default AddFAQ