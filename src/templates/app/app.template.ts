import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { Generator } from "@interfaces/template.interface";
import { MODULE } from "@config/module.constants";

const generateTsLibrary = (name: string) => `nx generate @nrwl/workspace:library --name=${name} --buildable &&`

const generate = (config: Config) => {
  const template = `
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mentor-mee/core-ui'

const APP_ROUTES = {
  LOGIN: 'login',
  REGISTER: 'register',
  RESET: 'reset'
}

const Public = () => (
  <div>
    <Link to={APP_ROUTES.LOGIN}>Login</Link>
  </div>
);

const Home = () => <>Home</>;

const PrivateRoute = ({children}: any) => <>{children}</>

const BaseLayout = ({children}: any) => <>{children}</>

const AuthLayout = ({children}: any) => <>{children}</>

const Login = () => <>Login</>

const Register = () => <>Login</>

const Reset = () => <>Login</>

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
  `

  return {
    template: translate(template,config),
    title: `CLI project builder`,
    fileName: `workspaceCliCommands.txt`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;


