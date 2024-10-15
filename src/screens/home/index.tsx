import { Header } from "@components/Header";

import { Card } from "@components/Card";

import { Container } from "./styles";
import { View } from "react-native";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";

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

      <View style={{ marginTop: 40 }}>
        <Typography fontSize="title_sm" style={{ marginBottom: 8 }}>
          Meals
        </Typography>

        <Button
          title="Add meal"
          icon={<Plus size={18} color="white" />}
          type="solid"
          onPress={() => console.log('Button clicked')}
        />
      </View>
    </Container>
  );
}
