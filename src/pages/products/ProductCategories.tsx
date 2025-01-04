import { Button, Space, Table, TableProps } from "antd";
import Column from "antd/es/table/Column";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DataType {
    key: React.Key;
    id: string;
    categoryName: string;
    updatedAt: string;
    mainCategoryName: any;
}

const data: DataType[] = [
    {
        id: '1',
        categoryName: 'Tiles',
        updatedAt: '2024-11-01',
        mainCategoryName: null,
        key: 1
    },
    {
        id: '2',
        categoryName: 'Wall Panel',
        updatedAt: '2024-11-03',
        mainCategoryName: null,
        key: 2
    },
    {
        id: '3',
        categoryName: 'Mosaic',
        updatedAt: '2024-11-04',
        mainCategoryName: 'Tiles',
        key: 3
    },
    {
        id: '4',
        categoryName: 'Wood',
        updatedAt: '2024-11-04',
        mainCategoryName: 'Tiles',
        key: 4
    },
];

const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        // can do bulk delete with this function
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const ProductCategories = () => {
    const navigate = useNavigate();
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/product-categories/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/product-categories/add`)
        }
    }
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
                <Table<DataType> dataSource={data}
                    rowSelection={{ type: selectionType, ...rowSelection }}
                >
                    <Column title="Name" dataIndex="categoryName" key="categoryName" />
                    <Column title="Main Category" dataIndex="mainCategoryName" key="mainCategoryName" />
                    <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: DataType) => (
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