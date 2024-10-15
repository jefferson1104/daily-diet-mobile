import { ViewProps } from 'react-native';

import { Typography } from "@components/Typography";

import { FontSizeTitle } from '@components/Typography/types';

import { ButtonToStaticLeft, ButtonToStaticRight, Container, IconArrowLeft, IconArrowUpRight } from "./styles";

export type TextSize = {
  titleFontSize?: FontSizeTitle;
};

export type CardColor = {
  background?: 'gray' | 'green' | 'red';
};

export type ButtonFloatProps = {
  iconPosition?: 'left' | 'right';
};

interface CardProps extends ViewProps, CardColor, TextSize, ButtonFloatProps {
  title: string;
  subtitle: string;
  showIconButton?: boolean;
  onPress?: () => void;
};

export function Card({
  title,
  subtitle,
  showIconButton = true,
  onPress,
  titleFontSize = 'title_lg',
  iconPosition = 'right',
  background = 'gray',
  ...rest
}: CardProps) {

  // Renders
  return (
    <Container {...rest} background={background}>
      {showIconButton && (
        iconPosition === 'left' ? (
          <ButtonToStaticLeft onPress={onPress}>
            <IconArrowLeft background={background} />
          </ButtonToStaticLeft>
        ) : (
          <ButtonToStaticRight onPress={onPress}>
            <IconArrowUpRight background={background} />
          </ButtonToStaticRight>
        )
      )}

      <Typography fontSize={titleFontSize} lineHeight="lg" fontFamily="bold">
        {title}
      </Typography>
      <Typography color="gray_2" fontSize="body_sm" textAlign="center">
        {subtitle}
      </Typography>
    </Container>
  )
}
