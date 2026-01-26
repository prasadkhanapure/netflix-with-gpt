import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSlice";
import { useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const { id, email, user_metadata } = session.user;

        dispatch(
          addUser({
            uid: id,
            email,
            displayName: user_metadata?.full_name ?? null,
            photoURL: null,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      <div className="flex p-2 justify-between">
        <button
          className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          GPT Search
        </button>
      </div>
    </div>
  );
};
export default Header;
