import type { ReactNode } from "react";
import { FaBolt, FaRegSmile, FaHeartbeat } from "react-icons/fa";


interface MetricCardProps {
  title: string;
  value: string;
  detail: string;
  icon: ReactNode;
  iconClass: string;
  colorClass: string;
}

function MetricCard({ title, value, detail, icon, iconClass, colorClass }: MetricCardProps) {
  return (
    <div
      className={`relative bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 overflow-visible`}
    >
      {/* Borda superior colorida */}
      <div
        className={`absolute left-0 right-0 top-0 h-2 rounded-t-[18px] ${colorClass}`}
      />

      <div className="p-8 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-700">{title}</h3>
          <span className={`text-4xl ${iconClass}`}>{icon}</span>
        </div>

        <p className="text-5xl font-extrabold text-gray-900 mb-2">{value}</p>
        <p className="text-gray-600">{detail}</p>
      </div>
    </div>
  );
}


interface AIAlertProps {
  message: string;
}

function AIAlert({ message }: AIAlertProps) {
  return (
    <div className="relative bg-yellow-50 rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-yellow-200 overflow-visible max-w-7xl mx-auto mb-10">
      <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-yellow-400" />

      <div className="p-6 pt-5 flex items-start gap-3">
        <FaBolt className="text-yellow-600 text-3xl" />

        <div>
          <p className="font-bold text-yellow-800">Alerta Preventivo da IA:</p>
          <p className="italic text-gray-700 text-sm mt-1">"{message}"</p>
        </div>
      </div>
    </div>
  );
}



interface RecommendationProps {
  title: string;
  content: string;
}

function Recommendation({ title, content }: RecommendationProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
      <p className="text-gray-700">
        <span className="text-yellow-600 mr-2">💡</span>
        <span className="font-bold">{title}:</span> {content}
      </p>
    </div>
  );
}


export default function Dashboard() {
  return (
    <main className="min-h-screen flex flex-col items-center pb-20 bg-gray-50">
      <div className="w-full max-w-7xl px-6 md:px-8 lg:px-10 pt-12">

        {/* TÍTULO PADRONIZADO */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Seu Painel de Bem-Estar e Produtividade
          </h1>
          <div className="mt-4 h-0.5 w-48 mx-auto bg-gradient-to-r from-yellow-200 to-yellow-100 rounded" />
        </header>

        {/* ALERTA DO APP */}
        <AIAlert message="Seu nível de foco está alto, mas você não fez uma pausa longa nas últimas 3 horas. Considere 15 minutos de descanso." />

        {/* CARDS DE MÉTRICAS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          <MetricCard
            title="Humor da Semana"
            value="85%"
            detail="Melhora de 12% em relação à semana anterior."
            icon={<FaRegSmile />}
            iconClass="text-green-500"
            colorClass="bg-green-400"
          />

          <MetricCard
            title="Tempo de Foco (Hoje)"
            value="4h 32m"
            detail="Total de tempo dedicado a tarefas profundas."
            icon={<FaBolt />}
            iconClass="text-purple-600"
            colorClass="bg-purple-400"
          />

          <MetricCard
            title="Pausas Realizadas"
            value="6"
            detail="Pausas curtas registradas hoje (recomendado: 7)."
            icon={<FaHeartbeat />}
            iconClass="text-pink-500"
            colorClass="bg-pink-400"
          />
        </section>

        {/* GRÁFICO FICTÍCIO */}
        <section className="relative bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 p-8 mb-12 overflow-visible">
          <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-green-400" />

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Evolução do Humor</h2>

          <div className="h-72 bg-green-500 text-white flex items-center justify-center rounded-xl shadow-inner">
            <p className="text-3xl font-semibold">Gráfico de Linha Fictício</p>
          </div>
        </section>

        {/* RECOMENDAÇÕES */}
        <section className="relative bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 p-8 overflow-visible">
          <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-yellow-400" />

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recomendações de Bem-Estar</h2>

          <div className="space-y-4">
            <Recommendation
              title="Mindfulness"
              content='Tente a respiração guiada na seção "Bem-Estar" por 5 minutos antes de começar sua próxima tarefa.'
            />
            <Recommendation
              title="Soft Skill"
              content='O desafio diário de "Comunicação" pode ajudar a melhorar a clareza dos seus emails.'
            />
          </div>
        </section>

      </div>
    </main>
  );
}
