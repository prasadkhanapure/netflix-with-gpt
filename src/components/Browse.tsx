import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store: any) => store.gpt.showGptSearch);


  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondoryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
