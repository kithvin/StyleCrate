import React from "react";
import { useAppContext } from "../context/AppContext"; // import global context
import toast from "react-hot-toast";

const Login = () => {
  // Access global context functions for setting user and toggling modal visibility
  const { setshowUserLogin, setUser, navigate } = useAppContext();

  // Local component states
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle form submission (login or register)
  const onSubmitHandler = async (event) => {
    event.preventDefault();

     setUser({
      email : "test@gmail.com",
      name :"Test User",
     })
    setshowUserLogin(false);
  };

  return (
    // Overlay background to darken page and allow modal dismissal on click
    <div
      onClick={() => setshowUserLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50"
    >
      {/* Login/Register form container - stop click propagation to avoid closing modal */}
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        {/* Form header */}
        <p className="text-2xl font-semibold m-auto">
          <span className="text-orange-500">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {/* Name input */}
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              type="text"
              required
            />
          </div>
        )}

        {/* Email input */}
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="email"
            required
          />
        </div>

        {/* Password input */}
        <div className="w-full ">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="password"
            required
          />
        </div>

        {/* Toggle between login and register modes */}
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-primary cursor-pointer mt-1"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-primary cursor-pointer"
            >
              click here
            </span>
          </p>
        )}

        {/* Submit button */}
        <button className="px-5 sm:px-7 py-3 bg-neutral-900 transition-all duration-200 text-white text-center font-medium w-full rounded-md cursor-pointer mt-1">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;