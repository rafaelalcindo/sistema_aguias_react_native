import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,

  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import theme from './src/styles/theme';

import { Login } from './src/screens/Login';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </GestureHandlerRootView>

  );
}

