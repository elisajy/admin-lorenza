import { Button, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useNavigate } from "react-router-dom";

interface DataType {
    id: string;
    name: string;
    sequence: Number;
    imageUrl: string;
    link: string;
    updatedAt: string;
    createdAt: string;
    key: React.Key;
}

const data: DataType[] = [
    {
        id: '1',
        name: 'Sales 1',
        sequence: 1,
        imageUrl: 'testing',
        link: 'www.google.com',
        updatedAt: '2024-11-05',
        createdAt: '2024-11-05',
        key: 1
    },
    {
        id: '2',
        name: 'Sales 2',
        sequence: 2,
        imageUrl: 'testing2',
        link: 'www.google.com',
        updatedAt: '2024-11-05',
        createdAt: '2024-11-05',
        key: 2
    }
];


const Banners = () => {
    const navigate = useNavigate();
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/banners/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/banners/add`)
        }
    }
    
    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Banners</h2>
                </div>
                <div>
                    <Button type="primary" className='form-button' onClick={() => navAction('add')}>Add</Button>
                    <Button type="primary" danger className='form-button'>Delete</Button>
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

export default Banners