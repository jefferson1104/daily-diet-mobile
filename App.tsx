import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { HomePage } from '@screens/home';

import { Loading } from '@components/Loading';

import theme from './src/theme';

export default function App() {
  // Hooks
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  // Renders
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor='trasparent'
        barStyle='dark-content'
        translucent
      />
      {fontsLoaded ? <HomePage /> : <Loading />}
    </ThemeProvider>
  );
}
