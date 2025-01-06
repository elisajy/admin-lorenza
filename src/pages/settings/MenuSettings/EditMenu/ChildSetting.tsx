import { Button, Drawer, Form, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import ConfirmationDialog from "../../../../shared/ConfirmationDialog";
import { getSelectFormItem } from "../../../utils/FormItems";

interface Props {
    childMenu: any;
    data: any;
    tableNameArr: any;
    selectedTableName: any;
    setSubNavs: React.Dispatch<React.SetStateAction<any>>;
    subNavs: Array<any>;
}

const childSetting = ({ childMenu, data, selectedTableName, setSubNavs, subNavs }: Props) => {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
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

    useEffect(() => {
        if (!!data) {
            setSubNavs(data.subNavs)
        }
    }, [data]);

    const deletion = (record?: any) => {
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: async () => {
                const index = subNavs.findIndex((x: any) => x.name === record.name);
                if (index !== -1) {
                    // Directly mutate the array (not recommended for functional components)
                    const updatedRecords = [...subNavs];
                    updatedRecords.splice(index, 1);
                    setSubNavs([...updatedRecords])
                }
                setShowModal(false);
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
                        getSelectFormItem('Child', 'childNav', 'Please select child.', false, childMenu)
                    }
                    {/* {getTagsFormItem('Child', 'childNavs', 'Please select child.', false, childMenu)} */}
                </Form>
            </Drawer>
        </>
    )
};

export default childSetting