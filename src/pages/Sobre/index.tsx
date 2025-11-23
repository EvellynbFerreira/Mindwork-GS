import { FaRegLightbulb, FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";
import { FaBookAtlas, FaEye } from "react-icons/fa6";
import type { ReactNode } from "react";

interface ContentBlockProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  colorClass?: string;
}

function ContentBlock({ title, children, icon, colorClass }: ContentBlockProps) {
  return (
    <section className="mb-12">
      <h2 className={`text-2xl font-semibold mb-3 flex items-center gap-3 ${colorClass}`}>
        {icon && <span className="text-3xl">{icon}</span>}
        {title}
      </h2>

      <div className="text-gray-700 leading-relaxed text-lg bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        {children}
      </div>
    </section>
  );
}

export default function Sobre() {
  return (
    <main className="min-h-screen flex flex-col items-center pb-20 bg-gray-50 text-gray-900">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">

        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Sobre a MindWork
        </h1>

        {/* Quem Somos */}
        <ContentBlock title="Quem Somos" icon={<FaBookAtlas />} colorClass="text-purple-600">
          <p>
            A MindWork é uma plataforma criada para promover o equilíbrio entre alta performance e bem-estar emocional.
            Nosso foco é ajudar profissionais a crescerem de forma saudável, usando tecnologia e IA ética como aliadas.
          </p>
        </ContentBlock>

        {/* Missão */}
        <ContentBlock title="Nossa Missão" icon={<FaRegLightbulb />} colorClass="text-purple-600">
          <p>
            Capacitar pessoas a alcançarem seu melhor desempenho ao cuidar da saúde mental.
            Acreditamos que <strong>produtividade sustentável nasce do equilíbrio emocional</strong>.
          </p>
        </ContentBlock>

        {/* Problema */}
        <ContentBlock title="O Problema" icon={<FaChartLine />} colorClass="text-purple-600">
          <p>
            O ambiente profissional moderno tem sido marcado por burnout, ansiedade e pressão excessiva.
            A tecnologia, quando usada de forma invasiva, intensifica esse cenário.  
            A MindWork surge para <strong>quebrar esse ciclo</strong>, oferecendo ferramentas de autoconhecimento,
            hábitos saudáveis e desenvolvimento emocional.
          </p>
        </ContentBlock>

        {/* Visão */}
        <ContentBlock title="Nossa Visão" icon={<FaEye />} colorClass="text-purple-600">
          <p>
            Ser uma referência em bem-estar e crescimento humano no ambiente corporativo,
            unindo tecnologia, empatia e desenvolvimento real.
          </p>
        </ContentBlock>

        {/* Diferenciais */}
        <ContentBlock title="Diferenciais e Ética" icon={<FaShieldAlt />} colorClass="text-purple-600">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-purple-500 text-xl mt-1">✓</span>
              <p><strong>IA Não-Invasiva:</strong> baseada em hábitos, reflexões e autorregistros, sem vigilância.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-purple-500 text-xl mt-1">✓</span>
              <p><strong>Crescimento Profissional:</strong> integração entre soft skills e saúde mental.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-purple-500 text-xl mt-1">✓</span>
              <p><strong>Privacidade e Transparência:</strong> o usuário controla 100% dos seus dados.</p>
            </li>
          </ul>
        </ContentBlock>

        {/* CTA */}
        <div className="pt-8 flex justify-center">
          <a
            href="/integrantes"
            className="text-lg text-purple-600 font-semibold hover:text-purple-800 flex items-center gap-2"
          >
            Conheça Nossa Equipe
            <FaUsers />
          </a>
        </div>
      </div>
    </main>
  );
}
