import { useRef, useState } from "react";
import useGptSearchMovies from "../hooks/useGptSearchMovies";
import Spinner from "./Spinner";

const GptSearchBar = () => {
  const searchText = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { searchMovies } = useGptSearchMovies();

  const handleSearch = async () => {
    if (!searchText.current?.value) return;
    try {
      setIsLoading(true);
      await searchMovies(searchText.current.value);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(evt) => evt.preventDefault()}
      >
        <input
          className="col-span-9 p-4 m-4 bg-white"
          type="text"
          placeholder="What do you want to watch today?"
          ref={searchText}
        />
        <button
          onClick={handleSearch}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          disabled={isLoading}
        >
          {isLoading? <Spinner/>:"Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
