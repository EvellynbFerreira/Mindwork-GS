import { FaGithub, FaLinkedin } from "react-icons/fa";

interface MemberCardProps {
  initials: string;
  name: string;
  rm: string;
  class: string;
  githubUrl: string;
  linkedinUrl: string;
  foto?: string;
}

export function MemberCard({
  initials,
  name,
  rm,
  class: className,
  githubUrl,
  linkedinUrl,
  foto,
}: MemberCardProps) {
  const autoInitials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 p-6 flex flex-col items-center text-center">

      {/* Foto ou iniciais */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 mb-4 overflow-hidden flex items-center justify-center text-lg font-semibold text-gray-600 select-none">
        {foto ? (
          <img
            src={foto}
            alt={`Foto de ${name}`}
            className="absolute inset-0 w-full h-full object-cover rounded-full"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <span>{autoInitials}</span>
        )}
      </div>

      <h3 className="text-base md:text-lg font-semibold text-gray-800">
        {name}
      </h3>

      <span className="text-sm text-gray-600 mb-3">
        {rm} — {className}
      </span>

      <div className="flex items-center justify-center gap-4 mt-auto">
        {linkedinUrl && linkedinUrl !== "#" && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaGithub size={22} />
          </a>
        )}
      </div>
    </div>
  );
}
