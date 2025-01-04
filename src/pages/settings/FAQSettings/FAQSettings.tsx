import { Button, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useNavigate } from "react-router-dom";

interface DataType {
    id: string;
    faqType: string;
    faqTitle: string;
    updatedAt: string;
    key: React.Key;
}

const data: DataType[] = [
    {
        id: '1',
        faqType: 'Delivery',
        faqTitle: 'How much does tile delivery cost?',
        updatedAt: '2024-11-01',
        key: 1
    },
    {
        id: '2',
        faqType: 'Maintenance & Care',
        faqTitle: 'Are the tiles resistant to stains and scratches?',
        updatedAt: '2024-11-01',
        key: 2
    },
    {
        id: '3',
        faqType: 'Safety',
        faqTitle: 'Are these tiles slip-resistant?',
        updatedAt: '2024-11-01',
        key: 3
    },
    {
        id: '4',
        faqType: 'Durability',
        faqTitle: 'Are the tiles suitable for high-traffic areas?',
        updatedAt: '2024-11-01',
        key: 4
    },
];


const FAQSettings = () => {
    const navigate = useNavigate();
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/faq-settings/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/faq-settings/add`)
        }
    }
    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>FAQ Settings</h2>
                </div>
                <div>
                    <Button type="primary" className='form-button' onClick={() => navAction('add')}>Add</Button>
                    <Button type="primary" danger className='form-button'>Delete</Button>
                </div>
            </div>
            <div>
                <Table<DataType> dataSource={data}                >
                    <Column title="Type" dataIndex="faqType" key="faqType" />
                    <Column title="FAQ" dataIndex="faqTitle" key="faqTitle" />
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

export default FAQSettings