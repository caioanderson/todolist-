import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import theme from './src/global/styles/theme';

import { Home } from './src/screens/Home';

import {
  useFonts,
  Jost_300Light, Jost_600SemiBold, Jost_400Regular, Jost_500Medium
} from '@expo-google-fonts/jost';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_300Light, Jost_600SemiBold, Jost_400Regular, Jost_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}