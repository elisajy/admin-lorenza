import { Button, Col, Drawer, Form, Input, Row, Space, Table, TableProps } from "antd";
import { menuChild } from "../../../products/dummyProduct";
import { useEffect, useState } from "react";
import Column from "antd/es/table/Column";
import { getInputFormItem, getSelectFormItem, getTagsFormItem, getTextAreaFormItem } from "../../../utils/FormItems";

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

const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        // can do bulk delete with this function
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};


const childSetting = ({ childMenu, data, tableNameArr }: Props) => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const [open, setOpen] = useState(false);
    const [subNavs, setSubNavs] = useState<any>([]);

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

    return (
        <>
            <div className='form-button-child-container'>
                <div>
                    <Button type="primary" className='form-button' onClick={showDrawer}>Add</Button>
                    <Button type="primary" danger className='form-button'>Bulk Delete</Button>
                </div>
            </div>
            <div>
                <Table dataSource={subNavs}
                    rowSelection={{ type: selectionType, ...rowSelection }}
                >
                    <Column title="Child Name" dataIndex="name" key="name" />
                    <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: any) => (
                            <Space size="middle">
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
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
                    {getTagsFormItem('Child', 'childNavs', 'Please select child.', false, childMenu)}
                </Form>
            </Drawer>
        </>
    )
};

export default childSetting