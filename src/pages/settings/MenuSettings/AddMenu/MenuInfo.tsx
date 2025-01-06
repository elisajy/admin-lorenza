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
}

const MenuInfo = ({ form, data, setTableNameArr, tableNameArr, setSelectedTableName, selectedTableName }: Props) => {

    const tableName = [
        {
            id: 1,
            val: 'categories',
            label: 'Categories',
        },
        {
            id: 2,
            val: 'finishes',
            label: 'Finishes',
        },
        {
            id: 3,
            val: 'tags',
            label: 'Tags',
        },
        {
            id: 4,
            val: 'sizes',
            label: 'Sizes'
        },
        {
            id: 5,
            val: 'colors',
            label: 'Colors'
        }
    ]
    useEffect(() => {
        form.setFieldsValue({
            name: data?.name,
            mainSideNavId: data?.mainSideNavId,
            sequence: data?.sequence
        });
    }, [data]);

    const onChange = (key: string | string[]) => {
        setTableNameArr([]);
        setSelectedTableName(key);
        form.setFieldValue('menuName', null);
        if (key === 'categories') {
            fetch(`${import.meta.env.VITE_API_KEY}/all-categories`)
                .then((response) => response.json())
                .then((data) => {
                    let array: any = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.name, label: x.name, path: x.path, sequence: x.sequence }
                        )
                    })
                    setTableNameArr(array);
                }
                );
        } else if (key === 'sizes') {
            form.setFieldValue('menuName', 'Sizes');
            fetch(`${import.meta.env.VITE_API_KEY}/all-sizes`)
                .then((response) => response.json())
                .then((data) => {
                    let array: { val: any; label: any; id: any }[] = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.value, label: x.name, id: x.id }
                        )
                    })
                    setTableNameArr(array);
                }
                );
        } else if (key === 'finishes') {
            form.setFieldValue('menuName', 'Finishes');
            fetch(`${import.meta.env.VITE_API_KEY}/all-finishes`)
                .then((response) => response.json())
                .then((data) => {
                    let array: { val: any; label: any; id: any }[] = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.name, label: x.name, id: x.id }
                        )
                    })
                    setTableNameArr(array);
                }
                );
        } else if (key === 'tags') {
            fetch(`${import.meta.env.VITE_API_KEY}/all-tags`)
                .then((response) => response.json())
                .then((data) => {
                    let array: { val: any; label: any; }[] = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.name, label: x.name }
                        )
                    })
                    setTableNameArr(array);
                }
                );
        } else if (key === 'colors') {
            form.setFieldValue('menuName', 'Colors');
            fetch(`${import.meta.env.VITE_API_KEY}/all-colors`)
                .then((response) => response.json())
                .then((data) => {
                    let array: { val: any; label: any; }[] = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.name, label: x.name }
                        )
                    })
                    setTableNameArr(array);
                }
                );
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
                        {
                            tableName && tableName.length > 0 &&
                            getSelectFormItem('Types', 'tableName', 'Please select a type.', false, tableName, true, '180px', onChange)
                        }
                        {
                            selectedTableName !== undefined &&
                            <>
                                {
                                    !['colors', 'sizes', 'finishes'].includes(selectedTableName) ?
                                        <>
                                            {
                                                tableNameArr && tableNameArr.length > 0 &&
                                                getSelectFormItem('Menu Name', 'menuName', 'Please select a name.', false, tableNameArr, true)
                                            }
                                        </>
                                        :
                                        <>
                                            {getInputFormItem('Menu Name', "menuName", 'Please fill in the Menu Name.', '', true)}
                                        </>
                                }
                            </>
                        }
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