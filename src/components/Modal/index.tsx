import { StyleSheet } from 'react-native';

import { Button } from '@components/Button';
import { Typography } from '@components/Typography';

import { Centered, Container, ModalView, Row } from './styles';

interface ModalProps {
	modalVisible: boolean;
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	onAction?: () => void;
};

export function Modal({ modalVisible = false, setModalVisible, onAction }: ModalProps) {
  // Renders
	return (
		<Container
			animationType="fade"
			transparent={true}
			visible={modalVisible}
		>
			<Centered>
				<ModalView style={styles.shadow}>
					<Typography
						fontSize="title_sm"
						fontFamily="bold"
						textAlign="center"
					>
						Deseja realmente excluir o registro da refeição?
					</Typography>

					<Row>
						<Button
							type="outline"
							title="Cancelar"
							onPress={() => setModalVisible(!modalVisible)}
							style={{ width: '48%' }}
						/>

						<Button
							type="solid"
							title="Sim, excluir"
							onPress={onAction}
							style={{ width: '48%' }}
						/>
					</Row>
				</ModalView>
			</Centered>
		</Container>
	);
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 22,
	},
});
