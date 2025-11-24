import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { UsuarioType } from "../../types/usuario";

const API_URL = "https://mindwork-gs.onrender.com";

export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // 1. Buscar todos os usuários para validar
      const responseGet = await fetch(`${API_URL}/usuarios`);
      if (!responseGet.ok) {
        throw new Error("Falha ao conectar com o servidor. Tente novamente.");
      }
      const usuarios: UsuarioType[] = await responseGet.json();

      // 2. Verificar se o e-mail ou nome de usuário já existem
      const emailExists = usuarios.some((user) => user.email === email);
      if (emailExists) {
        setError("Este e-mail já está em uso. Deseja fazer login?");
        setIsSubmitting(false);
        return;
      }

      const userExists = usuarios.some((user) => user.nomeUser === nomeUser);
      if (userExists) {
        setError(
          "Este nome de usuário já está em uso. Escolha outro ou faça login."
        );
        setIsSubmitting(false);
        return;
      }

      // 3. Se não houver duplicidade, prosseguir com o cadastro
      const payload = { nome, nomeUser, email, senha };
      const responsePost = await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!responsePost.ok) {
        throw new Error("Não foi possível cadastrar o usuário.");
      }

      // 4. Redirecionar para o login após sucesso
      navigate("/login");
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Falha ao enviar cadastro.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <section className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white shadow-2xl rounded-xl p-8 sm:p-10 space-y-6 border-t-4 border-purple-500">
        {/* Botão Voltar */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm font-medium cursor-pointer"
            aria-label="Voltar para a página inicial"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Voltar
          </button>
        </div>

        {/* Logo MindWork clicável */}
        <div className="text-center mb-6">
          <Link 
            to="/" 
            className="inline-block transition-transform hover:scale-105 active:scale-95"
          >
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Mind<span className="text-purple-600">Work</span>
            </span>
          </Link>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
            Cadastro
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Crie sua conta para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
              disabled={isSubmitting}
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100 disabled:text-gray-500 placeholder:text-gray-400 text-gray-900 bg-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="nomeUser"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nome de usuário
            </label>
            <input
              id="nomeUser"
              name="nomeUser"
              value={nomeUser}
              onChange={(event) => setNomeUser(event.target.value)}
              required
              disabled={isSubmitting}
              placeholder="Seu nome de usuário"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100 disabled:text-gray-500 placeholder:text-gray-400 text-gray-900 bg-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              disabled={isSubmitting}
              placeholder="seu.email@exemplo.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100 disabled:text-gray-500 placeholder:text-gray-400 text-gray-900 bg-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
              disabled={isSubmitting}
              placeholder="Digite sua senha"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100 disabled:text-gray-500 placeholder:text-gray-400 text-gray-900 bg-transparent"
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg text-sm bg-red-100 text-red-700 border border-red-300">
              {error}{" "}
              {error.includes("login") && (
                <Link
                  to="/login"
                  className="font-medium text-blue-700 underline"
                >
                  Ir para Login
                </Link>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-purple-600 text-white font-semibold text-lg rounded-lg transition duration-300 hover:bg-purple-700 disabled:bg-gray-400 shadow-md"
          >
            {isSubmitting ? "Enviando..." : "Cadastrar"}
          </button>
        </form>

        <div className="text-center pt-6 sm:pt-8 mt-4 sm:mt-6">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="font-semibold text-purple-600 hover:text-purple-800 transition"
            >
              Faça seu login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
