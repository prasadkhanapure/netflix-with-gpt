import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../hooks";

const SecondoryContainer = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store: any) => store.movies);

  return (
    <div className="bg-black">
      <div className="relative -mt-52 pl-12 z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondoryContainer;
