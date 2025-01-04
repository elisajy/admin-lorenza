import { Button, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faqType } from "../../products/dummyProduct";

const FAQSectionSettings = () => {
    const navigate = useNavigate();
    const [faqSection, setFAQSection] = useState<any>([]);
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/faq-section-settings/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/faq-section-settings/add`)
        }
    }

    useEffect(() => {
        const array = faqType()
        setFAQSection(array);
    }, []);

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
                <Table dataSource={faqSection}                >
                    <Column title="Type" dataIndex="name" key="name" />
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
}

export default FAQSectionSettings