import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <footer className="bg-[#1C1835] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          
          {/* Coluna 1: MindWork */}
          <div>
            <h3 className="text-xl font-bold mb-4">MindWork</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-purple-400 transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/integrantes" className="hover:text-purple-400 transition">
                  Nossa Equipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Recursos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/softskills" className="hover:text-purple-400 transition">
                  Soft Skills
                </Link>
              </li>
              <li>
                <Link to="/bemestar" className="hover:text-purple-400 transition">
                  Bem-Estar
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-purple-400 transition">
                  FAQ / Contato
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-purple-400 transition">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-purple-400 transition">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: ODS Apoiados */}
          <div>
            <h3 className="text-xl font-bold mb-4">ODS Apoiados</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Saúde e Bem-Estar (ODS 3)</li>
              <li className="text-gray-300">
                Trabalho Decente e Crescimento Econômico (ODS 8)
              </li>
              <li className="text-gray-300">
                Redução das Desigualdades (ODS 10)
              </li>
            </ul>
          </div>
        </div>
        {/* Linha de Copyright */}
        <div className="border-t border-gray-700 py-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MindWork. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
