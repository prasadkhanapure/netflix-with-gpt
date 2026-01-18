import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector(
    (store: any) => store.movies.UpcomingMovies,
  );

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const response = await data.json();
    dispatch(addUpcomingMovies(response.results));
  };

  useEffect(() => {
    if (UpcomingMovies && UpcomingMovies.length > 0) return;

    getTopRatedMovies();
  }, []);
};

export default useUpcomingMovies;
