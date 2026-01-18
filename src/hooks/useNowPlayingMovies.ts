import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store: any) => store.movies.nowPlayingMovies,
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const response = await data.json();

    dispatch(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    if (nowPlayingMovies && nowPlayingMovies.length > 0) return;

    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
