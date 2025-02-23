import { Button, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useNotification from "../../hooks/layout/useNotification";
import ConfirmationDialog from "../../shared/ConfirmationDialog";

const ProductColors = () => {
    const navigate = useNavigate();
    const [productColors, setProductColors] = useState<any>();
    const [showModal, setShowModal] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const [refreshKey, setRefreshKey] = useState(0);
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = Number(searchParams.get("page")) || 1;
    const [pagination, setPagination] = useState({ current: page, pageSize: 10 });
    const handleTableChange = (pagination: any) => {
        setPagination(pagination);
        navigate(`?page=${pagination.current}`); // Update URL
    };

    useEffect(() => {
        setPagination((prev) => ({ ...prev, current: page }));
    }, [page]);

    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/product-colors/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/product-colors/add`)
        }
    }

    useEffect(() => {
        fetchColors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshKey]);

    const fetchColors = () => {
        setProductColors([]);
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/all-colors`, {
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
                    setProductColors([...updatedData]);
                }
                );
        } catch (error) {
            console.error("Error fetching Product Colors:", error);
        }
    };

    const deletion = (record?: any) => {
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: async () => {
                fetch(`${import.meta.env.VITE_API_KEY}/delete-color/${record.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectedRowKeys)
                })
                    .then(async (response) => {
                        if (response.status === 204) {
                            setSuccessNotification('Delete Successful!')
                            await fetchColors();
                        }
                    }
                    )
                    .catch((error) => {
                        console.log('Delete Size error:', error);
                        setErrorNotification('Delete Failed. Please try again later.');
                    });

                setShowModal(false);
                // setRefreshKey(prev => prev + 1); // Forces useEffect to refetch
            }
        })
    };

    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Product Colors</h2>
                </div>
                <div>
                    <Button type="primary" className='form-button' onClick={() => navAction('add')}>Add</Button>
                </div>
            </div>
            <ConfirmationDialog showModal={showModal} title={confirmation.title}
                confirmationMessage={confirmation.message}
                setShowModal={setShowModal}
                action={confirmation.action} actionText={confirmation.buttonText} />
            <div>
                <Table dataSource={productColors} pagination={pagination}
                    onChange={handleTableChange}
                    rowKey='id'
                >
                    <Column title="Name" dataIndex="name" key="colorName" />
                    <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: any) => (
                            <Space color="middle">
                                <a onClick={() => navAction('edit', record)}>Edit</a>
                                <a onClick={() => deletion(record)}>Delete</a>
                            </Space>
                        )}
                    />
                </Table>

            </div>
        </>
    )
};

export default ProductColors