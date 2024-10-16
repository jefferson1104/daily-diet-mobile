import { Layout } from "@components/Layout";
import { Container, Row } from "./styles";
import { Card } from "@components/Card";
import { Typography } from "@components/Typography";

export function StatisticsPage() {
  // Renders
  return (
    <Container>
      <Layout
        onPressBack={() => console.log('Back')}
        background="green"
        header={
          <Card
            background="green"
            title="90,86%"
            subtitle="of meals within the diet"
            iconPosition="left"
            onPress={() => console.log('Back Card')}
          />
        }
      >
        <Typography fontFamily="bold" fontSize="title_xs" style={{ marginBottom: 20 }}>
          General Statistics
        </Typography>

        <Row>
          <Card
            background="gray"
            title="22"
            subtitle="Best sequence of dishes for the diet"
            showIconButton={false}
          />
        </Row>

        <Row>
          <Card
            background="gray"
            title="109"
            subtitle="Meals registered"
            showIconButton={false}
          />
        </Row>

        <Row>
          <Card
            background="green"
            title="99"
            subtitle="Meals within the diet."
            showIconButton={false}
            style={{ width: '48%' }}
          />

          <Card
            background="red"
            title="10"
            subtitle="Meals outside the diet."
            showIconButton={false}
            style={{ width: '48%' }}
          />
        </Row>

      </Layout>
    </Container>
  );
}
