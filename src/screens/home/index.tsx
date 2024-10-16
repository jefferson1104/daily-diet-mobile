import { View, SectionList } from "react-native";
import { Plus } from "phosphor-react-native";

import { Header } from "@components/Header";
import { Card } from "@components/Card";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";

import { Container } from "./styles";

export function HomePage() {
  // Constants
  const meals = [
    {
      title: '12.08.24',
      data: [
        { id: '1', hour: '12:00', description: 'X-Salad', isOnTheDiet: true },
        { id: '2', hour: '19:00', description: 'Cesar Salad', isOnTheDiet: true },
      ],
    },
    {
      title: '13.08.24',
      data: [
        { id: '2', hour: '10:00', description: 'X-Bacon', isOnTheDiet: false },
      ],
    },
  ];

  // Renders
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
          title="Add Meal"
          icon={<Plus size={18} color="white" />}
          type="solid"
          onPress={() => console.log('Button clicked')}
        />
      </View>

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <Typography fontSize="title_sm" fontFamily="bold" color="gray_1" style={{ marginVertical: 16 }}>
            {title}
          </Typography>
        )}
        renderItem={({ item }) => (
          <Meal
            key={item.id}
            id={item.id}
            hour={item.hour}
            description={item.description}
            isOnTheDiet={item.isOnTheDiet}
            onPress={() => console.log('Meal clicked')}
          />
        )}
        style={{ marginBottom: 32 }}
        contentContainerStyle={
          meals.length === 0 && {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
        ListEmptyComponent={() => (
          <>
            <Typography>
              No meals registered yet
            </Typography>
            <Typography>
              lets start by adding a new meal
            </Typography>
          </>
        )}
      />
    </Container>
  );
}
