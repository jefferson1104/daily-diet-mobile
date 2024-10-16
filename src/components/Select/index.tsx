import { PressableProps } from 'react-native';
import { Typography } from '@components/Typography';

import { Container, Status } from './styles';

export interface SelectStyle {
	isSelected?: boolean
	background: 'green' | 'red'
};

interface SelectProps extends PressableProps, SelectStyle {
  title: string
};

export function Select({ ...props }: SelectProps) {
  // Renders
	return (
		<Container {...props}>
			<Status background={props.background} isSelected={props.isSelected} />
			<Typography fontSize="title_xs" fontFamily="bold">
				{props.title}
			</Typography>
		</Container>
	);
}
