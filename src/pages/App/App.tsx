import Header from "../../components/Header/Header";
import SobreMim from "../../components/SobreMim/SobreMim";
import SobreMimMobile from "../../components/SoberMimMobile/SobreMimMobile";
import QuemSou from "../../components/QuemSou/QuemSou";

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <div
        className="items-center max-w-screen justify-center flex-col hidden xl:flex overflow-x-hidden"
        id="home"
      >
        <Header />
        <SobreMim />
      </div>
      <div className="xl:hidden flex flex-col items-center justify-center max-w-screen ">
        <SobreMimMobile />
      </div>
      <div id="quemSou">
        <QuemSou />
      </div>
    </div>
  );
};

export default App;
