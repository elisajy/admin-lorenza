import { Button, Collapse, CollapseProps, Form } from "antd";
import { categoryData, menuChild } from "../../../products/dummyProduct";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../../hooks/layout/useNotification";
import MenuInfo from "./MenuInfo";
import ChildSetting from "../AddMenu/ChildSetting";

const AddMenu = () => {
    const navigate = useNavigate();
    const pageTitle = 'New Menu'
    const [form] = Form.useForm();
    const { id } = useParams<{ id: string }>();
    const [childMenu, setChildMenu] = useState<any>();
    const [sideNavDetails, setSideNavDetails] = useState<any>();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [prdCategory, setPrdCategory] = useState<any>();
    const [tableNameArr, setTableNameArr] = useState<any>([]);
    const [selectedTableName, setSelectedTableName] = useState<any>();
    const [childArray, setChildArray] = useState<any>();
    const [subNavs, setSubNavs] = useState<any>([]);

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
            children: <MenuInfo form={form} data={sideNavDetails} setTableNameArr={setTableNameArr} tableNameArr={tableNameArr} setSelectedTableName={setSelectedTableName} selectedTableName={selectedTableName} setChildArray={setChildArray} childArray={childArray} />,
        },
        {
            key: '2',
            label: 'Child Settings',
            children: <ChildSetting childMenu={childArray} data={sideNavDetails} tableNameArr={tableNameArr} selectedTableName={selectedTableName} setSubNavs={setSubNavs} subNavs={subNavs} />,
        },
    ];

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/products-sideNavs-details/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setSideNavDetails(data);
            }
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/all-categories`)
            .then((response) => response.json())
            .then((data) => {
                let array: { val: any; label: any; }[] = [];
                data.map((x: any) => {
                    array.push(
                        { val: x.id, label: x.name }
                    )
                })
                setPrdCategory(array);
            }
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        const updatedData = subNavs.length > 0 ?
            subNavs.map((x: any, index: any) => {
                return { name: x.name, path: '/' + (x.name).toLowerCase(), sequence: index + 1, tableName: x.tableName }
            }) : [];
        const dataBody = {
            name: formValue.menuName,
            tableName: formValue.tableName,
            path: '/' + (formValue.menuName).toLowerCase(),
            sequence: formValue.sequence,
            subNavs: updatedData
        }

        fetch(`${import.meta.env.VITE_API_KEY}/add-products-sideNav`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody)
        })
            .then(async (response) => {
                if (response.status === 201) {
                    setSuccessNotification('Insert Successful!');
                    navigate('/menu-settings');
                }

                if (response.status === 409) {
                    setErrorNotification('Duplicated records. Please check again.');
                }
            }
            )
            .catch((error) => {
                console.log('Insert Menu error:', error);
                setErrorNotification('Insert Failed. Please try again later.');
            });
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Collapse style={{ textAlign: 'left' }} items={items} defaultActiveKey={['1']} onChange={onChange} />;
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/menu-settings')}>Cancel</Button>
            </div>
        </>
    )
};

export default AddMenu