import { useLocation, useNavigate } from "react-router-dom";
import { SET_CURRENT_USER, SET_LOGIN_STATUS, useAuth } from "../../hooks/auth/AuthContext";
import { useEffect } from 'react';
import { Button, Form, FormProps, Input, Image } from "antd";
import "./Auth.less";
import { encode } from 'base-64';
import lcLogo from "../../assets/Lorenza_Logo_Transparent_In White.png";
import useNotification from "../../hooks/layout/useNotification";
import { useCookies } from "react-cookie";

type FieldType = {
    username?: string;
    password?: string;
};

const Login = () => {
    const aToken: any = import.meta.env.VITE_ACCESS_TOKEN || 'abf-at';
    const { authState, authDispatch } = useAuth();
    const navigate = useNavigate();
    const location: any = useLocation();
    const [cookies, setCookie, removeCookie] = useCookies([aToken]);
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const { from } = location.state || { from: { pathname: '/' } };
    // const rToken: any = import.meta.env.VITE_REFRESH_TOKEN || 'abf-rt';
    // const sid: any = import.meta.env.VITE_SESSION_ID || 'abf-sid';

    useEffect(() => {
        if (authState.isLogin) {
            navigate(from);
        }
    }, [authState.isLogin]); // eslint-disable-line react-hooks/exhaustive-deps

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        fetch(`${import.meta.env.VITE_API_KEY}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username!,
                password: encode(values.password!),
            }),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json().then((data) => {
                        const isProd = import.meta.env.NODE_ENV === 'production';
                        setSuccessNotification('Login Successful!');
                        sessionStorage.setItem(aToken, data.token);
                        setCookie(aToken, data.token,
                            {
                                maxAge: aToken === (import.meta.env.VITE_ACCESS_TOKEN || 'abf-at') ? 3600 : 18000, //refresh token keep for a week
                                domain: isProd ? import.meta.env.VITE_COOKIE_DOMAIN : 'localhost',
                                secure: isProd ? true : undefined,
                                sameSite: isProd ? 'lax' : undefined,
                                path: '/'
                            });
                        authDispatch({
                            type: SET_CURRENT_USER, payload: {
                                userProfile: {
                                    id: data.id,
                                    name: values.username!,
                                    userName: values.username!,
                                },
                            }
                        });
                        authDispatch({ type: SET_LOGIN_STATUS, payload: true });
                        navigate('/');
                    })
                }
            })
            .catch((error) => {
                console.log('Login error:', error);
                setErrorNotification('Login Failed. Please try again later.');
            });
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