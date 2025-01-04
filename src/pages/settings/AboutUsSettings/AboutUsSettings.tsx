import { Button, Card, Form } from "antd";
import { useEffect, useState } from "react";
import { aboutUsRecordList } from "../../products/dummyProduct";
// import 'react-quill/dist/quill.snow.css';
import TextEditor from '../../../shared/TextEditor';
import "./AboutUsSettings.less";

const AboutUsSettings = () => {
    const pageTitle = 'About Us'
    const [form] = Form.useForm();
    const [aboutUsRecords, setAboutUsRecords] = useState<any>();
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');

    useEffect(() => {
        const records = aboutUsRecordList();
        let array: { val: any; label: any; }[] = [];
        records.map((x: any) => {
            array.push(
                { val: x.id, label: x.name }
            )
        })

        setAboutUsRecords(array);
    }, []);

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
                                aboutUsRecords && aboutUsRecords.length > 0 &&
                                <>
                                    <Card title="Paragraph 1" className='para-card'>
                                        <Form.Item>
                                            <TextEditor value={aboutUsRecords[0].label} onChange={setValue1} className={'para-editor'} />
                                        </Form.Item>
                                    </Card>
                                    <Card title="Paragraph 2" className='para-card'>
                                        <Form.Item>
                                            <TextEditor value={aboutUsRecords[1].label} onChange={setValue2} className={'para-editor'} />
                                        </Form.Item>
                                    </Card>
                                    <Card title="Paragraph 3" className='para-card'>
                                        <Form.Item>
                                            <TextEditor value={aboutUsRecords[2].label} onChange={setValue3} className={'para-editor'} />
                                        </Form.Item>
                                    </Card>
                                    <Card title="Paragraph 4" className='para-card'>
                                        <Form.Item>
                                            <TextEditor value={aboutUsRecords[3].label} onChange={setValue4} className={'para-editor'} />
                                        </Form.Item>
                                    </Card>
                                    <Card title="Paragraph 5" className='para-card'>
                                        <Form.Item>
                                            <TextEditor value={aboutUsRecords[4].label} onChange={setValue5} className={'para-editor'} />
                                        </Form.Item>
                                    </Card>
                                </>
                            }
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button'>Save</Button>
                <Button className='form-button'>Cancel</Button>
            </div>
        </>
    )
}

export default AboutUsSettings