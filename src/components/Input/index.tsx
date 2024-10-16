import { Typography } from '@components/Typography'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container, TextInput } from './styles'
import { dateMask, hourMask } from '@utils/mask'

interface InputProps extends TextInputProps {
	mask?: 'date' | 'hour';
	onInputMaksChange?: (text: string) => void;
	label: string;
};

export function Input({
	label,
	mask,
	onInputMaksChange,
	...props
}: InputProps) {
	// Hooks
	const { colors } = useTheme();

	// Methods
	function handleChange(text: string) {
		onInputMaksChange &&
			mask === 'date' &&
			onInputMaksChange(dateMask(text))
		onInputMaksChange && mask === 'hour' && onInputMaksChange(hourMask(text))
	}

	// Renders
	return (
		<Container style={props.style}>
			<Typography
				fontSize="title_xs"
				fontFamily="bold"
				style={{ marginBottom: 4 }}
			>
				{label}
			</Typography>

			<TextInput
				placeholderTextColor={colors.base.gray_3}
				cursorColor={colors.base.gray_1}
				multiline={true}
				numberOfLines={1}
				maxLength={mask === 'date' ? 10 : mask === 'hour' ? 5 : 50}
				onChangeText={(text) => handleChange(text)}
				{...props}
			/>
		</Container>
	)
}
