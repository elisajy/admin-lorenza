import { Button, Card, Form } from "antd";
import { getInputFormItem, getSelectFormItem, getTextAreaFormItem } from "../../utils/FormItems";
import { faqType } from "../../products/dummyProduct";
import { useEffect, useState } from "react";

const EditFAQ = () => {
    const pageTitle = 'Edit FAQ Title'
    const [form] = Form.useForm();
    const [faqTypeList, setFAQTypeList] = useState<any>();

    useEffect(() => {
        const typeList = faqType();
        let array: { val: any; label: any; }[] = [];
        typeList.map((x: any) => {
            array.push(
                { val: x.id, label: x.name }
            )
        })

        setFAQTypeList(array);
    }, []);

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
                <Button type="primary" className='form-button'>Save</Button>
                <Button className='form-button'>Cancel</Button>
            </div>
        </>
    )
}

export default EditFAQ