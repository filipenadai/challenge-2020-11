import React from 'react';
import { KeyboardAvoidingView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Card from '../../components/Card';

import { useStar } from '../../hooks/star';

import { Container } from './styles';

const Movies: React.FC = () => {
  const navigation = useNavigation();
  const { movies } = useStar();

  return (
    <Container>
      {movies && (
        <FlatList
          style={{ width: '100%' }}
          data={movies}
          keyExtractor={movie => movie.imdbID}
          renderItem={({ item }) => (
            <Card
              movie={{
                imdbID: item.imdbID,
                movieTitle: item.movieTitle,
                poster: item.poster,
                year: item.year,
              }}
            />
          )}
        />
      )}
      <Button onPress={() => navigation.navigate('Movies')}>
        Voltar para busca
      </Button>
    </Container>
  );
};

export default Movies;
