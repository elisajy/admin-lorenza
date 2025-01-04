import { Button, Card, Form } from "antd";
import { getInputFormItem, getInputNumberFormItem } from "../../utils/FormItems";

const EditMenuListing = () => {
    const pageTitle = 'Edit Menu Listing'
    const [form] = Form.useForm();

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Edit Menu Listing" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Menu Title', "menuTitle", 'Please fill in the Menu Title.')}
                            {getInputNumberFormItem('Menu Sequence', "sequence", 'Please fill in sequence.')}
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

export default EditMenuListing