import { Collapse, CollapseProps, Form } from "antd";
import { categoryData, colorData, finishesData, sizesData, tagsData } from "../dummyProduct";
import ProductInfoAdd from "./ProductInfo-add";

const AddProduct = () => {
    const pageTitle = 'Product Name'
    const [form] = Form.useForm();
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Basic Information',
            children: <ProductInfoAdd form={form} categoryData={categoryData()} colorData={colorData()} finishesData={finishesData()} sizesData={sizesData()} tagsData={tagsData()} />,
        },
        {
            key: '2',
            label: 'Product Images',
            children: <p>{pageTitle}</p>,
        },
    ];

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>Add New Product</h2>
                <br />
            </div>
            <Collapse style={{ textAlign: 'left' }} items={items} defaultActiveKey={['1']} onChange={onChange} />;
        </>
    )
}

export default AddProduct