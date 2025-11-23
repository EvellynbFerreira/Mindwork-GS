import { FaChartLine, FaShieldAlt } from "react-icons/fa";


interface RHMetricCardProps {
  title: string;
  value: string;
  detail: string;
  valueColorClass: string;
}

function RHMetricCard({ title, value, detail, valueColorClass }: RHMetricCardProps) {
  return (
    <div className="relative bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 overflow-visible">
      {/* Borda superior colorida */}
      <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-purple-400" />

      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className={`text-4xl font-extrabold mb-2 ${valueColorClass}`}>{value}</p>
      <p className="text-gray-600 text-sm">{detail}</p>
    </div>
  );
}

export default function ParaRH() {
  return (
    <main className="min-h-screen flex flex-col items-center pb-20 bg-gray-50">
      <div className="w-full max-w-7xl px-6 md:px-8 lg:px-10 pt-12">

        {/* Título */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            MindWork para RH e Liderança Ética
          </h1>
          <div className="mt-4 h-0.5 w-48 mx-auto bg-gradient-to-r from-purple-200 to-purple-100 rounded" />
        </header>

        {/* Banner de Destaque */}
        <section className="relative bg-purple-100 border border-purple-300 rounded-[18px] shadow-[0_10px_25px_rgba(0,0,0,0.06)] p-8 mb-12 overflow-visible">
          {/* Borda top */}
          <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-purple-400" />

          <div className="flex items-center gap-4 mb-4">
            <FaChartLine className="text-purple-700 text-3xl" />
            <h2 className="text-2xl font-bold text-gray-800">Insights Éticos, Sem Vigilância.</h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Oferecemos ao RH indicadores valiosos de bem-estar coletivo, <strong>jamais</strong> dados individuais de produtividade.
          </p>
        </section>

        {/* Cards de Métricas */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <RHMetricCard
            title="Indicador de Risco de Exaustão (Time)"
            value="18%"
            detail="Colaboradores com hábitos de foco não sustentáveis."
            valueColorClass="text-red-600"
          />

          <RHMetricCard
            title="Média de Soft Skill (Resiliência)"
            value="7.2/10"
            detail="Score coletivo baseado em auto-avaliações guiadas pela IA."
            valueColorClass="text-green-600"
          />
        </section>

        {/* Política de Privacidade */}
        <section className="relative bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-purple-300 p-8 overflow-visible">
          {/* Borda top */}
          <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-purple-400" />

          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-purple-700 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Nossa Política de Privacidade</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Os dados de foco e humor são <strong>anonimizados e agregados</strong> para gerar métricas de time.
            Não monitoramos telas, cliques ou emails individuais. Nosso foco é na{" "}
            <strong>cultura de bem-estar</strong>, não na vigilância da produtividade.
          </p>
        </section>
      </div>
    </main>
  );
}
