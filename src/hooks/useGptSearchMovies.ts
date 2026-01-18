import { useDispatch } from "react-redux";
import { addSearchedMovie } from "../store/gptSlice";
import { API_OPTIONS } from "../utils/constants";
import openAi from "../utils/openai";

const normalizeTitle = (value: string) => value.trim().toLowerCase();

const useGptSearchMovies = () => {
  const dispatch = useDispatch();

  const getSearchMovie = async (movieTitle: string) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const response = await data.json();
    return response.results;
  };

  const searchMovies = async (searchedText: string) => {
    if (!searchedText) return;
    const normalizedQuery = normalizeTitle(searchedText);

    try {
      const gptQuery = `Return exactly 10 movie names, comma separated. No explanations. ${normalizedQuery}`;

      const gptResponse = await openAi.responses.create({
        model: "gpt-4.1-mini",
        input: gptQuery,
        max_output_tokens: 50,
      });

      if (!gptResponse) {
        throw new Error(`Something wrong with the GPT API`);
      }

      const gptMoviesTitle = gptResponse?.output_text?.split(",");
      const tmdbSearchRequests = gptMoviesTitle.map((movieTitle: string) =>
        getSearchMovie(movieTitle),
      );

      const gptSearchedMovies = await Promise.all(tmdbSearchRequests);

      const matchedMovies = gptMoviesTitle.map(
        (gptTitle: string, index: number) => {
          const tmdbResults = gptSearchedMovies[index];

          const match = tmdbResults.find(
            (movie: any) =>
              normalizeTitle(movie.title) === normalizeTitle(gptTitle),
          );

          return match;
        },
      );

      dispatch(addSearchedMovie(matchedMovies));
    } catch (err) {
      console.error(err);
    }
  };

  return { searchMovies };
};

export default useGptSearchMovies;
