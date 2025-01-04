import { Modal } from "antd"

interface Props {
    displayImg: any;
    setDisplayImg: any
}


const PreviewImage = ({ displayImg, setDisplayImg }: Props) => {
    const handleCancel = () => {
        setDisplayImg({
            previewVisible: false,
        })
    }
    return (
        <Modal
            open={displayImg.previewVisible}
            title={displayImg.previewTitle}
            footer={null}
            onCancel={handleCancel}
        >
            <img alt="example" style={{ width: '100%' }} src={displayImg.previewImage} />
        </Modal>
    )
}

export default PreviewImage