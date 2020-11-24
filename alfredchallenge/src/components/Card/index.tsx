import React from 'react';

import { useStar } from '../../hooks/star';

import { Container, MoviePoster, Title, Description } from './styles';

interface CardData {
  movie: {
    movieTitle: string;
    year: string;
    poster: string;
    imdbID: string;
  };
}

const Card: React.FC<CardData> = ({ movie, ...rest }) => {
  const { starMovie, movies } = useStar();

  return (
    <Container
      {...rest}
      isStared={movies.some(movieStared => movieStared.imdbID === movie.imdbID)}
      onPress={() => starMovie(movie)}
    >
      <MoviePoster
        resizeMode="contain"
        source={{
          uri: movie.poster,
        }}
      />
      <Title>{movie.movieTitle}</Title>
      <Description>Lançamento {movie.year}</Description>
    </Container>
  );
};

export default Card;
