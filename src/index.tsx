import './index.css'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { LayoutProvider } from './hooks/layout/LayoutContext';
import { AuthProvider } from './hooks/auth/AuthContext';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <CookiesProvider>
    <LayoutProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </LayoutProvider>
  </CookiesProvider>
)
