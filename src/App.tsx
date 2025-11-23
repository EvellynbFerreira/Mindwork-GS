import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Rodape from "./components/Rodape/Rodape";
import Cabecalho from "./components/Cabecalho/index";

export default function App() {
  const { pathname } = useLocation();

  const hideHeaderAndFooter = pathname.startsWith("/login") || pathname.startsWith("/cadastro");

  useEffect(() => {
    if (!window.localStorage.getItem("theme")) {
      window.localStorage.setItem("theme", "light");
    }
    document.documentElement.dataset.theme = window.localStorage.getItem("theme") || "light";
  }, []);

  return (
    <div className="mx-auto relative">
      {!hideHeaderAndFooter && <Cabecalho />}

      <main>
        <Outlet />
      </main>

      {!hideHeaderAndFooter && <Rodape />}
    </div>
  );
}