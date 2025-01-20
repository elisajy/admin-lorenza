import { Button, Card, Form } from "antd";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import TextEditorWithoutImage from "../../../shared/TextEditorWithoutImage";
import "./AboutUsSettings.less";

const AboutUsSettings = () => {
    const navigate = useNavigate();
    const pageTitle = 'About Us';
    const aToken: any = import.meta.env.VITE_ACCESS_TOKEN || 'abf-at';
    const [form] = Form.useForm();
    const [aboutUsRecords, setAboutUsRecords] = useState<any>();
    const [cookies, setCookie, removeCookie] = useCookies([aToken]);
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [editorValue1, setEditorValue1] = useState<any>();
    const [editorValue2, setEditorValue2] = useState<any>();
    const [editorValue3, setEditorValue3] = useState<any>();
    const [editorValue4, setEditorValue4] = useState<any>();
    const [editorValue5, setEditorValue5] = useState<any>();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/about-us`, {
            headers: {
                'Authorization': `Bearer ${cookies[aToken]}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAboutUsRecords(data);
                setEditorValue1(data[0].content);
                setEditorValue2(data[1].content);
                setEditorValue3(data[2].content);
                setEditorValue4(data[3].content);
                setEditorValue5(data[4].content);
            }
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitForm = () => {
        const dataBody = [
            {
                id: 1, content: editorValue1
            },
            {
                id: 2, content: editorValue2
            },
            {
                id: 3, content: editorValue3
            },
            {
                id: 4, content: editorValue4
            },
            {
                id: 5, content: editorValue5
            }
        ]
        fetch(`${import.meta.env.VITE_API_KEY}/update-about-us`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookies[aToken]}`
            },
            body: JSON.stringify(dataBody)
        })
            .then((response) => {
                if (response.status === 204) {
                    setSuccessNotification('Update Successful!')
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
                                                <TextEditorWithoutImage className={'para-editor-small'} editorValue={editorValue1} setEditorValue={setEditorValue1} />
                                            </Form.Item>
                                        </Card>
                                        <Card title="Paragraph 2" className='para-card'>
                                            <Form.Item name='para2'>
                                                <TextEditorWithoutImage className={'para-editor-small'} editorValue={editorValue2} setEditorValue={setEditorValue2} />
                                            </Form.Item>
                                        </Card>
                                        <Card title="Paragraph 3" className='para-card'>
                                            <Form.Item name='para3'>
                                                <TextEditorWithoutImage className={'para-editor-small'} editorValue={editorValue3} setEditorValue={setEditorValue3} />
                                            </Form.Item>
                                        </Card>
                                        <Card title="Paragraph 4" className='para-card'>
                                            <Form.Item name='para4'>
                                                <TextEditorWithoutImage className={'para-editor-small'} editorValue={editorValue4} setEditorValue={setEditorValue4} />
                                            </Form.Item>
                                        </Card>
                                        <Card title="Paragraph 5" className='para-card'>
                                            <Form.Item name='para5'>
                                                <TextEditorWithoutImage className={'para-editor-small'} editorValue={editorValue5} setEditorValue={setEditorValue5} />
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