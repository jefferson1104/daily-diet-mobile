import styled from 'styled-components/native';

import { Typography } from '@components/Typography';

import { ButtonType } from '.';

export const Container = styled.TouchableOpacity<ButtonType>`
  width: 100%;
  height: 50px;
  padding: 16px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.base.gray_1};

  background-color: ${({ theme, type, isActive }) => {
    if (type === 'solid') return isActive ? theme.colors.base.gray_1 : theme.colors.base.gray_2;

    if (type === 'outline') return isActive ? 'transparent' : theme.colors.base.gray_5;
  }};
`;

export const Title = styled(Typography).attrs<ButtonType>(({ type }) => ({
  fontFamily: 'bold',
  color: type === 'solid' ? 'white' : 'gray_1',
}))<ButtonType>`
  margin: 0 12px;
`;
