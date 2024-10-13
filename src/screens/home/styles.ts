import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.base.gray_7};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.base.gray_1};
  font-size: 24px;
`;
