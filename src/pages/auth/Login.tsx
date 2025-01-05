import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth/AuthContext";
import { useEffect, useState } from 'react';
import { Button, Checkbox, Form, FormProps, Input, Image } from "antd";
import "./Auth.less"
import lcLogo from "../../assets/Lorenza_Logo_Transparent_In White.png";

type FieldType = {
    username?: string;
    password?: string;
};

const Login = () => {
    const { authState, authDispatch } = useAuth();
    const navigate = useNavigate();
    const location: any = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    const aToken: any = import.meta.env.VITE_ACCESS_TOKEN || 'abf-at';
    const rToken: any = import.meta.env.VITE_REFRESH_TOKEN || 'abf-rt';
    const sid: any = import.meta.env.VITE_SESSION_ID || 'abf-sid';

    useEffect(() => {
        if (authState.isLogin) {
            navigate(from);
        }
    }, [authState.isLogin]); // eslint-disable-line react-hooks/exhaustive-deps

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="login-container">
                <div className="login-wrap">
                    <div>
                        <Image
                            preview={false}
                            width={300}
                            src={lcLogo}
                            alt="LC Logo"
                        />
                    </div>
                    <br />
                    <Form
                        name="basic"
                        style={{ width: 400 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                        layout="vertical"
                    >
                        <Form.Item<FieldType>
                            className="login-form-item"
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            className="login-form-item"
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <br />
                        <Form.Item label={null}>
                            <Button style={{ width: 200, backgroundColor: '#ff6e04' }} type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login