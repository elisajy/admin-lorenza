import { 
    BarsOutlined, 
    LogoutOutlined 
} from "@ant-design/icons"
import { Button } from "antd"
import { Header } from "antd/lib/layout/layout"
import "./GeneralHeader.less"
import { useAuth } from '../../../hooks/auth/AuthContext'
import React from "react"

interface Props {
    collapsed: boolean;
    toggleSideNav?: () => void;
    logout?: () => void;
};

const GeneralHeader = ({ collapsed, toggleSideNav, logout }: Props) => {
    const { authState } = useAuth();
    const userName = authState.userProfile !== null?  authState.userProfile.name : 'Welcome'
    return (
        <>
            <Header className="general-header" >

                {React.createElement(collapsed ? BarsOutlined : BarsOutlined, {
                    className: 'trigger',
                    onClick: toggleSideNav,
                })}
                <div className="header-language">
                <span className="user-name">
                   {userName}
                </span>
                    <Button className="logout-btn" icon={<LogoutOutlined />} onClick={logout}></Button>
                </div>
            </Header>
        </>
    )
}
export default GeneralHeader