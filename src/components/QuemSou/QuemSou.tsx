import foto from "../../assets/foto.jpg";

const QuemSou: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-dracula-headerCard min-h-screen md:min-h-auto">
      <div className="flex flex-col md:flex-row items-center  md:space-x-6 p-4 max-w-[1600px] mt-6">
        <div className="w-50 h-50 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 ">
          <img
            src={foto}
            alt="Minha foto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left w-8/10 ">
          <h1 className="lg:text-3xl font-bold text-dracula-text">
            Arthur Andrade Mendes Fernandes
          </h1>
          <p className="mt-2 text-dracula-secondText lg:text-xl">
            Graduando em Engenharia de Software pela Universidade Federal de
            Goiás (UFG), com foco no desenvolvimento Front-end. Atualmente,
            trabalho como desenvolvedor web, especializado em React e
            TypeScript.
          </p>
          <p className="mt-2 text-dracula-secondText lg:text-xl">
            Tenho experiência em projetos variados, desde iniciativas autônomas
            até trabalhos realizados na ELO Júnior, UFG e na Nascimento Soluções
            de Tecnologia. Minha atuação inclui o desenvolvimento de SPAs, sites
            estáticos, softwares de administração e venda, aplicações mobile,
            sempre buscando performance, acessibilidade e boas práticas de
            código.
          </p>
          <p className="mt-2 text-dracula-secondText lg:text-xl">
            Estou sempre aprimorando minhas habilidades e explorando novas
            tecnologias para criar interfaces eficientes e intuitivas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuemSou;
