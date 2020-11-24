import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 450px;
  background: #fff;
  margin-top: 8px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #999;
`;

export const MoviePoster = styled.Image`
  flex: 1;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Title = styled.Text`
  margin-top: 16px;
  max-width: 350px;
  height: 60px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #2f3640;
  font-family: 'Ubuntu-Bold';
`;

export const Description = styled.Text`
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #2f3640;
  font-family: 'Ubuntu-Regular';
`;
