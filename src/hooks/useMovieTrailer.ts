import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const response = await result.json();

    const filteredTrailers = response.results.filter(
      (item: { type: string }) => item.type === "Trailer",
    );
    const trailer = filteredTrailers.length
      ? filteredTrailers[0]
      : response.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
