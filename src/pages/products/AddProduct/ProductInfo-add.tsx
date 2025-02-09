import { Form } from "antd";
import { getInputFormItem, getInputNumberFormItem, getSelectFormItem, getTagsFormItem, getTextAreaFormItem } from "../../utils/FormItems";

interface Props {
    form: any;
    categoryData: any;
    tagsData: any;
    sizesData: any;
    finishesData: any;
    colorsData: any;
}

const ProductInfoAdd = ({ form, categoryData, finishesData, sizesData, tagsData, colorsData }: Props) => {

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
                        {
                            categoryData && categoryData.length > 0 &&
                            getTagsFormItem('Product Category', 'prdCategory', 'Please select category.', false, categoryData)
                        }
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
                        {
                            sizesData && sizesData.length > 0 &&
                            getSelectFormItem('Product Size', 'prdSize', 'Please select a Product Size.', false, sizesData)
                        }
                        {
                            finishesData && finishesData.length > 0 &&
                            getSelectFormItem('Product Finishes', 'prdFinish', 'Please select a Product Finishes.', false, finishesData)
                        }
                        {
                            colorsData && colorsData.length > 0 &&
                            getSelectFormItem('Color Category', 'prdColorId', 'Please select a Product Color Category.', false, colorsData)
                        }
                        {getInputFormItem('Product Color', "prdColor", 'Please fill in the Product Color.')}
                        {
                            tagsData && tagsData.length > 0 &&
                            getTagsFormItem('Product Tags', 'prdTag', 'Please select Tag.', false, tagsData)
                        }
                        {getInputNumberFormItem('Sequence', "sequence", 'Please fill in sequence.')}
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ProductInfoAdd 