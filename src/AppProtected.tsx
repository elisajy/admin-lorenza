import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  CLEAR_CURRENT_USER,
  useAuth,
} from "./hooks/auth/AuthContext";
import SideMenu from "./pages/layout/side-nav/SideMenu";
import GeneralHeader from "./pages/layout/header/GeneralHeader";
import useNotification from "./hooks/layout/useNotification";

const AppProtected = () => {
  const aToken: any = import.meta.env.VITE_ACCESS_TOKEN || "abf-at";
  const { authState, authDispatch } = useAuth();
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 769 ? true : false
  );
  const { setSuccessNotification, setErrorNotification } = useNotification();
  const [cookies, setCookie, removeCookie] = useCookies([aToken]);
  const navigate = useNavigate();

  const logout = () => {
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

    removeCookie(aToken, {
      path: "/",
      domain: isProd ? import.meta.env.VITE_COOKIE_DOMAIN : "localhost",
    });
    authDispatch({ type: CLEAR_CURRENT_USER });
    navigate("/auth");
  };

  const toggleSideNav = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (!authState.isLogin && !cookies[aToken]) {
      signOutCleanUp();
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
