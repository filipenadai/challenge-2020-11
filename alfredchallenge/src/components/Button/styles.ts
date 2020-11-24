import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #fbc531;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

export const ButtonText = styled.Text`
  font-family: 'Ubuntu-Bold';
  color: #2f3640;
  font-size: 20px;
`;
