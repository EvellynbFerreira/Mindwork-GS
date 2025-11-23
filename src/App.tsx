import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Rodape from "./components/Rodape/Rodape";
import Cabecalho from "./components/Cabecalho/index.tsx";

export default function App() {
  const { pathname } = useLocation();

  const hideHeaderAndFooter =
    pathname.startsWith("/login") || pathname.startsWith("/cadastro");

  useEffect(() => {
    if (!window.localStorage.getItem("theme")) {
      window.localStorage.setItem("theme", "light");
    }

    document.documentElement.dataset.theme =
      window.localStorage.getItem("theme") || "light";
  }, []);

  return (
    <div className="mx-auto relative">
      {/* Cabeçalho */}
      {!hideHeaderAndFooter && <Cabecalho />}

      {/* Conteúdo principal */}
      <main>
        <Outlet />
      </main>

      {/* Rodapé */}
      {!hideHeaderAndFooter && <Rodape />}
    </div>
  );
}
