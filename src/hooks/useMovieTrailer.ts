import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store: any) => store.movies.trailerVideo);

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
    if (trailerVideo && trailerVideo.length > 0) return;

    getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;
