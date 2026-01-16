import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-4 py-2 bg-linear-to-b from-black to-transparent z-1">
      <img className="w-40" src={LOGO_URL} alt="Logo" />
    </div>
  );
};

export default Header;
