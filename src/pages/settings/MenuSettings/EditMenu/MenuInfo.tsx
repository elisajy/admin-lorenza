import { Form } from "antd";
import { getInputFormItem, getSelectFormItem } from "../../../utils/FormItems";

interface Props {
    form: any;
    categoryData: any;
}

const MenuInfo = ({ form, categoryData }: Props) => {
    return (
        <>
            <div className="form-container">
                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        {getInputFormItem('Menu Name', "menuName", 'Please fill in the Menu Name.')}
                        {getSelectFormItem('Main Category', 'mainCategory', 'Please select a category.', false, categoryData, true)}
                    </Form>
                </div>
                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        {getInputFormItem('Menu Description', "menuDesc", 'Please fill in the Menu Description.')}
                    </Form>
                </div>
            </div>
        </>
    )
};

export default MenuInfo