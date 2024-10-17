import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Card } from '@components/Card';
import { Typography } from '@components/Typography';
import { Layout } from '@components/Layout';

import { mealsGetAll } from '@storage/meal/mealGetAll';

import { statsSorter } from '@utils/statistics';

import { Container, Row } from './styles';

interface Statistic {
	percentage: string;
	bestSequenceOfDishesWithinTheDiet: string;
	registeredMeals: string;
	mealsOnTheDiet: string;
	mealsOutOnDiet: string;
};

export type StatisticBackground = {
	bg: 'green' | 'red'
}

export function StatisticsScreen() {
  // Hooks
  const navigation = useNavigation();

  // States
  const [statistic, setStatistic] = useState<Statistic>();
	const [isMealsOnTheDiet, setIsMealsOnTheDiet] = useState(true);

  // Methods
  function handleBackToHome() {
		navigation.navigate('home')
	};

	async function handleReceiveMeal() {
		try {
			const data = await mealsGetAll()

			const statistic = statsSorter(data)

			const isMealsOnTheDiet =
				statistic.mealsOnTheDiet >= statistic.mealsOutOnDiet
					? true
					: false

			setIsMealsOnTheDiet(isMealsOnTheDiet)

			setStatistic(statistic)
		} catch (error) {
			console.log(error)
		}
	};

  // LifeCycles
  useFocusEffect(
		useCallback(() => {
			handleReceiveMeal()
		}, []),
	);

  // Renders
  return (
    <Container bg={isMealsOnTheDiet ? 'green' : 'red'}>
      {statistic && (
        <Layout
          background={isMealsOnTheDiet ? 'green' : 'red'}
          header={
            <Card
              title={statistic.percentage}
              subtitle={`of meals ${isMealsOnTheDiet ? 'within' : 'outside'} the diet`}
              background={isMealsOnTheDiet ? 'green' : 'red'}
              iconPosition="left"
              onPress={handleBackToHome}
            />
          }
        >
          <Typography fontFamily="bold" fontSize="title_xs" style={{ marginBottom: 20 }}>
            General Statistics
          </Typography>

          <Row>
            <Card
              background="gray"
              title={statistic.bestSequenceOfDishesWithinTheDiet}
              subtitle="Best sequence of dishes for the diet"
              showIconButton={false}
            />
          </Row>

          <Row>
            <Card
              background="gray"
              title={statistic.registeredMeals}
              subtitle="Meals registered"
              showIconButton={false}
            />
          </Row>

          <Row>
            <Card
              background="green"
              title={statistic.mealsOnTheDiet}
              subtitle="Meals within the diet."
              showIconButton={false}
              style={{ width: '48%' }}
            />

            <Card
              background="red"
              title={statistic.mealsOutOnDiet}
              subtitle="Meals outside the diet."
              showIconButton={false}
              style={{ width: '48%' }}
            />
          </Row>

        </Layout>
      )}
    </Container>
  );
}
