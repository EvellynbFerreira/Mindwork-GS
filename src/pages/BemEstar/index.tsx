import { useMemo, useState, type CSSProperties } from "react";
import { FaRegSmile, FaHeartbeat, FaCodeBranch } from "react-icons/fa";

function MoodMonitor() {
  const [moodValue, setMoodValue] = useState<number>(75);

  const getMoodEmoji = (value: number) => {
    if (value < 20) return "😩";
    if (value < 40) return "😔";
    if (value < 60) return "😐";
    if (value < 80) return "🙂";
    return "🤩";
  };

  const currentEmoji = useMemo(() => getMoodEmoji(moodValue), [moodValue]);

  // gradient progress for the range track using inline style var
  const sliderStyle = {
    "--progress": `${moodValue}%`,
    backgroundImage: `linear-gradient(to right, #f472b6 var(--progress), #e9eef5 var(--progress))`,
  } as CSSProperties & { [key: string]: string };

  return (
    <div className="relative bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 overflow-visible">
      {/* colored top border (thin) */}
      <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-gradient-to-r from-pink-400 to-pink-600" />

      <div className="p-8 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-pink-500 text-3xl">
            <FaRegSmile />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900">Monitor de Humor Diário</h3>
        </div>

        <p className="text-gray-600 mb-6">Como você se sente hoje?</p>

        <div className="flex flex-col items-center">
          {/* emoji central com sombra leve */}
          <div className="mb-6">
            <div className="w-28 h-28 rounded-full flex items-center justify-center text-6xl bg-gradient-to-br from-amber-300 to-rose-200 shadow-[inset_0_-6px_12px_rgba(0,0,0,0.08)] transform transition-transform duration-300 hover:scale-[1.04]">
              <span aria-hidden>{currentEmoji}</span>
            </div>
          </div>

          {/* slider */}
          <div className="w-full px-6 md:px-4 mb-3">
            <input
              aria-label="Controle de humor"
              type="range"
              min={0}
              max={100}
              value={moodValue}
              onChange={(e) => setMoodValue(Number(e.target.value))}
              style={sliderStyle}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Muito Mal</span>
              <span>Ótimo</span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => alert(`Humor registrado: ${currentEmoji} (${moodValue}%)`)}
            className="mt-4 w-[calc(100%-48px)] md:w-full max-w-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-shadow shadow-md"
          >
            Registrar Humor
          </button>
        </div>
      </div>
    </div>
  );
}

function HealthyWorkHabits() {
  return (
    <div className="relative bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 overflow-visible">
      <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-gradient-to-r from-blue-300 to-cyan-400" />
      <div className="p-8 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-cyan-600 text-3xl">
            <FaHeartbeat />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900">Hábitos de Trabalho Saudáveis</h3>
        </div>

        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-blue-800">Alerta de Pausa Ativo</p>
            <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Ficcional</span>
          </div>

          <p className="text-gray-700 mt-2">
            <strong>Dica da IA:</strong> A cada 90 minutos de foco intenso, faça uma pausa de 15 minutos. Isso comprovadamente melhora a retenção e reduz o stress.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-white rounded-lg border border-gray-100 p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Rotina de Pausa</h4>
            <p className="text-sm text-gray-600">5 min de alongamento → 10 min de caminhada leve → 5 min de respiração.</p>
          </div>

          <div className="flex-1 bg-white rounded-lg border border-gray-100 p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Micro-Hábitos</h4>
            <p className="text-sm text-gray-600">Use técnicas Pomodoro adaptadas ao seu ritmo: 75/15 para sessões profundas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelaxIntegrations() {
  return (
    <div className="relative bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 overflow-visible">
      <div className="absolute left-0 right-0 top-0 h-2 rounded-t-[18px] bg-gradient-to-r from-purple-400 to-violet-500" />
      <div className="p-8 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-violet-600 text-3xl">
            <FaCodeBranch />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900">Relaxamento & Integrações</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Respiração Guiada</h4>
            <p className="text-sm text-gray-600 mb-4">Componente animado simples de inala/exala — uso fictício integrado ao app.</p>
            <div className="h-20 bg-gradient-to-r from-purple-200 to-purple-100 rounded-full flex items-center justify-center text-purple-700 font-medium">
              [Componente Fictício]
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Links Externos Fictícios</h4>
            <ul className="space-y-2 mt-2">
              <li className="text-purple-700 hover:text-purple-900 transition cursor-pointer font-medium">App Meditação Zen</li>
              <li className="text-purple-700 hover:text-purple-900 transition cursor-pointer font-medium">Playlists Lofi para Foco</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BemEstar() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Container centralizado */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 lg:px-10 py-10">

        {/* Page title */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Sua Jornada de Bem-Estar Diário</h1>
          <div className="mt-4 h-0.5 w-48 mx-auto bg-gradient-to-r from-purple-200 to-purple-100 rounded" />
        </header>

        {/* Grid de conteúdo: monitor em destaque + outras seções */}
        <div className="grid grid-cols-1 gap-8">
          {/* Card principal com padding grande (como nas imagens) */}
          <div className="bg-transparent">
            <div className="rounded-[18px] bg-transparent p-2">
              <MoodMonitor />
            </div>
          </div>

          {/* Hábitos card */}
          <HealthyWorkHabits />

          {/* Relaxamentos */}
          <RelaxIntegrations />
        </div>

   
      </div>
    </main>
  );
}
