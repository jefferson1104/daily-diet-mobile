import { Header } from "@components/Header";

import { Container } from "./styles";
import { Typography } from "@components/Typography";

export function HomePage() {
  return (
    <Container>
      <Header />
      <Typography>Hello World!</Typography>
      <Typography fontFamily="bold">Hello World!</Typography>
    </Container>
  );
}
