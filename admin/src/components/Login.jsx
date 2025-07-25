import axios from "axios";
import React, { useRef } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      // setEmail(emailRef.current.value);
      // setPassword(passwordRef.current.value);

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address:
            </p>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              ref={emailRef}
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password:</p>
            <input
              type="password"
              required
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              ref={passwordRef}
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-black text-white mt-2 w-full py-2 px-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
