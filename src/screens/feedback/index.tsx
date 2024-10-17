import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import illustrationHappy from '@assets/illustration-happy.png';
import illustrationSad from '@assets/illustration-sad.png';

import { Typography } from '@components/Typography';
import { Button } from '@components/Button';

import { Container } from './styles';

type RouteParams = { isOnTheDiet: boolean }

export function FeedbackScreen() {
  // Hooks
	const navigation = useNavigation();
	const route = useRoute();

  // Constants
	const { isOnTheDiet } = route.params as RouteParams

  // Methods
	function handleBackToHome() {
		navigation.navigate('home')
	};

  // Renders
	return (
		<Container>
			{isOnTheDiet ? (
				<>
					<Typography
						fontSize="title_md"
						color="green_dark"
						fontFamily="bold"
						lineHeight="lg"
					>
						Keep it up!
					</Typography>

					<Typography
						textAlign="center"
						style={{
							marginTop: 8,
							marginBottom: 40,
						}}
					>
						You're still{' '}
						<Typography fontFamily="bold">on the diet.</Typography>{' '}
						Very good!
					</Typography>

					<Image source={illustrationHappy} />
				</>
			) : (
				<>
					<Typography
						fontSize="title_md"
						color="red_dark"
						fontFamily="bold"
						lineHeight="lg"
					>
						What a shame!
					</Typography>

					<Typography
						textAlign="center"
						style={{
							marginTop: 8,
							marginBottom: 40,
						}}
					>
						You've{' '}
						<Typography fontFamily="bold">gone off your diet</Typography>{' '}
						this time, but keep trying and don't give up!
					</Typography>

					<Image source={illustrationSad} />
				</>
			)}
			<Button
				title="Go to home page"
				onPress={handleBackToHome}
				style={{ marginTop: 32 }}
			/>
		</Container>
	)
}
