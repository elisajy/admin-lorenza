import { Suspense, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.less'
import { Layout, Spin } from 'antd'
import ScrollToTop from './shared/ScrollToTop'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NoMatch from './shared/NoMatch'
import AppProtected from './AppProtected'
import Dashboard from './pages/dashboard/Dashboard'
import { protectedRoutes, RouteInfo } from './routes'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false);

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

  return (
    <Spin spinning={loading}>
      <Layout className="app-container">
        <Suspense fallback={<Spin />}>
          {/* <ScrollToTop /> */}
          <Routes>
            {/* <Route path="/auth" element={<Auth />}>
                <Route index element={<Login />} />
              </Route> */}
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
