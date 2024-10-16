import React from "react";
import { View } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

import { Typography } from "@components/Typography";

import { Container, Header, Content, BackButton } from "./styles";

export interface LayoutColor {
  background: 'green' | 'gray' | 'red';
};

interface LayoutProps extends LayoutColor {
  header: JSX.Element | string;
  children: React.ReactNode;
  onPressBack?: () => void;
};

export function Layout({ header, children, onPressBack, background = 'gray' }: LayoutProps) {
  // Renders
  return (
    <Container background={background}>
      <Header>
        {typeof header === 'string' ? (
          <>
            <BackButton onPress={onPressBack}>
              <ArrowLeft />
            </BackButton>
            <Typography
              fontFamily="bold"
              fontSize="title_sm"
              lineHeight="lg"
              textAlign="center"
              style={{ width: '60%'}}
            >
              {header}
            </Typography>
            <View />
          </>
        ) : (
          <>
            {header}
          </>
        )}
      </Header>
      <Content>
        {children}
      </Content>
    </Container>
  );
}
