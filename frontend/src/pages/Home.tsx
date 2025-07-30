import CardCounterLogo from "../assets/CardCounterLogo.svg";

const Home: React.FC = () => {
  return (
    <div className="w-screen h-full">
      <h1 className="flex w-full items-center justify-center pt-15 text-7xl text-black">WELCOME</h1>
      <img src={CardCounterLogo} className="flex w-full items-center justify-center p-72" />
    </div>
  );
};

export default Home;
