import { Space, Table } from 'antd';
import Column from 'antd/es/table/Column';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DataType {
    id: string;
    name: string;
    sequence: Number;
    updatedAt: string;
    key: React.Key;
}

const data: DataType[] = [
    {
        id: '1',
        name: 'Home',
        sequence: 1,
        updatedAt: '2024-11-01',
        key: 1
    },
    {
        id: '2',
        name: 'About Us',
        sequence: 2,
        updatedAt: '2024-11-01',
        key: 2
    },
    {
        id: '3',
        name: 'Products',
        sequence: 3,
        updatedAt: '2024-11-01',
        key: 3
    },
    {
        id: '4',
        name: 'Projects',
        sequence: 4,
        updatedAt: '2024-11-01',
        key: 4
    },
    {
        id: '5',
        name: 'Inspiration',
        sequence: 5,
        updatedAt: '2024-11-01',
        key: 5
    },
    {
        id: '6',
        name: 'Contact',
        sequence: 6,
        updatedAt: '2024-11-01',
        key: 6
    },
];


const MenuListingSetting = () => {
    const navigate = useNavigate();
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/menu-listing-settings/edit/${record.key}`)
        }
    };

    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Menu Listing Settings</h2>
                </div>
            </div>
            <div>
                <Table<DataType> dataSource={data}                >
                <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Sequence" dataIndex="sequence" key="sequence" />
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

export default MenuListingSetting