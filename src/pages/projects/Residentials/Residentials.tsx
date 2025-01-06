import { Space, Table } from "antd"
import Column from "antd/es/table/Column"
import { useEffect, useState } from "react";
import useNotification from "../../../hooks/layout/useNotification";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "../../../shared/ConfirmationDialog";

const Residentials = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [confirmation, setConfirmation] = useState({ title: '', message: '', buttonText: '', action: () => { } });
    const [residentials, setResidentials] = useState<any>([]);
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const [refreshKey, setRefreshKey] = useState(0);

    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/project-residentials/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/project-residentials/add`)
        }
    }

    useEffect(() => {
        fetchResidentials();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshKey]);

    const fetchResidentials = () => {
        setResidentials([]);
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/all-project-residentials`, {
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
                    setResidentials([...updatedData]);
                }
                );
        } catch (error) {
            console.error("Error fetching Project Residentials:", error);
        }
    };

    const deletion = (record: any) => {
        setShowModal(true);
        setConfirmation({
            title: 'Confirm Submission?',
            message: 'This action will delete selected record(s).',
            buttonText: 'Confirm',
            action: async () => {
                fetch(`${import.meta.env.VITE_API_KEY}/delete-project-residential/${record.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: record.id })
                })
                    .then((response) => {
                        if (response.status === 204) {
                            setSuccessNotification('Delete Successful!')
                        }
                    }
                    )
                    .catch((error) => {
                        console.log('Delete Project Residential error:', error);
                        setErrorNotification('Delete Failed. Please try again later.');
                    });

                setShowModal(false);
                setRefreshKey(prev => prev + 1); // Forces useEffect to refetch
            }
        })
    };

    return (
        <>
            <Table dataSource={residentials}                >
                <Column title="Title" dataIndex="title" key="name" />
                <Column title="Path" dataIndex="path" key="name" />
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
            <ConfirmationDialog showModal={showModal} title={confirmation.title}
                confirmationMessage={confirmation.message}
                setShowModal={setShowModal}
                action={confirmation.action} actionText={confirmation.buttonText} />
        </>
    )

}

export default Residentials