import CardCounterLogo from "../assets/CardCounterLogo.svg";
import design from "../assets/design.svg";

const Home: React.FC = () => {
  return (
    <div className="w-screen h-full">
      <h1 className="flex w-full items-center justify-center pt-15 font-serif text-7xl text-black">WELCOME</h1>
      <img src={design} className="flex pr-10 pl-10 pt-30 pb-30" />
      <img src={CardCounterLogo} className="flex w-full items-center justify-center pl-30 pr-30 pt-10 pb-52" />
    </div>
  );
};

export default Home;
