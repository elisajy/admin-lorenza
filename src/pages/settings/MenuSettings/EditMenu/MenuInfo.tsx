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
        if (key === 'categories') {
            fetch(`${import.meta.env.VITE_API_KEY}/main-categories-no-sub`)
                .then((response) => response.json())
                .then((data) => {
                    let array: any = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.name, label: x.name }
                        )
                    })
                    setTableNameArr(array);
                }
                );

            fetch(`${import.meta.env.VITE_API_KEY}/main-categories-no-sub`)
                .then((response) => response.json())
                .then((data) => {
                    let array: any = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.name, label: x.name }
                        )
                    })
                    setChildArray(array);
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
            fetch(`${import.meta.env.VITE_API_KEY}/main-tags-no-sub`)
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
            fetch(`${import.meta.env.VITE_API_KEY}/main-tags-no-sub`)
                .then((response) => response.json())
                .then((data) => {
                    let array: any = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.name, label: x.name }
                        )
                    })
                    setChildArray(array);
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