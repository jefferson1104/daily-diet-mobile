import { useState, useCallback } from 'react';
import { SectionList, View } from 'react-native';
import { Plus } from 'phosphor-react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Meal } from '@components/Meal';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Typography } from '@components/Typography';

import { mealsGetAll } from '@storage/meal/mealGetAll';

import { MealDTO } from '@dtos/MealDTO';

import { statsSorter } from '@utils/statistics';
import { mealsList } from '@utils/lists';

import { Container } from './styles';

interface Meals {
  date: string;
  data: MealDTO[];
};

interface Statistic {
  percentage: string;
  isMealsOnTheDiet: boolean;
};

export function HomeScreen() {
  // Hooks
  const navigation = useNavigation();

  // States
  const [meals, setMeals] = useState<Meals[]>([]);
  const [statistic, setStatistic] = useState<Statistic>();

  // Methods
  function handleGoStatistic() {
		navigation.navigate('statistic');
	};

  function handleGoRegisterNewMeal() {
		navigation.navigate('register')
	};

  function handleGoMeal(id: string) {
		navigation.navigate('meal', { id })
	};

  async function fetchMeals() {
		try {
			const data = await mealsGetAll()

			// fetching sorted meals
			const meals = mealsList(data)

			const { percentage, mealsOnTheDiet, mealsOutOnDiet } =
				statsSorter(data)

			const isMealsOnTheDiet =
				mealsOnTheDiet >= mealsOutOnDiet ? true : false

			const statistics = {
				percentage,
				isMealsOnTheDiet,
			}

			// Updating the state
			setStatistic(statistics)

			setMeals(meals)
		} catch (error) {
			console.log(error)
		}
	};

  // LifeCycles
  useFocusEffect(
		useCallback(() => {
			fetchMeals()
		}, []),
	);

  // Renders
  return (
    <Container>
      <Header />

      {statistic && (
				<Card
					title={statistic.percentage}
					subtitle={`of meals ${
						statistic.isMealsOnTheDiet ? 'within' : 'outside'
					} the diet`}
					background={statistic.isMealsOnTheDiet ? 'green' : 'red'}
					onPress={handleGoStatistic}
				/>
			)}

      <View style={{ marginTop: 40 }}>
        <Typography fontSize="title_sm" style={{ marginBottom: 8 }}>
          Meals
        </Typography>

        <Button
          title="Add Meal"
          icon={<Plus size={18} color="white" />}
          activeOpacity={0.5}
          onPress={handleGoRegisterNewMeal}
        />
      </View>

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { date } }) => (
          <Typography
						fontSize="title_sm"
						fontFamily="bold"
						color="gray_1"
						style={{ marginBottom: 8, marginTop: 32 }}
					>
						{date}
					</Typography>
        )}
        renderItem={({ item }) => (
          <Meal
            key={item.id}
            id={item.id}
            hour={item.hour}
            description={item.name}
            isOnTheDiet={item.isOnTheDiet}
            onPress={() => handleGoMeal(item.id)}
          />
        )}
        style={{ marginVertical: 32 }}
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
              lets start by adding a new meal?
            </Typography>
          </>
        )}
      />
    </Container>
  );
}
