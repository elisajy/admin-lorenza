import { Button, Card, Form } from "antd";
import { getInputFormItem } from "../../utils/FormItems";

const EdtiFAQSection = () => {
    const pageTitle = 'Edit FAQ Section'
    const [form] = Form.useForm();

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
                            {getInputFormItem('FAQ Title', "faqTitle", 'Please fill in the FAQ Title.')}
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

export default EdtiFAQSection