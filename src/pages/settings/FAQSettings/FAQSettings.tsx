import { Button, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQSettings = () => {
    const navigate = useNavigate();
    const [faqList, setFaqList] = useState<any>([]);
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/faq-settings/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/faq-settings/add`)
        }
    }

    useEffect(() => {
        fetchFAQQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchFAQQuestion = () => {
        fetch(`${import.meta.env.VITE_API_KEY}/all-faq-questions`)
            .then((response) => response.json())
            .then((data) => {
                const updatedData = data.length > 0 ?
                    data.map((x: any) => {
                        return { ...x, key: x.id }
                    }) : [];
                setFaqList(updatedData);
            }
            );
    };


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
                <Table dataSource={faqList}                >
                    <Column title="Type" dataIndex="sectionName" key="sectionName" />
                    <Column title="FAQ" dataIndex="question" key="question" />
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

export default FAQSettings