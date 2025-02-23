import { Button, Input, InputRef, Space, Table, TableColumnsType, TableColumnType, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import { FilterDropdownProps, TableRowSelection } from 'antd/es/table/interface';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmationDialog from '../../shared/ConfirmationDialog';
import useNotification from '../../hooks/layout/useNotification';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const ProductListing = () => {
    const navigate = useNavigate();
    const [productListing, setProductListing] = useState<any>();
    const [showModal, setShowModal] = useState(false);
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [refreshKey, setRefreshKey] = useState(0);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = Number(searchParams.get("page")) || 1;
    const [pagination, setPagination] = useState({ current: page, pageSize: 10 });
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const handleTableChange = (pagination: any) => {
        setPagination(pagination);
        navigate(`?page=${pagination.current}`); // Update URL
    };

    useEffect(() => {
        setPagination((prev) => ({ ...prev, current: page }));
    }, [page]);

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
                setProductListing([...updatedData]);
            }
            );
    };

    const deletion = (record?: any) => {
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: async () => {
                fetch(`${import.meta.env.VITE_API_KEY}/delete-product/${record.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: record.id })
                })
                    .then(async (response) => {
                        if (response.status === 204) {
                            setSuccessNotification('Delete Successful!')
                            await fetchPrd();
                        }
                    }
                    )
                    .catch((error) => {
                        console.log('Delete FAQ Section error:', error);
                        setErrorNotification('Delete Failed. Please try again later.');
                    });
                setShowModal(false);
                setRefreshKey(prev => prev + 1); // Forces useEffect to refetch
            }
        })
    };

    interface DataType {
        sequence: string;
        category: string;
        name: string;
        code: string;
        tagList: any;
        updatedAt: any;
        action: any;
    }

    type DataIndex = keyof DataType;

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void, confirm: FilterDropdownProps['confirm'],
    ) => {
        clearFilters();
        setSearchText('');
        confirm();
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedValue = event.clipboardData.getData("text");
        setSearchText(pastedValue);
        console.log(pastedValue);
        // This ensures the table updates when the user pastes
        setTimeout(() => {
            if (searchInput.current) {
                searchInput.current.input?.dispatchEvent(new Event("input", { bubbles: true }));
            }
        }, 0);
    };


    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onPaste={handlePaste}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                        onChange={() => console.log(selectedKeys, dataIndex)}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters, confirm)}
                        size="small"
                        style={{ width: 60 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) => {
            const recordValue = record[dataIndex];
            return recordValue
                ? recordValue.toString().toLowerCase().includes((value as string).toLowerCase())
                : false; // Handle null or undefined cases safely
        },
        filterDropdownProps: {
            onOpenChange(open) {
                if (open) {
                    setTimeout(() => searchInput.current?.select(), 100);
                }
            },
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Sequence',
            dataIndex: 'sequence',
            key: 'sequence',
            //   width: '30%',
            ...getColumnSearchProps('sequence'),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            //   width: '20%',
            ...getColumnSearchProps('category'),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
            // sorter: (a, b) => a.name.length - b.name.length,
            // sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
            //   width: '20%',
            ...getColumnSearchProps('code'),
        },
        {
            title: 'Tags',
            dataIndex: "tagList",
            key: "tagList",
            width: 250,
            render: (tagList: string[]) => (
                <>
                    {tagList.map((tag) => {
                        let color = tag.length > 5 ? "geekblue" : "green";
                        if (tag === "loser") {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Updated At',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            //   width: '20%',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <Space size="middle">
                    <a onClick={() => navAction("edit", record)}>Edit</a>
                    <a onClick={() => deletion(record)}>Delete</a>
                </Space>
            ),
        }
    ];

    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Product Listing</h2>
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
                {/* <Table dataSource={productListing}
                    rowSelection={rowSelection}
                    rowKey='id'
                >
                    <Column title="Sequence" dataIndex="sequence" key="sequence" />
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
                                <a onClick={() => deletion(record)}>Delete</a>
                            </Space>
                        )}
                    />
                </Table> */}
                <Table<DataType> columns={columns} dataSource={productListing} pagination={pagination}
                    onChange={handleTableChange} />;

            </div>
        </>
    )
}

export default ProductListing