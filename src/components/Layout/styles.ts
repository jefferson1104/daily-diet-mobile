import styled from 'styled-components/native';
import { LayoutColor } from '.';

export const Container = styled.View<LayoutColor>`
  flex: 1;
  background-color: ${({ theme, background }) => {
    switch(background) {
      case 'green': {
        return theme.colors.brand.green_light;
      }
      case 'gray': {
        return theme.colors.base.gray_5;
      }
      case 'red': {
        return theme.colors.brand.red_light;
      }
    }
  }};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 50px 24px 20px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Content = styled.View`
  flex: 1;
  align-items: center;

  padding: 40px 24px;

  background-color: ${({ theme }) => theme.colors.base.gray_7};

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
