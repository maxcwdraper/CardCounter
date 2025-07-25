import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

const App: React.FC = () => {
  return (
    <div className="w-dvw min-h-screen">
      <div className="w-screen h-20">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
