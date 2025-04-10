import Midias from "../SobreMim/Midias";
import autoRetrato from "../../assets/autoRetratoMinimalista-Photoroom.png";
import { Download, Phone } from "lucide-react";

const SobreMimMobile: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen mt-6">
        <Midias />
      </div>
      <div className="flex flex-col items-center justify-center w-screen mt-6">
        <img
          src={autoRetrato}
          alt="Minha foto"
          className="h-[43vh] object-cover overflow-hidden rounded-full"
        />
      </div>
      <div className=" w-screen items-center justify-center flex  h-[48vh]">
        <div className="w-8/10 max-w-[600px] ">
          <p className="text-xl text-dracula-gray">Olá, eu sou</p>
          <h1 className="text-4xl mb-4 font-black text-dracula-text">
            Arthur Andrade
          </h1>
          <p className="text-xl text-dracula-gray">
            Desenvolvedor Front-end & apaixonado por criar experiências web
            incríveis.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <button className=" px-4 py-2 bg-dracula-headerCard text-sm  text-dracula-text cursor-pointer rounded-lg hover:bg-dracula-gray transition-colors duration-300 items-center flex">
              Baixar CV
              <Download className="inline ml-2" size={16} color="#f8f8f2" />
            </button>
            <button className=" px-4 py-2 bg-dracula-headerCard text-sm text-dracula-text cursor-pointer rounded-lg hover:bg-dracula-gray transition-colors duration-300 items-center flex">
              Entre em contato
              <Phone className="inline ml-2" size={16} color="#f8f8f2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMimMobile;
