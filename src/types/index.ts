export interface FormValidationError {
  email: string;
  password: string;
  name?: string | undefined;
}

export interface VideoTitleInterface {
  title: string;
  overview: string;
}

export interface MovieCardProps {
  posterPath?: string | null;
}

export interface Movie {
  id: number;
  poster_path: string | null;
  type?: string;
}

export interface MovieListProps {
  title: string;
  movies: Movie[];
}
