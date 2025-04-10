import autoRetrato from "../../assets/autoRetratoMinimalista-Photoroom.png";
import { Download } from "lucide-react";
import { Phone } from "lucide-react";
import Midias from "./Midias";

const SobreMim: React.FC = () => {
  return (
    <div className="relative aspect-[2/1] h-[92vh]  overflow-y-hidden max-w-screen">
      <div className=" w-2/3 items-center justify-center flex mt-[28vh]">
        <div className="w-8/10 max-w-[600px]">
          <p className="text-xl text-dracula-gray">Olá, eu sou</p>
          <h1 className="text-4xl mb-4 font-black text-dracula-text">
            Arthur Andrade
          </h1>
          <p className="text-xl text-dracula-gray">
            Desenvolvedor Front-end & apaixonado por criar experiências web
            incríveis.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <button className=" px-4 py-2 bg-dracula-headerCard text-dracula-text cursor-pointer rounded-lg hover:bg-dracula-gray transition-colors duration-300 items-center flex">
              Baixar CV
              <Download className="inline ml-2" size={16} color="#f8f8f2" />
            </button>
            <button className=" px-4 py-2 bg-dracula-headerCard text-dracula-text cursor-pointer rounded-lg hover:bg-dracula-gray transition-colors duration-300 items-center flex">
              Entre em contato
              <Phone className="inline ml-2" size={16} color="#f8f8f2" />
            </button>
          </div>
          <div className="flex mt-4">
            <Midias />
          </div>
        </div>
      </div>
      <img
        src={autoRetrato}
        alt="Minha foto"
        className="absolute h-[90vh] -bottom-0 left-[45%] object-cover overflow-hidden "
      />
    </div>
  );
};

export default SobreMim;
