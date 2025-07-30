import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const App: React.FC = () => {
  return (
    <div className="w-dvw min-h-screen">
      <div className="w-screen h-20">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default App;
