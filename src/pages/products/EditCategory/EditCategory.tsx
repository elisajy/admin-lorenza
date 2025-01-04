import { Button, Card, Form } from "antd";
import { getInputFormItem, getSelectFormItem } from "../../utils/FormItems";
import { categoryData } from "../dummyProduct";

const EditCategory = () => {
    const pageTitle = 'Category Name'
    const [form] = Form.useForm();
    const mainCategoryData = categoryData();
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Category Info" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Category Name', "categoryName", 'Please fill in the Category Name.')}
                            {getInputFormItem('Category Description', "categoryDesc", 'Please fill in the Category Description.')}
                            {getSelectFormItem('Main Category', 'mainCategoryId', 'Please select a Main Category.', false, mainCategoryData)}

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

export default EditCategory