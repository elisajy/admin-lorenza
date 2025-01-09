import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import {
  CLEAR_CURRENT_USER,
  SET_LOGIN_STATUS,
  useAuth,
} from "./hooks/auth/AuthContext";
import SideMenu from "./pages/layout/side-nav/SideMenu";
import GeneralHeader from "./pages/layout/header/GeneralHeader";
import useNotification from "./hooks/layout/useNotification";
const cookies = new Cookies();

const AppProtected = () => {
  const { authState, authDispatch } = useAuth();
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 769 ? true : false
  );
  const { setSuccessNotification, setErrorNotification } = useNotification();
  const aToken: any = import.meta.env.VITE_ACCESS_TOKEN || "abf-at";
  // const rToken: any = import.meta.env.VITE_REFRESH_TOKEN || 'abf-rt';
  const navigate = useNavigate();

  const logout = () => {
    console.log(authState)
    fetch(
      `${import.meta.env.VITE_API_KEY}/logout/${authState.userProfile?.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: authState.userProfile?.id }),
      }
    )
      .then((response: any) => {
        console.log(response);
        if (response.status === 200) {
          setSuccessNotification("Logout Successful!");
        }
      })
      .catch((error) => {
        console.log("Logout error:", error);
        setErrorNotification("Logout Failed. Please try again later.");
      });
    signOutCleanUp();
  };

  const signOutCleanUp = () => {
    const isProd = import.meta.env.NODE_ENV === "production";

    cookies.remove(aToken, {
      path: "/",
      domain: isProd ? import.meta.env.VITE_COOKIE_DOMAIN : "localhost",
    });
    // cookies.remove(rToken, { path: "/", domain: isProd ? import.meta.env.VITE_COOKIE_DOMAIN : "localhost" });
    authDispatch({ type: CLEAR_CURRENT_USER });
    navigate("/auth");
  };

  useEffect(() => {
    if (!cookies.get(aToken)) {
      signOutCleanUp();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies.get(aToken)]);

  const toggleSideNav = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (!authState.isLogin && !cookies.get(aToken)) {
      navigate("/auth");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Layout hasSider className="app-container">
        <SideMenu collapsed={collapsed} toggleSideNav={toggleSideNav} />
        <Layout>
          {/* {authState.isLogin && <GeneralHeader toggleSideNav={toggleSideNav} logout={logout} collapsed={false} />} */}
          <GeneralHeader
            toggleSideNav={toggleSideNav}
            logout={logout}
            collapsed={false}
          />
          <Content className="site-layout-background">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppProtected;
