import App from "../App.tsx";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/index.tsx";
import Cadastro from "../pages/Cadastro/index.tsx";
import Home from "../pages/Home/index.tsx";
import Sobre from "../pages/Sobre/index.tsx";
import BemEstar from "../pages/BemEstar/index.tsx";
import SoftSkills from "../pages/SoftSkills/index.tsx";
import Dashboard from "../pages/Dashboard/index.tsx";
import Integrantes from "../pages/Integrantes/index.tsx";
import RH from "../pages/RH/index.tsx";
import Erro from "../pages/Erro/index.tsx";
import "../main.css";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Erro/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/home", element: <Home /> },
      {path: "/dashboard", element: <Dashboard />},
      {path: "/softskills", element: <SoftSkills />},
      { path: "/sobre", element: <Sobre /> },
      {path: "/rh", element: <RH />},
      { path: "/bemestar", element: <BemEstar /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/login", element: <Login /> },
      { path: "/editar-cadastro/:id", element: <Cadastro /> },
    ],
  },
], {basename:"/sistema-flow"} );

