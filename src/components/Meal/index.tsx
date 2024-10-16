import { PressableProps } from "react-native";

import { Typography } from "@components/Typography";

import { Container, Divider, Status } from "./styles";

export interface MealStatus {
  isOnTheDiet: boolean;
};

interface MealProps extends MealStatus, PressableProps {
  id: string;
  hour: string;
  description: string;
};

export function Meal({ id, hour, description, isOnTheDiet, ...rest }: MealProps) {
  return (
    <Container {...rest}>
      <Typography fontSize="body_xs" fontFamily="bold">
        {hour}
      </Typography>
      <Divider />
      <Typography style={{ flex: 1 }} numberOfLines={1}>
        {description}
      </Typography>
      <Status isOnTheDiet={isOnTheDiet} />
    </Container>
  );
}
