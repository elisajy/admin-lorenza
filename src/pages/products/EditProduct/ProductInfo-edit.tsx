import { Form, Input } from "antd"
import './EditProduct.less'
import { getInputFormItem, getSelectFormItem, getTextAreaFormItem, getTagsFormItem } from "../../utils/FormItems";

interface Props {
    form: any;
    categoryData: any;
    colorData: any;
    finishesData: any;
    sizesData: any;
    tagsData: any;
}

const ProductInfoEdit = ({ form, categoryData, colorData, finishesData, sizesData, tagsData }: Props) => {

    return (
        <>
            <div className="form-container">
                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        {getInputFormItem('Product Name', "prdName", 'Please fill in the Product Name.')}
                        {getSelectFormItem('Product Category', 'prdCategory', 'Please select a category.', false, categoryData)}
                        {getInputFormItem('Product Variation', "prdVariation", 'Please fill in the Product Variation.')}
                        {getTextAreaFormItem('Product Description', "prdDesc", 'Please fill in the Product Description.', 6)}

                    </Form>
                </div>
                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        {getInputFormItem('Product Code', "prdCode", 'Please fill in the Product Code.')}
                        {getInputFormItem('Product Thickness', "prdThickness", 'Please fill in the Product Thickness.')}
                        {getSelectFormItem('Product Size', 'prdSize', 'Please select a Size.', false, sizesData)}
                        {getSelectFormItem('Product Color', 'prdColor', 'Please select a Color.', false, colorData)}
                        {getSelectFormItem('Product Finishes', 'prdFinish', 'Please select a Finishes.', false, finishesData)}
                        {getTagsFormItem('Product Tags', 'prdTag', 'Please select a Tag.', false, tagsData)}
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ProductInfoEdit 