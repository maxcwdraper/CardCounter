import { useState } from "react";

type FormData = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:8001/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Invalid username or password");
      }
      const result = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blinding p-6">
      <div className="w-full max-w-md bg-offblinding rounded-2xl shadow-lg p-6">
        <p className="text-2xl font-bold mb-6 text-center">Login</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offdefault"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offdefault"
            />
          </div>
          <button type="submit" className="w-full bg-default text-white py-2 px-4 rounded-lg hover:text-niceorange">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// const Login: React.FC = () => {
//   return (
//     <div className="flex-column w-full h-198 items-center justify-around">
//       <p className="text-center">Enter Login Info:</p>
//       <p className="text-center">Username:</p>
//       <div className="flex w-full items-center">
//         <input className="border self-center text-center"></input>
//       </div>
//       <p className="text-center">Password:</p>
//       <input type="password" className="border w-full self-center text-center"></input>
//     </div>
//   );
// };

export default Login;
