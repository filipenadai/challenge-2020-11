import React, { useCallback, useRef, useState } from 'react';
import { KeyboardAvoidingView, FlatList } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';

import { Container } from './styles';
import api from '../../services/api';
import { API_KEY } from '../../config/constants';

interface Movie {
  Title: string;
  Year: string;
  imbdID: string;
  Poster: string;
}

interface SearchForm {
  search: string;
}

const Movies: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSubmitSearch = useCallback(async (data: SearchForm) => {
    const moviesData = await api.get('/', {
      params: {
        apikey: API_KEY,
        s: data.search,
      },
    });
    setMovies(moviesData.data.Search);
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" enabled={false}>
      <Container>
        <Form
          style={{ width: '100%' }}
          ref={formRef}
          onSubmit={handleSubmitSearch}
        >
          <Input name="search" />
          <Button onPress={() => formRef.current?.submitForm()}>Buscar</Button>
        </Form>
        {movies.length > 0 && (
          <FlatList
            data={movies}
            keyExtractor={movie => movie.imbdID}
            renderItem={({ item }) => (
              <Card
                key={item.imbdID}
                movieTitle={item.Title}
                poster={item.Poster}
                year={item.Year}
              />
            )}
          />
        )}
        <Button onPress={() => navigation.navigate('StaredMovies')}>
          Ver Favoritos
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Movies;
