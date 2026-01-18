import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      <div className="flex p-2">
        <button
          className="bg-purple-800 text-white px-4 py-2 m-2 rounded-lg"
          onClick={handleGptSearchClick}
        >
          GPT Search
        </button>
        {/* <img />
        <button></button> */}
      </div>
    </div>
  );
};
export default Header;
