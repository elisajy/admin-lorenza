import { Button, Tabs, TabsProps } from "antd";
import { useNavigate } from "react-router-dom";
import Commercials from "./Commercials/Commercials";
import Residentials from "./Residentials/Residentials";

const Projects = () => {
    const navigate = useNavigate();
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/project-settings/edit/${record.key}`)
        }

        if (type === 'add') {
            navigate(`/project-settings/add`)
        }
    }
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Residentails',
            children: <Residentials />,
        },
        {
            key: '2',
            label: 'Commercials',
            children: <Commercials />,
        },
    ];

    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Projects</h2>
                </div>
                <div>
                    <Button type="primary" className='form-button' onClick={() => navAction('add')}>Add</Button>
                </div>
            </div>
            <div>
                <Tabs defaultActiveKey="1" items={items} />
            </div>
        </>
    )
}

export default Projects