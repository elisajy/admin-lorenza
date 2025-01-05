import { Modal } from 'antd';
import React from 'react';

interface Props {
    showModal: boolean;
    title: string;
    confirmationMessage: string;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    action: () => void;
    cancelText?: string;
    actionText?: string;
}

const ConfirmationDialog = ({ showModal, title, confirmationMessage, setShowModal,
    action, cancelText, actionText }: Props) => {

    const hideModal = () => {
        setShowModal(false);
    };

    return (
        <Modal
            title={title ? title : 'Confirmation'}
            open={showModal}
            onOk={() => { action(); setShowModal(false); }}
            onCancel={hideModal}
            okText={actionText ? actionText : 'Confirm'}
            cancelText={cancelText ? cancelText : 'Cancel'}
        >
            <span>{confirmationMessage}</span>
        </Modal>
    )
}

export default ConfirmationDialog;