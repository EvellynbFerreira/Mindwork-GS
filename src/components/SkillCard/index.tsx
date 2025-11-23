import { FaChevronRight } from "react-icons/fa";

interface SkillCardProps {
    title: string;
    description: string;
    status: "Forte" | "A Desenvolver";
    onClickDetails: () => void;
}

export function SkillCard({ title, description, status, onClickDetails }: SkillCardProps) {
    const isStrong = status === "Forte";

    const statusColors = isStrong
        ? "bg-green-100 text-green-700 border-green-500 text-green-600 hover:text-green-800"
        : "bg-purple-100 text-purple-700 border-purple-500 text-purple-600 hover:text-purple-800";

    return (
        <div
            className={`bg-white p-6 rounded-xl shadow-lg border-l-4 transition-all hover:shadow-xl ${
                isStrong ? "border-green-500" : "border-purple-500"
            }`}
        >
            {/* Título + Status */}
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>

                <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        isStrong ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"
                    }`}
                >
                    {status}
                </span>
            </div>

            {/* Descrição */}
            <p className="text-sm text-gray-600 mb-5">{description}</p>

            {/* Botão */}
            <button
                onClick={onClickDetails}
                className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
                    isStrong
                        ? "text-green-600 hover:text-green-800"
                        : "text-purple-600 hover:text-purple-800"
                }`}
            >
                Ver Detalhes/Atividades
                <FaChevronRight className="w-3 h-3" />
            </button>
        </div>
    );
}
