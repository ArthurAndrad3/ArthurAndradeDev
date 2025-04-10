import React from "react";
import logo from "../../assets/react-svgrepo-com.svg";
import PagesButton from "./PagesButton";

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[60px] shadow-lg bg-dracula-headerCard">
      <header className="w-screen h-[60px] bg-dracula-headerCard flex justify-between items-center gap-10  max-w-[1600px]">
        <img src={logo} alt="Logo" className="h-9/10 flex ml-5" />
        <div className="flex items-center gap-8 h-[100px] mr-5">
          <PagesButton label="Home" href="#home" />
          <PagesButton label="Sobre mim" href="#quemSou" />
          <PagesButton label="Projetos" href="#projetos" />
          <PagesButton label="Contato" href="#contato" />
        </div>
      </header>
    </div>
  );
};

export default Header;
