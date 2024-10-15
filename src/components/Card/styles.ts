import styled from 'styled-components/native';
import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';

import { CardColor } from '.';

export const Container = styled.View<CardColor>`
  width: 100%;
  height: 102px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 16px;

  position: relative;

  background-color: ${({ theme, background }) => {
    const { colors } = theme;

    if (background === 'gray') return colors.base.gray_6;
    if (background === 'green') return colors.brand.green_light;
    if (background === 'red') return colors.brand.red_light;
  }};
`;

export const ButtonToStaticRight = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ButtonToStaticLeft = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const IconArrowUpRight = styled(ArrowUpRight).attrs<CardColor>(({ theme, background }) => ({
  size: 24,
  color: background === 'green'
    ? theme.colors.brand.green_dark
    : background === 'red'
      ? theme.colors.brand.red_dark
      : theme.colors.base.gray_1
}))<CardColor>``;

export const IconArrowLeft = styled(ArrowLeft).attrs<CardColor>(({ theme, background }) => ({
  size: 24,
  color: background === 'green'
    ? theme.colors.brand.green_dark
    : background === 'red'
      ? theme.colors.brand.red_dark
      : theme.colors.base.gray_1
}))<CardColor>``;
