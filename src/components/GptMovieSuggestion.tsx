import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const movieResults = useSelector((store: any) => store.gpt.movieResults);
  if (!movieResults) return null;

  return (
    <div className="p-4 m-4 text-white bg-black opacity-85">
      <div>
        <MovieList title="GPT Searched Movies" movies={movieResults} />
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
