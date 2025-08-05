import { Link } from "react-router-dom";
import CardCounterLogo from "../assets/CardCounterLogo.svg";

const navs = [
  { label: "Play (View Rules)", href: "/rules" },
  { label: "Edit Deck", href: "/edit" },
  { label: "View Deck", href: "/deck" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row gap-10 justify-center w-full h-full text-black bg-default rounded">
      <Link to="/" className="flex justify-center rounded hover:bg-offdefault">
        <img src={CardCounterLogo} className="w-60 self-center" />
      </Link>
      {navs.map((nav, i) => (
        <Link
          key={i}
          to={nav.href}
          className="flex-row font-serif text-3xl self-center justify-center rounded text-white hover:text-niceorange p-2 w-auto"
        >
          {nav.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
