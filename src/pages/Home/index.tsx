import { useState } from "react";
import Modal from "../../components/Modal/Modal"; 
import { useNavigate } from "react-router-dom";
import { FaBolt, FaRegSmile, FaCodeBranch, FaRegCheckCircle } from "react-icons/fa"; 
import { FaChartLine } from "react-icons/fa6";
import type { ReactNode } from "react";


type DifferentialCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
};

function DifferentialCard({ icon, title, description, className = "" }: DifferentialCardProps) {
    return (
        <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${className}`}>
            <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3 className="text-xl font-bold text-purple-700">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

type MetricCardProps = {
    value: string | number;
    label: string;
    className?: string;
};

function MetricCard({ value, label, className = "" }: MetricCardProps) {
    return (
        <div className={`flex flex-col items-center justify-center p-8 rounded-xl shadow-md border border-green-500 bg-green-50 ${className}`}>
            <p className="text-5xl font-extrabold text-green-600 mb-2">{value}</p>
            <p className="text-lg font-medium text-gray-700 text-center">{label}</p>
        </div>
    );
}

type TestimonialCardProps = {
    quote: string;
    author: string;
    role: string;
};

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
    return (
        <div className="p-8 rounded-xl shadow-md border border-pink-300 bg-pink-50 flex flex-col justify-center">
            <FaRegSmile className="text-pink-500 text-3xl mb-4"/>
            <p className="italic text-gray-700 mb-4">"{quote}"</p>
            <p className="font-semibold text-right text-gray-800">
                — {author}, <span className="font-normal">{role}</span>
            </p>
        </div>
    );
}

export default function Home() {
  
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/login');
  };

  return (
    <main className="min-h-screen flex flex-col items-center pb-20 bg-white">

      {/* 1. HERO / BANNER PRINCIPAL */}
      <section className="w-full py-20 px-4 bg-purple-50 flex flex-col items-center text-center">
        <FaBolt className="text-purple-600 text-4xl mb-6"/>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          O Fim do Burnout. O Início do Foco Ético.
        </h2>
        <p className="max-w-3xl text-lg text-gray-600 mb-8">
          MindWork é a plataforma que usa Inteligência Artificial para monitorar seu bem-estar, não sua performance. 
          Cuidamos da sua saúde mental para otimizar sua produtividade de forma humana.
        </p>
        <button
          onClick={handleCTA}
          className="bg-purple-600 text-white font-semibold text-lg rounded-xl py-3 px-10 transition duration-300 hover:bg-purple-700 shadow-md"
        >
          Começar Agora
        </button>
      </section>

      {/* 2. SEÇÃO DE DIFERENCIAIS */}
      <section className="w-full max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          MindWork: IA Ética para sua Produtividade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DifferentialCard
            icon={<FaRegSmile className="text-pink-500 text-2xl" />}
            title="Bem-Estar Primeiro"
            description="Monitoramos humor, pausas e hábitos de foco para prevenir a exaustão."
          />
          <DifferentialCard
            icon={<FaChartLine className="text-cyan-500 text-2xl" />}
            title="IA Ética"
            description="Nenhuma vigilância de tela. Apenas sugestões personalizadas e não invasivas."
          />
          <DifferentialCard
            icon={<FaCodeBranch className="text-yellow-600 text-2xl" />}
            title="Desenvolvimento Pessoal"
            description="Sugestões de atividades para aprimorar suas soft skills essenciais."
          />
        </div>
      </section>

      {/* 3. DIFERENCIAL ÉTICO */}
      <section className="w-full max-w-7xl px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nosso Diferencial Ético e de Crescimento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border-l-4 border-cyan-500 rounded-lg shadow-xl bg-white">
                <div className="flex items-center text-cyan-500 mb-4">
                    <FaBolt className="text-2xl mr-2" />
                    <h3 className="text-2xl font-semibold">IA a Serviço do Humano</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    A MindWork utiliza Machine Learning para analisar padrões de fadiga e risco de exaustão 
                    a partir de dados auto-reportados e hábitos de foco — sempre com privacidade e transparência.
                </p>
            </div>

            <div className="p-8 border-l-4 border-purple-500 rounded-lg shadow-xl bg-white">
                <div className="flex items-center text-purple-500 mb-4">
                    <FaRegCheckCircle className="text-2xl mr-2" />
                    <h3 className="text-2xl font-semibold">Desenvolva Soft Skills Essenciais</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Ajudamos você a evoluir inteligência emocional, motivação, colaboração e foco 
                    com microatividades personalizadas.
                </p>
            </div>
        </div>
      </section>

      {/* 4. MÉTRICAS + DEPOIMENTO */}
      <section className="w-full max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MetricCard
                value="12.500+"
                label="Horas de foco sustentável gerenciadas no último trimestre."
            />
            <TestimonialCard
                quote="Finalmente uma ferramenta que me ajuda sem vigiar. Reduzi minha ansiedade e aumentei minha clareza mental."
                author="Laura S."
                role="Gerente de Projetos"
            />
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="w-full py-12 px-4 bg-purple-50 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
          Pronto para uma nova forma de trabalhar?
        </h2>
        <button
          onClick={handleCTA}
          className="bg-purple-600 text-white font-semibold text-lg rounded-lg py-3 px-12 transition duration-300 hover:bg-purple-700 shadow-xl"
        >
          Cadastre-se Grátis
        </button>
      </section>

      {/* MODAL */}
      <Modal
        mostrar={showModal}
        titulo="Bem-Vindo ao MindWork"
        mensagem="Faça login para continuar."
        onClose={() => setShowModal(false)}
        acaoOpcional={{
          texto: "Acessar Plataforma",
          onClick: () => navigate("/login"),
        }}
      />
    </main>
  );
}
