import { Suspense, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.less'
import { Layout, notification, Spin } from 'antd'
import ScrollToTop from './shared/ScrollToTop'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NoMatch from './shared/NoMatch'
import AppProtected from './AppProtected'
import Dashboard from './pages/dashboard/Dashboard'
import { protectedRoutes, RouteInfo } from './routes'
import Login from './pages/auth/Login'
import Auth from './pages/auth/Auth'
import { CLEAR_NOTIFICATION, useLayout } from './hooks/layout/LayoutContext'
import { useAuth } from './hooks/auth/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false);
  const { layoutState, layoutDispatch } = useLayout();
  const { authState, authDispatch } = useAuth();

  const renderProtectedRoutes = useMemo(() => {
    return protectedRoutes.map((route: RouteInfo) => {
      if (route.children) {
        const childrenRoute = route.children.map((childRoute: RouteInfo) => {
          return (<Route key={childRoute.id} path={`${route.path}${childRoute.path}`} element={<childRoute.component />} />);
        });
        return [...childrenRoute];
      } else {
        return (<Route key={route.id} path={route.path} element={<route.component />} />);
      }
    });
  }, []);

  useEffect(() => {
    if (layoutState.showNotification && layoutState.showNotification.message) {
      openNotificationWithIcon();
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoutState.showNotification]);

  const openNotificationWithIcon = () => {
    notification[layoutState?.showNotification?.type]({
      message: layoutState?.showNotification.message,
      description: layoutState?.showNotification?.description,
    });
    layoutDispatch({ type: CLEAR_NOTIFICATION })
  };


  return (
    <Spin spinning={loading}>
      <Layout className="app-container">
        <Suspense fallback={<Spin />}>
          {/* <ScrollToTop /> */}
          <Routes>
            <Route path="/auth" element={<Auth />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/" element={<AppProtected />}>
              <Route index element={<Dashboard />} />
              {renderProtectedRoutes}
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </Layout>
    </Spin>
  )
}

export default App
