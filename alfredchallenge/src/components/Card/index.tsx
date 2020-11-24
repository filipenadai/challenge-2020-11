import React from 'react';

import { Container, MoviePoster, Title, Description } from './styles';

interface CardData {
  movieTitle: string;
  year: string;
  poster: string;
}

const Card: React.FC<CardData> = ({ poster, movieTitle, year, ...rest }) => {
  return (
    <Container {...rest}>
      <MoviePoster
        source={{
          uri: poster,
        }}
      />
      <Title>{movieTitle}</Title>
      <Description>Lançamento {year}</Description>
    </Container>
  );
};

export default Card;
