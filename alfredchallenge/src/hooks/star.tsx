export interface StarContextData {
  Title: string;
  Year: string;
  imbdID: string;
  Poster: string;
}

interface Movies {
  staredMovies: StarContextData[];
}

// const StarContext = createContext({} as StarContextData);

// export const StarProvider: React.FC = () => {
//   const [movies, setMovies] = useState<Movies>({} as Movies);
//   const actualMovies = await AsyncStorage.getItem('@MyMovies:movies');

//   const setMovies = useCallback(async ({ Title, Year, Poster, imbdID }: StarContextData) => {
//     let addMoviesToStorage = [];

//     const newMovie = {
//       Title,
//       Year,
//       Poster,
//       imbdID,
//     };

//     if (actualMovies) {
//       const parsedActualMovies = JSON.parse(actualMovies);
//       addMoviesToStorage = parsedActualMovies;
//     }

//     addMoviesToStorage.push

//       const parsedMovies = JSON.parse(addNewMovies);
//       await AsyncStorage.setItem('@MyMovies:movies'));
//   }, []);

//   return (

//   )

// }
