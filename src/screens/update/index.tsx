import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { Layout } from '@components/Layout';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Select } from '@components/Select';
import { Typography } from '@components/Typography';

import { mealsGetAll } from '@storage/meal/mealGetAll';
import { mealUpdate } from '@storage/meal/mealUpdate';

import { Container, Form, Row } from './styles';

type RouteParams = { id: string };

export function UpdateScreen() {
  // Hooks
	const route = useRoute();
  const navigation = useNavigation();

  // States
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [hour, setHour] = useState('');
	const [isOnTheDiet, setIsOnTheDiet] = useState(true);

  // Constants
  const { id } = route.params as RouteParams;

  // Methods
  const alertError = (message: string) => Alert.alert('Edit meal', message);

	function handleBackToMeal() {
		navigation.goBack();
	};

	async function handleReceiveMeal() {
		try {
			const data = await mealsGetAll()

			const meal = data.filter((item) => item.id === id)[0]

			setName(meal.name)
			setDescription(meal.description)
			setDate(meal.date)
			setHour(meal.hour)
			setIsOnTheDiet(meal.isOnTheDiet)
		} catch (error) {
			console.log(error)
		}
	};

	async function handleSubmit() {
		try {
			const newMeal = {
				id,
				name: name.trim(),
				description: description.trim(),
				date,
				hour,
				isOnTheDiet,
			};

      if (name.trim().length === 0) {
        return alertError("Enter the name of the meal.");
      }

      if (description.trim().length === 0) {
        return alertError("Enter the description of the meal.");
      }

      if (date.trim().length === 0) {
        return alertError("Enter the date of the meal.");
      }

      if (date.length < 10) {
        return alertError("The date format is not valid.");
      }

      if (hour.trim().length === 0) {
        return alertError("Enter the time of the meal.");
      }

      if (hour.length < 5) {
        return alertError("The time format is not valid.");
      }

			// Updated meal
			await mealUpdate(id, newMeal)

			handleBackToMeal()
		} catch (error) {
      alertError("Unable to edit this meal");
			console.log(error)
		}
	}

	// LifeCycles
	useFocusEffect(
		useCallback(() => {
			handleReceiveMeal()
		}, []),
	);

  // Renders
	return (
		<Container>
			<Layout
				header="Edit meal"
				background="gray"
				onPressBack={handleBackToMeal}
			>
				<Form>
					<Row>
						<Input
							placeholder="Name of the meal"
							label="Name"
							value={name}
							onChangeText={(text: string) => setName(text)}
						/>
					</Row>

					<Row>
						<Input
              placeholder="Meal Description"
							label="Description"
							value={description}
							onChangeText={(text: string) =>
								setDescription(text)
							}
						/>
					</Row>

					<Row>
						<Input
							label="Date"
							mask="date"
							placeholder="dd/mm/aaaa"
							keyboardType="numeric"
							value={date}
							onInputMaksChange={(text: string) => setDate(text)}
							style={{ width: '99%', marginRight: 4 }}
						/>

						<Input
							label="Hour"
							mask="hour"
							placeholder="HH:mm"
							keyboardType="numeric"
							value={hour}
							onInputMaksChange={(text: string) => setHour(text)}
							style={{ width: '99%', marginLeft: 4 }}
						/>
					</Row>

					<Row>
						<Typography fontSize="title_xs" fontFamily="bold">
              Is this meal on the diet?
						</Typography>
					</Row>

					<Row style={{ marginTop: -4 }}>
						<Select
							title="Yes"
							background="green"
							isSelected={isOnTheDiet}
							onPress={() => setIsOnTheDiet(true && true)}
							style={{ width: '48%' }}
						/>
						<Select
							title="No"
							background="red"
							isSelected={!isOnTheDiet}
							onPress={() => setIsOnTheDiet(false && false)}
							style={{ width: '48%' }}
						/>
					</Row>
				</Form>

				<Button
					title="Save changes"
					activeOpacity={0.5}
					onPress={handleSubmit}
				/>
			</Layout>
		</Container>
	)
}
