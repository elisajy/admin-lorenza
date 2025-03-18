import { Form } from "antd";
import { getInputFormItem, getSelectFormItem, getInputNumberFormItem } from "../../../utils/FormItems";
import { useEffect, useState } from "react";

interface Props {
    form: any;
    data: any;
    setTableNameArr: React.Dispatch<React.SetStateAction<any>>;
    tableNameArr: any;
    setSelectedTableName: React.Dispatch<React.SetStateAction<any>>;
    selectedTableName: any;
    setChildArray: React.Dispatch<React.SetStateAction<any>>;
    childArray: any;
}

const MenuInfo = ({ form, data, setTableNameArr, tableNameArr, setSelectedTableName, selectedTableName, setChildArray, childArray }: Props) => {
    useEffect(() => {
        form.setFieldsValue({
            menuName: data?.name,
            sequence: data?.sequence
        });
        loadData(data?.tableName)
    }, [data]);

    const loadData = (key: string) => {
        setTableNameArr([]);
        setSelectedTableName(key);
        let apiPath = '';
        switch (key) {
            case 'categories':
                apiPath = 'main-categories-no-sub';
                break;
            case 'tags':
                apiPath = 'main-tags-no-sub';
                break;
            case 'sizes':
                apiPath = 'sizes-no-sub';
                break;
            case 'finishes':
                apiPath = 'finishes-no-sub';
                break;
            case 'colors':
                apiPath = 'colors-no-sub';
                break;
            default:
                apiPath = 'main-categories-no-sub';
                break;
        }

        fetch(`${import.meta.env.VITE_API_KEY}/${apiPath}`)
            .then((response) => response.json())
            .then((data) => {
                let array: { val: any; label: any; id: any }[] = [];
                data.map((x: any) => {
                    array.push(
                        { val: key === 'sizes' ? x.value : x.name, label: key === 'sizes' ? x.value : x.name, id: x.id }
                    )
                })
                setTableNameArr(array);
            }
            );

        fetch(`${import.meta.env.VITE_API_KEY}/${apiPath}`)
            .then((response) => response.json())
            .then((data) => {
                let array: { val: any; label: any; id: any }[] = [];
                data.map((x: any) => {
                    array.push(
                        { val: key === 'sizes' ? x.value : x.name, label: key === 'sizes' ? x.value : x.name, id: x.id }
                    )
                })
                setChildArray(array);
            }
            );

        if (key === 'sizes') {
            form.setFieldValue('menuName', 'Sizes');
        } else if (key === 'finishes') {
            form.setFieldValue('menuName', 'Finishes');
        } else if (key === 'colors') {
            form.setFieldValue('menuName', 'Colors');
        }
    };

    return (
        <>
            <div className="form-container">
                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        {getInputFormItem('Menu Name', "menuName", 'Please fill in the Menu Name.', '', true)}
                    </Form>
                </div>
                <div className="form-wrap">
                    <Form
                        layout='vertical'
                        form={form}
                        className="form-box"
                    >
                        {getInputNumberFormItem('Sequence', "sequence", 'Please fill in sequence.')}
                    </Form>
                </div>
            </div>
        </>
    )
};

export default MenuInfo