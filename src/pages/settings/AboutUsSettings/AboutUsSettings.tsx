import { Button, Card, Form } from "antd";
import { useEffect, useState } from "react";
import TextEditor from '../../../shared/TextEditor';
import "./AboutUsSettings.less";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";

const AboutUsSettings = () => {
    const navigate = useNavigate();
    const pageTitle = 'About Us'
    const [form] = Form.useForm();
    const [aboutUsRecords, setAboutUsRecords] = useState<any>();
    const { setSuccessNotification, setErrorNotification } = useNotification();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/about-us`)
            .then((response) => response.json())
            .then((data) => {
                setAboutUsRecords(data);
                form.setFieldsValue({
                    'para1': data[0].content,
                    'para2': data[1].content,
                    'para3': data[2].content,
                    'para4': data[3].content,
                    'para5': data[4].content
                })
            }
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue()
        const dataBody = [
            {
                id: 1, content: formValue.para1
            },
            {
                id: 2, content: formValue.para2
            },
            {
                id: 3, content: formValue.para3
            },
            {
                id: 4, content: formValue.para4
            },
            {
                id: 5, content: formValue.para5
            }
        ]
        fetch(`${import.meta.env.VITE_API_KEY}/update-about-us`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody)
        })
            .then((response) => console.log(response))
            .then((data) => {
                console.log(data);
                setSuccessNotification('Update Successful!');
            })
            .catch((error) => {
                console.log(error);
                setErrorNotification('Update Failed. Please try again later.');
            });
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {
                                aboutUsRecords && aboutUsRecords.length > 0 ?
                                    <>
                                        <Card title="Paragraph 1" className='para-card'>
                                            <Form.Item name='para1'>
                                                <TextEditor className={'para-editor'} />
                                            </Form.Item>
                                        </Card>
                                        <Card title="Paragraph 2" className='para-card'>
                                            <Form.Item name='para2'>
                                                <TextEditor className={'para-editor'} />
                                            </Form.Item>
                                        </Card>
                                        <Card title="Paragraph 3" className='para-card'>
                                            <Form.Item name='para3'>
                                                <TextEditor className={'para-editor'} />
                                            </Form.Item>
                                        </Card>
                                        <Card title="Paragraph 4" className='para-card'>
                                            <Form.Item name='para4'>
                                                <TextEditor className={'para-editor'} />
                                            </Form.Item>
                                        </Card>
                                        <Card title="Paragraph 5" className='para-card'>
                                            <Form.Item name='para5'>
                                                <TextEditor className={'para-editor'} />
                                            </Form.Item>
                                        </Card>
                                    </>
                                    :
                                    null
                            }
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/')}>Cancel</Button>
            </div>
        </>
    )
}

export default AboutUsSettings