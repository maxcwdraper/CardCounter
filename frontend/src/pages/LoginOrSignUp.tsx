import { Link } from "react-router-dom";

const LoginOrSignUp: React.FC = () => {
  return (
    <div className="flex w-full h-198 items-center justify-around">
      <Link to="/login" className="p-10 border bg-default text-white hover:text-niceorange">
        Login
      </Link>
      <Link to="/signup" className="p-10 border bg-default text-white hover:text-niceorange">
        Sign Up
      </Link>
    </div>
  );
};

export default LoginOrSignUp;
