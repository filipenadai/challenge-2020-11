import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export interface StarContextData {
  starMovie(data: Movie): void;
  movies: Movie[];
}

interface Movie {
  movieTitle: string;
  year: string;
  imdbID: string;
  poster: string;
}

const StarContext = createContext<StarContextData>({} as StarContextData);

export const StarProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getStaredMovies() {
      const actualMovies = await AsyncStorage.getItem('@MyMovies:movies');

      if (actualMovies) setMovies(JSON.parse(actualMovies));
    }

    getStaredMovies();
  }, []);

  const starMovie = useCallback(
    ({ movieTitle, imdbID, poster, year }) => {
      const newMovie = {
        movieTitle,
        imdbID,
        poster,
        year,
      };
      let setToStorage = [...movies];
      if (movies.find(movie => movie.imdbID === newMovie.imdbID)) {
        setToStorage = setToStorage.filter(
          movie => movie.imdbID !== newMovie.imdbID,
        );
      } else {
        setToStorage.push(newMovie);
      }

      AsyncStorage.setItem('@MyMovies:movies', JSON.stringify(setToStorage));
      setMovies(setToStorage);
    },
    [movies],
  );

  return (
    <StarContext.Provider value={{ starMovie, movies }}>
      {children}
    </StarContext.Provider>
  );
};

export function useStar(): StarContextData {
  const context = useContext(StarContext);

  if (!context) {
    throw new Error('useStar must be used within an StarProvider');
  }

  return context;
}
