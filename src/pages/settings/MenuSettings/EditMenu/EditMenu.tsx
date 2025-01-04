import { Button, Collapse, CollapseProps, Form } from "antd";
import MenuInfo from "./MenuInfo";
import { categoryData, menuChild } from "../../../products/dummyProduct";
import ChildSetting from "./ChildSetting";
import { useEffect, useState } from "react";

const EditMenu = () => {
    const pageTitle = 'Main Title Name'
    const [form] = Form.useForm();
    const [childMenu, setChildMenu] = useState<any>();

    //when open drawer modify the data to val and label
    useEffect(() => {
        const childMenuList = menuChild();
        let array: { val: any; label: any; }[] = [];
        childMenuList.map((x: any) => {
            array.push(
                { val: x.id, label: x.name }
            )
        })
        setChildMenu(array);
    }, []);

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Basic Information',
            children: <MenuInfo form={form} categoryData={categoryData()} />,
        },
        {
            key: '2',
            label: 'Child Settings',
            children: <ChildSetting childMenu={childMenu}/>,
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
};

export default EditMenu