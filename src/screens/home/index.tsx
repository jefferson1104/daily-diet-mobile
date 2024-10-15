import { Header } from "@components/Header";

import { Card } from "@components/Card";

import { Container } from "./styles";

export function HomePage() {
  return (
    <Container>
      <Header />
      <Card
        title="90,86%"
        subtitle="of meals within the diet"
        background="green"
        iconPosition="right"
        onPress={() => console.log('Card clicked')}
      />
    </Container>
  );
}
