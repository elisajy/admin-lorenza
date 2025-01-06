import { Button, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { TableRowSelection } from "antd/es/table/interface";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/layout/useNotification";
import ConfirmationDialog from "../../shared/ConfirmationDialog";

const ProductCategories = () => {
    const navigate = useNavigate();
    const [productCategories, setProductCategories] = useState<any>();
    const [showModal, setShowModal] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const [refreshKey, setRefreshKey] = useState(0);
    const { setSuccessNotification, setErrorNotification } = useNotification();

    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/product-categories/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/product-categories/add`)
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
        fetchCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshKey]);

    const fetchCategory = () => {
        setProductCategories([]);
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/all-categories-no-level`, {
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
                    setProductCategories([...updatedData]);
                }
                );
        } catch (error) {
            console.error("Error fetching Product Categories:", error);
        }
    };

    const deletion = (record?: any) => {
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: async () => {
                fetch(`${import.meta.env.VITE_API_KEY}/delete-category/${record.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectedRowKeys)
                })
                    .then((response) => {
                        if (response.status === 204) {
                            setSuccessNotification('Delete Successful!')
                        }
                    }
                    )
                    .catch((error) => {
                        console.log('Delete Category error:', error);
                        setErrorNotification('Delete Failed. Please try again later.');
                    });

                setShowModal(false);
                setRefreshKey(prev => prev + 1); // Forces useEffect to refetch
            }
        })
    };

    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Product Categories</h2>
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
                <Table dataSource={productCategories}
                    // rowSelection={rowSelection}
                >
                    <Column title="Name" dataIndex="name" key="categoryName" />
                    <Column title="Main Category" dataIndex="mainCategoryName" key="mainCategoryName" />
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
};

export default ProductCategories