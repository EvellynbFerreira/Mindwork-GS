import { Link, useNavigate } from "react-router-dom";
import { useLogado } from "../../hooks/useLogado";
import { FaUserCircle, FaHome, FaChartLine, FaRegSmile, FaRegFileAlt, FaUsers, FaBriefcase } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import logo from "../../assets/img/news_icon.png";

export default function Cabecalho() {
  const navigate = useNavigate();
  const { userIsLogged, userEmail, clearLogin } = useLogado();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Links do cabeçalho em roxo
  const linkClasses =
    "text-purple-600 font-medium text-sm transition duration-150 hover:text-purple-700 focus-visible:text-purple-700 flex items-center gap-1";

  function handleLogout() {
    clearLogin("userLogado");
    setMenuOpen(false);
    navigate("/login");
    window.location.reload();
  }

  return (
    <nav className="w-full bg-white-800 gap-3 py-4 px-6 shadow-md grid grid-cols-3 max-sm:grid-cols-2 items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold tracking-wide text-purple-600">
          Mindwork
        </h1>
      </div>

      {/* LINKS DO MENU CENTRAL — mantidos + adicionados */}
      <div className="flex items-center space-x-4 h-full">

        {/* Links originais */}
        <Link to="/" className={linkClasses}>
          <FaHome /> Home
        </Link>

        <Link to="/sobre" className={linkClasses}>
          <FaRegFileAlt /> Sobre
        </Link>

        <Link to="/contato" className={linkClasses}>
          Contato
        </Link>
        
        <Link to="/dashboard" className={linkClasses}>
          <FaChartLine /> Dashboard
        </Link>

        <Link to="/softskills" className={linkClasses}>
          Soft Skills
        </Link>

        <Link to="/bemestar" className={linkClasses}>
          <FaRegSmile /> Bem-Estar
        </Link>

        <Link to="/integrantes" className={linkClasses}>
          <FaUsers /> Integrantes
        </Link>
      </div>

      {/* COLUNA DIREITA: RH + Login/Usuário */}
      <div className="flex items-center gap-4 justify-self-end">

        {/* Link PARA RH (do código 2) */}
        <Link
          to="/rh"
          className="text-purple-600 font-semibold text-sm transition duration-150 hover:text-purple-800 flex items-center gap-1"
        >
          Para RH <FaBriefcase />
        </Link>

        {/* Usuário / Login */}
        <div className="relative" ref={menuRef}>
          {userIsLogged ? (
            <div
              className="group flex items-center gap-x-2 cursor-pointer select-none"
              onClick={() => setMenuOpen(!menuOpen)}
              title="Abrir menu do perfil"
            >
              <FaUserCircle className="text-purple-600 text-3xl transition group-hover:text-purple-700" />
              <p className="text-purple-600 transition group-hover:text-purple-700">
                {userEmail}
              </p>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-purple-600 text-white font-medium text-sm rounded-md py-2 px-6 transition duration-150 hover:bg-purple-700 focus-visible:bg-purple-700"
            >
              Login
            </Link>
          )}

          {/* Dropdown */}
          {menuOpen && userIsLogged && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-2 z-20 border border-gray-200">
              <Link
                to="/perfil"
                className="block px-4 py-2 text-purple-600 transition hover:text-purple-700 hover:bg-purple-50"
                onClick={() => setMenuOpen(false)}
              >
                Perfil
              </Link>

              <Link
                to="/salvos"
                className="block px-4 py-2 text-purple-600 transition hover:text-purple-700 hover:bg-purple-50"
                onClick={() => setMenuOpen(false)}
              >
                Salvos
              </Link>

              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-purple-600 transition hover:text-purple-700 hover:bg-purple-50"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
