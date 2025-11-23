import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Erro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-10 sm:px-8 md:px-10">

      {/* Ícone */}
      <FaExclamationTriangle className="text-purple-500 text-6xl mb-6" />

      {/* Código */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-purple-600 tracking-widest">
        404
      </h1>

      {/* Título */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5 text-gray-900">
        Página não encontrada
      </h2>

      {/* Texto */}
      <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-md">
        A página que você está tentando acessar não existe ou foi movida.
      </p>

      {/* Botão */}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-purple-500 text-white font-semibold rounded-lg px-8 py-3 text-base hover:bg-purple-600 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
      >
        Voltar
      </button>
    </div>
  );
}
