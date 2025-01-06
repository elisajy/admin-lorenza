import { Button, Col, Drawer, Form, Input, Row, Space, Table, TableProps } from "antd";
import { menuChild } from "../../../products/dummyProduct";
import { useEffect, useState } from "react";
import Column from "antd/es/table/Column";
import { getInputFormItem, getSelectFormItem, getTagsFormItem, getTextAreaFormItem } from "../../../utils/FormItems";
import ConfirmationDialog from "../../../../shared/ConfirmationDialog";
import useNotification from "../../../../hooks/layout/useNotification";

interface Props {
    childMenu: any;
    data: any;
    tableNameArr: any;
    selectedTableName: any;
    setSubNavs: React.Dispatch<React.SetStateAction<any>>;
    subNavs: Array<any>;
}

const childSetting = ({ childMenu, data, tableNameArr, selectedTableName, setSubNavs, subNavs }: Props) => {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [refreshKey, setRefreshKey] = useState(0);
    const [childForm] = Form.useForm();
    const formattedDate = new Date().toISOString();
    const showDrawer = () => {
        childForm.resetFields();
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = () => {
        const child = childForm.getFieldsValue().childNav;
        const arr = subNavs;
        arr.push({ tableName: selectedTableName, name: child, updatedAt: formattedDate })
        setSubNavs([...arr])
        setOpen(false);
    };

    const deletion = (record?: any) => {
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: async () => {
                const updatedRecords = subNavs.filter((x: any) => x.name === record.value);
                setSubNavs([...updatedRecords])
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
                        <Button onClick={onSubmit} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" form={childForm}>
                    {
                        childMenu && childMenu.length > 0 &&
                        getSelectFormItem('Child Name', 'childNav', 'Please select child.', false, childMenu)
                    }
                </Form>
            </Drawer>
        </>
    )
};

export default childSetting