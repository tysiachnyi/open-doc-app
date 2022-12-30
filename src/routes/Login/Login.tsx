import axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const cookies = new Cookies();
    const configuration = {
      method: "post",
      url: "http://localhost:7777/api/auth/login",
      data: {
        email,
        password,
      },
    };
    try {
      e.preventDefault();
      const { data } = await axios(configuration);
      cookies.set("TOKEN", data.token, {
        path: "/",
      });
      window.location.href = "/auth";
      setLogin(true);
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col items-center justify-center w-1/2 p-8 bg-white rounded shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold">Login</h1>
        {login && (
          <p className="text-green-600">You Are Logined Successfully</p>
        )}
        <div className="flex flex-col w-full mt-4">
          <label htmlFor="email">Email</label>
          <input
            className="p-2 border rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full mt-4">
          <label htmlFor="password">Password</label>
          <input
            className="p-2 border rounded"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          type="submit"
          disabled={loading}
        >
          Login
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
