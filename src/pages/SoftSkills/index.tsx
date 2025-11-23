import { useState } from 'react';
import { SkillCard } from '../../components/SkillCard/index';
import Modal from '../../components/Modal/Modal';

// Tipos
interface Activity {
  id: number;
  text: string;
}

interface Skill {
  id: number;
  title: string;
  description: string;
  shortDesc: string;
  status: 'Forte' | 'A Desenvolver';
  activities: Activity[];
}

// Dados Mockados
const SKILLS_DATA: Skill[] = [
  { 
    id: 1, 
    title: "Organização", 
    shortDesc: "Capacidade de estruturar tarefas e tempo com eficácia.", 
    description: "A organização é a base da produtividade, permitindo gerenciar prioridades e manter o controle do fluxo de trabalho sem stress.", 
    status: 'Forte', 
    activities: [
      {id: 1, text: "Revisão de agenda diária"},
      {id: 2, text: "Metodologia GTD"},
      {id: 3, text: "Limpeza digital semanal"}
    ]
  },
  { 
    id: 2, 
    title: "Liderança", 
    shortDesc: "Habilidade de inspirar e guiar equipes em direção a objetivos.", 
    description: "Liderança não é apenas dar ordens, mas motivar, resolver conflitos e estabelecer uma visão clara para o time.", 
    status: 'Forte', 
    activities: [
      {id: 1, text: "Mentoria a um colega"},
      {id: 2, text: "Facilitar uma reunião"},
      {id: 3, text: "Estudo de caso de gestão"}
    ]
  },

  // Para Desenvolver
  { 
    id: 3, 
    title: "Criatividade", 
    shortDesc: "Gerar novas ideias e soluções originais.", 
    description: "Criatividade é a chave para a inovação. Envolve a capacidade de sair da caixa e conectar conceitos de formas não óbvias.", 
    status: 'A Desenvolver', 
    activities: [
      {id: 1, text: "Brainstorming com tema aleatório"},
      {id: 2, text: "Aprender uma nova skill fora da área"},
      {id: 3, text: "Diário de ideias"}
    ]
  },
  { 
    id: 4, 
    title: "Pensamento Crítico", 
    shortDesc: "Analisar informações de forma objetiva e racional.", 
    description: "O pensamento crítico permite avaliar a validade das informações, identificar vieses e tomar decisões informadas e lógicas.", 
    status: 'A Desenvolver', 
    activities: [
      {id: 1, text: "Debate sobre um artigo"},
      {id: 2, text: "Análise SWOT de um projeto pessoal"},
      {id: 3, text: "Ler sobre falácias lógicas"}
    ]
  },
  { 
    id: 5, 
    title: "Resiliência", 
    shortDesc: "Capacidade de se adaptar e se recuperar de adversidades.", 
    description: "Resiliência é a força mental para lidar com o stress, fracassos e mudanças, mantendo-se produtivo e focado.", 
    status: 'A Desenvolver', 
    activities: [
      {id: 1, text: "Diário de gratidão"},
      {id: 2, text: "Exercício de respiração 4-7-8"},
      {id: 3, text: "Estabelecer limites de trabalho"}
    ]
  },
  { 
    id: 6, 
    title: "Colaboração", 
    shortDesc: "Trabalhar bem em equipe, compartilhando e apoiando.", 
    description: "Colaboração eficiente significa comunicação aberta, respeito mútuo e foco em resultados compartilhados.", 
    status: 'A Desenvolver', 
    activities: [
      {id: 1, text: "Oferecer ajuda proativamente a um colega"},
      {id: 2, text: "Sessão de feedback construtivo"},
      {id: 3, text: "Participar de um projeto interdisciplinar"}
    ]
  }
];

export default function SoftSkills() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const strongSkills = SKILLS_DATA.filter(s => s.status === 'Forte');
  const skillsToDevelop = SKILLS_DATA.filter(s => s.status === 'A Desenvolver');

  const handleViewDetails = (skill: Skill) => {
    setSelectedSkill(skill);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSkill(null);
  };

  const handleApplyChallenge = () => {
    alert(`Desafio de ${selectedSkill?.title} aplicado!`);
    handleCloseModal();
  };

  return (
    <main className="min-h-screen flex flex-col items-center pb-20 bg-gray-50">
      <div className="w-full max-w-7xl px-6 lg:px-10 pt-12">

        {/* Título */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center sm:text-left">
            Desenvolvimento de Soft Skills
          </h1>
          <div className="mt-4 h-0.5 w-48 bg-linear-to-r from-purple-200 to-purple-100 rounded"></div>
        </header>

        {/* Habilidades Fortes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Minhas Habilidades Fortes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strongSkills.map(skill => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                description={skill.shortDesc}
                status={skill.status}
                onClickDetails={() => handleViewDetails(skill)}
              />
            ))}
          </div>
        </section>

        {/* Habilidades para Desenvolver */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Habilidades para Desenvolver
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsToDevelop.map(skill => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                description={skill.shortDesc}
                status={skill.status}
                onClickDetails={() => handleViewDetails(skill)}
              />
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedSkill && (
          <Modal
            {...({
              mostrar: modalOpen,
              title: selectedSkill.title,
              description: selectedSkill.description,
              activities: selectedSkill.activities,
              onClose: handleCloseModal,
              onApply: handleApplyChallenge
            } as any)}
          />
        )}

      </div>
    </main>
  );
}
