import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

export type ButtonType = {
  type?: 'solid' | 'outline';
  isActive?: boolean;
};

export interface ButtonProps extends TouchableOpacityProps, ButtonType {
  title: string;
  icon?: React.ReactNode;
};

export function Button({
  title,
  icon,
  type = 'solid',
  isActive = true,
  ...rest
}: ButtonProps) {

  // Renders
  return (
    <Container {...rest} type={type} isActive={isActive} disabled={isActive ? false : true}>
      {icon && icon}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
