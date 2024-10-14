import { TextProps } from "react-native";
import * as T from "./types";

import { Container } from "./styles";

export type TypographyStyles = {
  textAlign?: T.TextAlign;
  fontFamily?: T.FontFamily;
  lineHeight?: T.LineHeight;
  fontSize?: T.FontSizes;
  color?: T.Colors;
};

type TypographyProps = TextProps & TypographyStyles;

export function Typography({ ...props }: TypographyProps) {

  // Renders
  return (
    <Container {...props}>
      {props.children}
    </Container>
  );
}
