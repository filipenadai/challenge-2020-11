import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';

interface ContainerProps extends RectButtonProperties {
  isStared: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  background: #fff;
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
  margin: 10px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-top: 16px;
  text-align: center;
  flex-wrap: wrap;
  font-size: 20px;
  color: #2f3640;
  font-family: 'Ubuntu-Bold';
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #2f3640;
  font-family: 'Ubuntu-Regular';
  margin: 0 10px 20px;
`;
