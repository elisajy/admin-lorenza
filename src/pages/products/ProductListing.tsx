import { Button, Space, Table, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import { TableRowSelection } from 'antd/es/table/interface';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from '../../shared/ConfirmationDialog';

const ProductListing = () => {
    const navigate = useNavigate();
    const [productListing, setProductListing] = useState<any>();
    const [showModal, setShowModal] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/product-listing/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/product-listing/add`)
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
        fetchPrd();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchPrd = () => {
        fetch(`${import.meta.env.VITE_API_KEY}/all-products`)
            .then((response) => response.json())
            .then((data) => {
                const updatedData = data.length > 0 ?
                    data.map((x: any) => {
                        const prdCategory = x.categories.map((item: any) => item.name).join(' | ');
                        const prdTags = x.tags.map((item: any) => item.name.toLowerCase());

                        return { ...x, key: x.id, category: prdCategory, tagList: prdTags }
                    }) : [];
                setProductListing(updatedData);
            }
            );
    };

    const deletePrd = (item?: any) => {
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: () => {
                if (typeof (item) !== 'object') {
                    //select delete
                } else {
                    console.log(selectedRowKeys);
                    //bulk delete
                }
                setShowModal(false);
                fetchPrd();
            }
        })


        // fetch(`${import.meta.env.VITE_API_KEY}/update-about-us`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataBody)
        // })
        //     .then((response) => console.log(response))
        //     .then((data) => {
        //         console.log(data);
        //         setSuccessNotification('Update Successful!');
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         setErrorNotification('Update Failed. Please try again later.');
        //     });
    };
    // /delete-product/: id
    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Product Listing</h2>
                </div>
                <div>
                    <Button type="primary" className='form-button' onClick={() => navAction('add')}>Add</Button>
                    <Button type="primary" danger className='form-button' onClick={deletePrd}>Delete</Button>
                </div>
            </div>
            <ConfirmationDialog showModal={showModal} title={confirmation.title}
                confirmationMessage={confirmation.message}
                setShowModal={setShowModal}
                action={confirmation.action} actionText={confirmation.buttonText} />
            <div>
                <Table dataSource={productListing}
                    rowSelection={rowSelection}
                >
                    <Column title="Category" dataIndex="category" key="category" />
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Code" dataIndex="code" key="code" />
                    <Column title="Size" dataIndex="size" key="size" />
                    <Column
                        width={250}
                        title="Tags"
                        dataIndex="tagList"
                        key="tagList"
                        render={(tagList: string[]) => (
                            <>
                                {tagList.map((tag) => {
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
                        render={(_: any, record: any) => (
                            <Space size="middle">
                                <a onClick={() => navAction('edit', record)}>Edit</a>
                                <a onClick={() => deletePrd(record)}>Delete</a>
                            </Space>
                        )}
                    />
                </Table>

            </div>
        </>
    )
}

export default ProductListing