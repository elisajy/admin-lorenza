import { Button, Divider, Radio, Space, Table, TableProps, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DataType {
    id: string;
    mainCategory: string;
    childNum: Number;
    updatedAt: string;
    key: React.Key;
}

const data: DataType[] = [
    {
        id: '1',
        mainCategory: 'Tiles',
        childNum: 3,
        updatedAt: '2024-11-01',
        key: 1
    },
    {
        id: '2',
        mainCategory: 'Wall Panel',
        childNum: 2,
        updatedAt: '2024-11-01',
        key: 2
    },
    {
        id: '3',
        mainCategory: 'Mosaic',
        childNum: 4,
        updatedAt: '2024-11-01',
        key: 3
    },
];


const MenuSettings = () => {
    const navigate = useNavigate();
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/menu-settings/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/menu-settings/add`)
        }
    };

    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Menu Settings</h2>
                </div>
                <div>
                    <Button type="primary" className='form-button'>Add</Button>
                    <Button type="primary" danger className='form-button'>Delete</Button>
                </div>
            </div>
            <div>
                <Table<DataType> dataSource={data}                >
                    <Column title="Main Title" dataIndex="mainCategory" key="mainCategory" />
                    <Column title="Number of Child" dataIndex="childNum" key="childNum" />
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

export default MenuSettings