import { Button, Space, Table, TableProps } from "antd";
import Column from "antd/es/table/Column";
import { TableRowSelection } from "antd/es/table/interface";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCategories = () => {
    const navigate = useNavigate();
    const [productCategories, setProductCategories] = useState<any>();
    const [showModal, setShowModal] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/product-categories/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/product-categories/add`)
        }
    }

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    useEffect(() => {
        fetchCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchCategory = () => {
        fetch(`${import.meta.env.VITE_API_KEY}/all-categories-no-level`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const updatedData = data.length > 0 ?
                    data.map((x: any) => {
                        return { ...x, key: x.id }
                    }) : [];
                setProductCategories(updatedData);
            }
            );
    };


    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Product Categories</h2>
                </div>
                <div>
                    <Button type="primary" className='form-button' onClick={() => navAction('add')}>Add</Button>
                    <Button type="primary" danger className='form-button'>Delete</Button>
                </div>
            </div>
            <div>
                <Table dataSource={productCategories}
                    rowSelection={rowSelection}
                >
                    <Column title="Name" dataIndex="name" key="categoryName" />
                    <Column title="Main Category" dataIndex="mainCategoryName" key="mainCategoryName" />
                    <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: any) => (
                            <Space size="middle">
                                <a onClick={() => navAction('edit', record)}>Edit</a>
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>

            </div>
        </>
    )
};

export default ProductCategories