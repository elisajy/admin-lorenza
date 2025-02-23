import { Button, Card, Form } from "antd";
import { getInputFormItem, getSelectFormItem, getTextAreaFormItem, getInputNumberFormItem } from "../../utils/FormItems";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";

const EditFAQ = () => {
    const pageTitle = 'Edit FAQ Question'
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [form] = Form.useForm();
    const [faqTypeList, setFAQTypeList] = useState<any>();
    const { setSuccessNotification, setErrorNotification } = useNotification();

    useEffect(() => {
        try {
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
        } catch (error) {
            console.error("Error fetching FAQ question:", error);
        }
    }, []);

    useEffect(() => {
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/faq-question-details/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    form.setFieldsValue({
                        'sectionId': data.sectionId,
                        'question': data.question,
                        'answer': data.answer,
                        'sequence': data.sequence
                    })
                }
                );
        } catch (error) {
            console.error("Error fetching FAQ question:", error);
        }
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/update-faq-question`, {
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
                    navigate('/faq-settings');
                }
            }
            )
            .catch((error) => {
                console.log('Update FAQ Question error:', error);
                setErrorNotification('Update Failed. Please try again later.');
            });
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Edit FAQ Question" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {
                                faqTypeList && faqTypeList.length > 0 ?
                                    getSelectFormItem('FAQ Type', 'sectionId', 'Please select a FAQ Type.', false, faqTypeList)
                                    :
                                    null
                            }
                            {getInputNumberFormItem('Sequence', "sequence", 'Please fill in sequence.')}
                            {getInputFormItem('FAQ Question', "question", 'Please fill in the FAQ Question.')}
                            {getTextAreaFormItem('FAQ Answer', "answer", 'Please fill in the FAQ Answer.', 8)}

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

export default EditFAQ