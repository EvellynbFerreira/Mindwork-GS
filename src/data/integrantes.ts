import fotoHenrique from "../assets/img/henrique.jpeg";
import fotoPedro from "../assets/img/pedro.jpeg";
import fotoEvellyn from "../assets/img/Imagem do WhatsApp de 2025-11-23 à(s) 22.05.31_b9e467ec.jpg";

export type Integrante = {
  nome: string;
  turma: string;
  linkedin: string;
  github: string;
  foto: string;
};


export const TEAM_MEMBERS = [
  {
    initials: "P1",
    name: "Evellyn Barbosa Ferreira",
    rm: "RM562744",
    class: "1TDSPW",
    githubUrl: "https://github.com/EvellynbFerreira",
    linkedinUrl:
      "https://www.linkedin.com/in/evellyn-barbosa-ferreira-8911122a5/",
    foto: fotoEvellyn, 
  },
  {
    initials: "P2",
    name: "Henrique Sinkevicius Maran",
    rm: "RM562977",
    class: "1TDSPW",
    githubUrl: "https://github.com/HenriqueSinkeviciusMaran",
    linkedinUrl: "https://www.linkedin.com/in/henrique-sinkevicius-maran-99962a25a/",
    foto: fotoHenrique,
  },
  {
    initials: "P3",
    name: "Pedro Henrique Crus Lemos",
    rm: "RM565605",
    class: "1TDSPW",
    githubUrl: "https://github.com/PedroCLH2",
    linkedinUrl: "https://www.linkedin.com/in/pedro-crus-0707b7360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
    foto: fotoPedro,
  },
];
