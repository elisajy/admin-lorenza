import { Button, Card, Form } from "antd";
import { useEffect, useState } from "react";
import { getInputFormItem, getSelectFormItem, getInputNumberFormItem } from "../../utils/FormItems";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import TextEditorWithoutImage from "../../../shared/TextEditorWithoutImage";

const AddFAQ = () => {
    const pageTitle = 'Add FAQ Question'
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [faqTypeList, setFAQTypeList] = useState<any>();
    const [editorValue, setEditorValue] = useState<any>();
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


    const submitForm = () => {
        const formValue = { ...form.getFieldsValue(), answer: editorValue };
        fetch(`${import.meta.env.VITE_API_KEY}/add-faq-question`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue)
        })
            .then((response) => {
                if (response.status === 201) {
                    setSuccessNotification('Insert Successful!');
                    navigate('/faq-settings');
                }
            }
            )
            .catch((error) => {
                console.log('Insert FAQ Question error:', error);
                setErrorNotification('Insert Failed. Please try again later.');
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
                                    getSelectFormItem('FAQ Type', 'sectionId', 'Please select a FAQ Type.', false, faqTypeList)
                                    :
                                    null
                            }
                            {getInputNumberFormItem('Sequence', "sequence", 'Please fill in sequence.')}
                            {getInputFormItem('FAQ Title', "question", 'Please fill in the FAQ Title.')}
                            <label>FAQ Description</label>
                            <Form.Item name='answer' style={{ marginBottom: '0.5rem' }}>
                                <TextEditorWithoutImage className={'faq-editor-small'} editorValue={editorValue} setEditorValue={setEditorValue} />
                            </Form.Item>
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

export default AddFAQ