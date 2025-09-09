import { useState } from "react";

type FormData = {
  username: string;
  full_name: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:8001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      setFormData({ username: "", full_name: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blinding p-6">
      <div className="w-full max-w-md bg-offblinding rounded-2xl shadow-lg p-6">
        <p className="text-2xl font-bold mb-6 text-center">Create New User</p>
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
            <label htmlFor="full_name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offdefault"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
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
          <button type="submit" className="w-full bg-default text-white py-2 px-4 rounded-lg hover:cursor-pointer hover:text-niceorange">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
