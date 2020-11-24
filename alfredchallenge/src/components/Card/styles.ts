import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

interface ContainerProps extends RectButtonProperties {
  isStared: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  background: #fff;
  width: 100%;
  margin: 4px 0;
  border-radius: 10px;
  border-width: 2px;
  border-color: #999;

  ${props =>
    props.isStared &&
    css`
      background: #fbc531;
    `}
`;

export const MoviePoster = styled.Image`
  min-height: 450px;
  margin-top: 25px;
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-top: 16px;
  height: 60px;
  text-align: center;
  font-size: 20px;
  color: #2f3640;
  font-family: 'Ubuntu-Bold';
`;

export const Description = styled.Text`
  height: 40px;
  text-align: center;
  font-size: 18px;
  color: #2f3640;
  font-family: 'Ubuntu-Regular';
`;
