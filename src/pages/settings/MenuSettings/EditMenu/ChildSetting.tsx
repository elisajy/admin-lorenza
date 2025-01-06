import { Button, Col, Drawer, Form, Input, Row, Space, Table, TableProps } from "antd";
import { menuChild } from "../../../products/dummyProduct";
import { useEffect, useState } from "react";
import Column from "antd/es/table/Column";
import { getInputFormItem, getSelectFormItem, getTagsFormItem, getTextAreaFormItem } from "../../../utils/FormItems";
import ConfirmationDialog from "../../../../shared/ConfirmationDialog";
import useNotification from "../../../../hooks/layout/useNotification";

interface DataType {
    id: string;
    name: string;
    updatedAt: string;
    key: React.Key;
}

interface Props {
    childMenu: any;
    data: any;
    tableNameArr: any;
}

const childSetting = ({ childMenu, data, tableNameArr }: Props) => {
    const [open, setOpen] = useState(false);
    const [subNavs, setSubNavs] = useState<any>([]);
    const [showModal, setShowModal] = useState(false);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [refreshKey, setRefreshKey] = useState(0);

    console.log(tableNameArr);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (!!data) {
            setSubNavs(data.subNavs)
        }
    }, [data]);

    const deletion = (record?: any) => {
        console.log(record);
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: async () => {
                let arr = [record.id];
                const dataBody = {
                    questions: arr
                }
                fetch(`${import.meta.env.VITE_API_KEY}/delete-sub-products-sideNav`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataBody)
                })
                    .then((response) => {
                        if (response.status === 204) {
                            setSuccessNotification('Delete Successful!')
                        }
                    }
                    )
                    .catch((error) => {
                        console.log('Delete Child Menu error:', error);
                        setErrorNotification('Delete Failed. Please try again later.');
                    });

                setShowModal(false);
                setRefreshKey(prev => prev + 1); // Forces useEffect to refetch
            }
        })
    };

    return (
        <>
            <div className='form-button-child-container'>
                <div>
                    <Button type="primary" className='form-button' onClick={showDrawer}>Add</Button>
                    {/* <Button type="primary" danger className='form-button'>Bulk Delete</Button> */}
                </div>
            </div>
            <div>
                <Table dataSource={subNavs}>
                    <Column title="Child Name" dataIndex="name" key="name" />
                    <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: any) => (
                            <Space size="middle">
                                <a onClick={() => deletion(record)}>Delete</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
            <ConfirmationDialog showModal={showModal} title={confirmation.title}
                confirmationMessage={confirmation.message}
                setShowModal={setShowModal}
                action={confirmation.action} actionText={confirmation.buttonText} />
            <Drawer
                title="Add Child"
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical">
                    {
                        tableNameArr && tableNameArr.length > 0 &&
                        getSelectFormItem('Child', 'childNav', 'Please select child.', false, tableNameArr)
                    }
                    {/* {getTagsFormItem('Child', 'childNavs', 'Please select child.', false, childMenu)} */}
                </Form>
            </Drawer>
        </>
    )
};

export default childSetting