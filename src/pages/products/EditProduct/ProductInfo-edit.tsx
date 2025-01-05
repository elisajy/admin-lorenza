import { Form } from "antd";
import { useEffect } from "react";
import { getInputFormItem, getTagsFormItem, getTextAreaFormItem, getSelectFormItem } from "../../utils/FormItems";
import './EditProduct.less';

interface Props {
    form: any;
    data: any;
    categoryData: any;
    tagsData: any;
    sizesData: any;
    finishesData: any;
}

const ProductInfoEdit = ({ form, data, categoryData, tagsData, sizesData, finishesData }: Props) => {
    useEffect(() => {
        const prdTags = data?.tags.map((item: any) => Number(item.tagId));
        const prdCategories = data?.categories.map((item: any) => Number(item.categoryId));

        form.setFieldsValue({
            prdName: data?.name,
            prdCode: data?.code,
            prdDesc: data?.description,
            prdFinish: data?.finish,
            prdThickness: data?.thickness,
            prdSize: data?.size,
            prdColor: data?.color,
            prdVariation: data?.variation,
            prdTag: prdTags,
            prdCategory: prdCategories
        });
    }, [data]);

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
                        {getTextAreaFormItem('Product Description', "prdDesc", 'Please fill in the Product Description.', 9)}

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
                        {getInputFormItem('Product Color', "prdColor", 'Please fill in the Product Color.')}
                        {
                            tagsData && tagsData.length > 0 &&
                            getTagsFormItem('Product Tags', 'prdTag', 'Please select Tag.', false, tagsData)
                        }
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ProductInfoEdit 