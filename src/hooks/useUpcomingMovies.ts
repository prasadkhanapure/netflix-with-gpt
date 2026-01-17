import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const response = await data.json();
    dispatch(addUpcomingMovies(response.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useUpcomingMovies;
