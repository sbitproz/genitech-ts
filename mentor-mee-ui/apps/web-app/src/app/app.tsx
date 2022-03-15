
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from 'react-router-dom';
import { APP_ROUTES } from './routes';
import BaseLayout from './layout/BaseLayout/BaseLayout';
import { ThemeProvider } from '@mentor-mee/core-ui'

const Public = () => (
  <div>
    <Link to={APP_ROUTES.LOGIN}>Login</Link>
  </div>
);

const Home = () => <>Home</>;

const PrivateRoute = () => <><Outlet /></>

const AuthLayout = () => <><Outlet /></>

const Login = () => <>Login</>

const Register = () => <>Register</>

const Reset = () => <>Reset</>

export function App() {
return (
  <ThemeProvider>
    <Router>
        <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path={APP_ROUTES.LOGIN} element={<Login />} />
          <Route path={APP_ROUTES.REGISTER} element={<Register />} />
          <Route path={APP_ROUTES.RESET} element={<Reset />} />
        </Route>
        <Route path="/another" element={<Public />} />
        </Routes>
    </Router>
  </ThemeProvider>
);
}

export default App;  
  