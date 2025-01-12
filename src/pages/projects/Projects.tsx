import { Button, Tabs, TabsProps } from "antd";
import { useNavigate } from "react-router-dom";
import Commercials from "./Commercials/Commercials";
import Residentials from "./Residentials/Residentials";
import { useState } from "react";

const Projects = () => {
    const navigate = useNavigate();
    const [tabKey, setTabKey] = useState<any>('1');
    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            if (tabKey === '1') {
                navigate(`/project-settings/edit/res/${record.key}`)
            } else {
                navigate(`/project-settings/edit/com/${record.key}`)
            }
        }

        if (type === 'add') {
            navigate(`/project-settings/add`)
        }
    }

    const onChange = (key: string) => {
        setTabKey(key);
    };


    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Residentials',
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
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </>
    )
}

export default Projects