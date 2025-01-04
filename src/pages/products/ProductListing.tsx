import { Button, Divider, Radio, Space, Table, TableProps, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DataType {
    id: string;
    prdCategory: string;
    prdName: string;
    prdCode: string;
    prdSize: string;
    updatedAt: string;
    tags: string[];
    key: React.Key;
}

const data: DataType[] = [
    {
        id: '1',
        prdCategory: 'Tiles',
        prdName: 'Antico',
        prdCode: 'H39059',
        prdSize: '300 x 300mm',
        updatedAt: '2024-11-01',
        tags: ['Best Selling', 'Sales'],
        key: 1
    },
    {
        id: '2',
        prdCategory: 'Tiles',
        prdName: 'Antico',
        prdCode: 'H98705',
        prdSize: '300 x 300mm',
        updatedAt: '2024-11-02',
        tags: ['Sales'],
        key: 2
    },
    {
        id: '3',
        prdCategory: 'Tiles',
        prdName: 'Antico',
        prdCode: 'A98705',
        prdSize: '300 x 300mm',
        updatedAt: '2024-11-03',
        tags: ['Sales', 'New Arrivals'],
        key: 3
    },
];

const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        // can do bulk delete with this function
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};


const ProductListing = () => {
    const navigate = useNavigate();
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/product-listing/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/product-listing/add`)
        }
    }
    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Product Listing</h2>
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
                    <Column title="Category" dataIndex="prdCategory" key="prdCategory" />
                    <Column title="Name" dataIndex="prdName" key="prdName" />
                    <Column title="Code" dataIndex="prdCode" key="prdCode" />
                    <Column title="Size" dataIndex="prdSize" key="prdSize" />
                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={(tags: string[]) => (
                            <>
                                {tags.map((tag) => {
                                    let color = tag.length > 5 ? 'geekblue' : 'green';
                                    if (tag === 'loser') {
                                        color = 'volcano';
                                    }
                                    return (
                                        <Tag color={color} key={tag}>
                                            {tag.toUpperCase()}
                                        </Tag>
                                    );
                                })}
                            </>
                        )}
                    />
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
}

export default ProductListing