import { Button, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import ConfirmationDialog from "../../../shared/ConfirmationDialog";
import { TableRowSelection } from "antd/es/table/interface";

const FAQSettings = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const [faqList, setFaqList] = useState<any>([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [refreshKey, setRefreshKey] = useState(0);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = Number(searchParams.get("page")) || 1;
    const [pagination, setPagination] = useState({ current: page, pageSize: 10 });
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const handleTableChange = (pagination: any) => {
        setPagination(pagination);
        navigate(`?page=${pagination.current}`); // Update URL
    };

    useEffect(() => {
        setPagination((prev) => ({ ...prev, current: page }));
    }, [page]);
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/faq-settings/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/faq-settings/add`)
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
        fetchFAQQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshKey]);

    const fetchFAQQuestion = () => {
        setFaqList([]);
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/all-faq-questions`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
                cache: 'no-store'  // Ensures the response isn't cached
            })
                .then((response) => response.json())
                .then((data) => {
                    const updatedData = data.length > 0 ?
                        data.map((x: any) => {
                            return { ...x, key: x.id }
                        }) : [];
                    setFaqList([...updatedData]);
                }
                );
        } catch (error) {
            console.error("Error fetching FAQ questions:", error);
        }
    };

    const deletion = (record?: any) => {
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: async () => {
                if (!!record && record.id) {
                    let arr = [record.id];
                    const dataBody = {
                        questions: arr
                    }
                    fetch(`${import.meta.env.VITE_API_KEY}/delete-faq-questions`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(dataBody)
                    })
                        .then(async (response) => {
                            if (response.status === 204) {
                                setSuccessNotification('Delete Successful!')
                                await fetchFAQQuestion();
                            }
                        }
                        )
                        .catch((error) => {
                            console.log('Delete FAQ Question error:', error);
                            setErrorNotification('Delete Failed. Please try again later.');
                        });
                } else {
                    const dataBody = {
                        questions: selectedRowKeys
                    }
                    fetch(`${import.meta.env.VITE_API_KEY}/delete-faq-questions`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(dataBody)
                    })
                        .then(async (response) => {
                            if (response.status === 204) {
                                setSuccessNotification('Delete Successful!')
                                await fetchFAQQuestion();
                            }
                        }
                        )
                        .catch((error) => {
                            console.log('Delete FAQ Question error:', error);
                            setErrorNotification('Delete Failed. Please try again later.');
                        });
                }

                setShowModal(false);
                // setRefreshKey(prev => prev + 1); // Forces useEffect to refetch
            }
        })
    };

    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>FAQ Question Settings</h2>
                </div>
                <div>
                    <Button type="primary" className='form-button' onClick={() => navAction('add')}>Add</Button>
                    <Button type="primary" danger className='form-button' onClick={deletion}>Delete</Button>
                </div>
            </div>
            <ConfirmationDialog showModal={showModal} title={confirmation.title}
                confirmationMessage={confirmation.message}
                setShowModal={setShowModal}
                action={confirmation.action} actionText={confirmation.buttonText} />
            <div>
                <Table dataSource={faqList} rowSelection={rowSelection} rowKey='id' pagination={pagination}
                    onChange={handleTableChange}
                >
                    <Column title="Type" dataIndex="sectionName" key="sectionName" />
                    <Column title="FAQ" dataIndex="question" key="question" />
                    <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: any) => (
                            <Space size="middle">
                                <a onClick={() => navAction('edit', record)}>Edit</a>
                                <a onClick={() => deletion(record)}>Delete</a>
                            </Space>
                        )}
                    />
                </Table>

            </div>
        </>
    )
}

export default FAQSettings