import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';
import { Layout } from '@components/Layout';
import { Modal } from '@components/Modal';
import { Typography } from '@components/Typography';

import { mealsGetAll } from '@storage/meal/mealGetAll';
import { mealRemove } from '@storage/meal/mealRemove';

import { MealDTO } from '@dtos/MealDTO';

import { Container, Row, Tag, Status, Content } from './styles';

type RouteParams = { id: string };

export type MealStatus = { isOnTheDiet: boolean };
export type MealBackground = { bg: 'green' | 'red' };

export function MealScreen() {
  // Hooks
  const navigation = useNavigation();
	const route = useRoute();

  // States
  const [meal, setMeal] = useState<MealDTO>();
  const [modalVisible, setModalVisible] = useState(false);

  // Constants
	const { id } = route.params as RouteParams;

  // Methods
	const alertError = (message: string) => Alert.alert('Meal', message);

	function handleBackToHome() {
		navigation.navigate('home')
	};

	function handleGoUpdateMeal(id: string) {
		navigation.navigate('update', { id })
	};

	async function fetchMeal() {
		try {
			const data = await mealsGetAll()

			const meal = data.filter((meal) => meal.id === id)[0]

			setMeal(meal)
		} catch (error) {
			alertError('Unable to view meal')
			console.log(error)
		}
	};

	async function handleMealRemove(id: string) {
		try {
			// Remove a refeição
			await mealRemove(id)

			// Volta para a página home
			handleBackToHome()
		} catch (error) {
			console.log(error)
		}
	};

	// LifeCycle
	useFocusEffect(
		useCallback(() => {
			fetchMeal()
		}, []),
	);

  // Renders
	return (
		<Container bg={meal?.isOnTheDiet ? 'green' : 'red'}>
			<Layout
				header="Meal"
				background={meal?.isOnTheDiet ? 'green' : 'red'}
				onPressBack={handleBackToHome}
			>
				<Content>
					<Row>
						<Typography
							fontSize="title_md"
							fontFamily="bold"
							lineHeight="lg"
							style={{ marginBottom: 8 }}
						>
							{meal?.name}
						</Typography>
						<Typography>{meal?.description}</Typography>
					</Row>
					<Row>
						<Typography
							fontSize="title_xs"
							fontFamily="bold"
							style={{ marginBottom: 8 }}
						>
							Date and time
						</Typography>
						<Typography>
							{meal?.date} at {meal?.hour}
						</Typography>
					</Row>
					<Row>
						{meal?.isOnTheDiet ? (
							<Tag>
								<Status
									isOnTheDiet={
										meal?.isOnTheDiet ? true : false
									}
								/>
								<Typography fontSize="body_sm" lineHeight="sm">
                  within the diet
								</Typography>
							</Tag>
						) : (
							<Tag>
								<Status
									isOnTheDiet={
										meal?.isOnTheDiet ? true : false
									}
								/>
								<Typography fontSize="body_sm" lineHeight="sm">
                  off the diet
								</Typography>
							</Tag>
						)}
					</Row>
				</Content>

				{meal && modalVisible && (
					<Modal
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						onAction={() => handleMealRemove(meal.id)}
					/>
				)}

				<Button
					type="solid"
					title="Edit meal"
					icon={<PencilSimpleLine color="white" />}
					onPress={() => handleGoUpdateMeal(meal!.id)}
					style={{ marginBottom: 8 }}
				/>

				<Button
					type="outline"
					title="Delete meal"
					icon={<Trash color="black" />}
					onPress={() => setModalVisible(true)}
				/>
			</Layout>
		</Container>
	)
}
