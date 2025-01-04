import { Button, Collapse, CollapseProps, Form } from "antd";
import ProductInfoEdit from "./ProductInfo-edit";
import { categoryData, colorData, finishesData, sizesData, tagsData } from "../dummyProduct";

const EditProduct = () => {
    const pageTitle = 'Product Name'
    const [form] = Form.useForm();
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Basic Information',
            children: <ProductInfoEdit form={form} categoryData={categoryData()} colorData={colorData()} finishesData={finishesData()} sizesData={sizesData()} tagsData={tagsData()} />,
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
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Collapse style={{ textAlign: 'left' }} items={items} defaultActiveKey={['1']} onChange={onChange} />;
            <div className="form-action-button-container">
                <Button type="primary" className='form-button'>Save</Button>
                <Button className='form-button'>Cancel</Button>
            </div>
        </>
    )
}

export default EditProduct