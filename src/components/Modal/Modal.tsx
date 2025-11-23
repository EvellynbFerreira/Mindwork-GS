import { FaChevronRight } from "react-icons/fa";

type ModalProps = {
  mostrar: boolean;
  titulo: string;
  mensagem?: string;
  onClose: () => void;
  acaoOpcional?: { texto: string; onClick: () => void };

  description?: string;
  activities?: { id: number; text: string }[];
  onApply?: () => void;
};

export default function Modal({
  mostrar,
  titulo,
  mensagem,
  onClose,
  acaoOpcional,
  description,
  activities,
  onApply,
}: ModalProps) {

  if (!mostrar) return null;

  const isAdvanced = activities && activities.length > 0;

  const activityItemClass =
    "px-4 py-3 bg-purple-50 rounded-lg text-gray-700 text-base font-medium transition duration-200 hover:bg-purple-100 mb-2 cursor-pointer flex items-center gap-2";

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-8 w-11/12 max-w-lg shadow-2xl">

        {/* Título */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-purple-700">{titulo}</h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Modal Simples (Mensagem) */}
        {mensagem && !isAdvanced && (
          <p className="mb-6 text-gray-700">{mensagem}</p>
        )}

        {/* Modal Avançado (Descrição + Atividades) */}
        {isAdvanced && (
          <>
            {/* Descrição */}
            {description && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Descrição:
                </h3>
                <p className="text-gray-600 leading-relaxed border-b pb-4">
                  {description}
                </p>
              </div>
            )}

            {/* Atividades */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Atividades Sugeridas (Treino Diário):
              </h3>

              <div className="space-y-3">
                {activities?.map((activity) => (
                  <div key={activity.id} className={activityItemClass}>
                    <FaChevronRight className="w-3 h-3 text-purple-600" />
                    <span>{activity.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* BOTÕES */}
        <div className="flex justify-end gap-3">
          {/* Botão Opcional (Primário) */}
          {acaoOpcional && (
            <button
              onClick={acaoOpcional.onClick}
              className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg transition duration-200 hover:bg-purple-700"
            >
              {acaoOpcional.texto}
            </button>
          )}

          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100"
          >
            Fechar
          </button>

          {/* Botão Avançado (Aplicar) */}
          {isAdvanced && onApply && (
            <button
              onClick={onApply}
              className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
            >
              Fechar e Aplicar Desafio
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
