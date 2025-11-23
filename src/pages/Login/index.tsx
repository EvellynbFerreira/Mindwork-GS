import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import type { FormEvent } from "react";
import type { UsuarioType } from "../../types/usuario";

const API_URL = "http://localhost:3001";

export default function Login() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
           
            const response = await fetch(`${API_URL}/usuarios`);
            if (!response.ok) {
                throw new Error("Erro ao conectar ao servidor.");
            }

            const usuarios: UsuarioType[] = await response.json();

            // Verifica credenciais
            const usuarioEncontrado = usuarios.find(
                (u) => u.email === email && u.senha === password
            );

            if (!usuarioEncontrado) {
                setError("E-mail ou senha incorretos.");
                return;
            }

            // Salva usuário no localStorage
            localStorage.setItem("userLogado", JSON.stringify(usuarioEncontrado));

            // Redirecionamento com parâmetro de artigo
            const articleId = searchParams.get("article");
            if (articleId) {
                navigate(`/artigo/${articleId}`);
            } else {
                navigate("/home");
            }
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Erro inesperado.";
            setError(msg);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-purple-500">
                
                {/* Título */}
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Acesse o MindWork
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Campo E-mail */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition"
                        />
                    </div>

                    {/* Campo Senha */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition"
                        />
                    </div>

                    {/* ERRO */}
                    {error && (
                        <div className="p-3 rounded-lg bg-red-100 text-red-700 border border-red-300 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Botão Entrar */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-purple-600 text-white font-semibold text-lg rounded-lg transition duration-300 hover:bg-purple-700 shadow-md disabled:bg-gray-400"
                    >
                        {isSubmitting ? "Entrando..." : "Entrar"}
                    </button>
                </form>

                {/* Link para Cadastro */}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Não tem conta? 
                        <Link to="/cadastro" className="text-purple-600 font-semibold ml-1 hover:text-purple-800 transition">
                            Cadastre-se
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
