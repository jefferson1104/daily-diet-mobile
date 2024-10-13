import { View, Text } from "react-native";

import { styles } from "./styles";

export function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
}
