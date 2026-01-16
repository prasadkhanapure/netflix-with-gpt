import { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="logo-image" />
      </div>
      <form className="absolute w-full md:w-4/12 text-white bg-black left-0 right-0 mx-auto my-30 p-12 opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="w-full text-white bg-gray-800 p-4 my-4"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="w-full text-white bg-gray-800 p-4 my-4"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-full text-white bg-gray-800 p-4 my-4"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 w-full rounded-lg bg-red-600 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Signed Up, Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
