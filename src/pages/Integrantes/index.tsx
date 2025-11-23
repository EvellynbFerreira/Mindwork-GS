import { MemberCard } from "../../components/Card/MemberCard";
import { TEAM_MEMBERS } from "../../data/integrantes";

export default function Integrantes() {
  return (
    <main className="min-h-screen flex flex-col items-center pb-20 bg-gray-50 text-gray-900">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">

        <h1 className="text-3xl font-extrabold mb-12 text-center">
          Nossa Equipe MindWork
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </section>
      </div>
    </main>
  );
}
