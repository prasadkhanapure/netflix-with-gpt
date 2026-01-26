import { useState, useRef } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { isValidSignInFormData } from "../utils/validate";
import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const signUpUser = async (email: string, password: string, name: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    navigate("/browse");
  };

  const signInUser = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    navigate("/browse");
  };

  const handleSignInClick = () => {
    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    const message = isValidSignInFormData({ email, password, name });
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      signUpUser(email, password, name);
    } else {
      signInUser(email, password);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="" src={BG_URL} alt="logo-image" />
      </div>
      <form
        onSubmit={(evt) => evt.preventDefault()}
        className="absolute w-full md:w-4/12 text-white bg-black left-0 right-0 mx-auto my-30 p-12 opacity-85"
      >
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
          ref={emailRef}
          className="w-full text-white bg-gray-800 p-4 my-4"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={passwordRef}
          className="w-full text-white bg-gray-800 p-4 my-4"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full rounded-lg bg-red-600 font-bold"
          onClick={handleSignInClick}
        >
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
