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
import { Routes } from './src/routes';

import { AuthProvider, useAuth } from './src/hooks/auth';
// import { Dashboard } from './src/screens/Dashboard';
// import { PointList } from './src/screens/PointList';
// import { PointListUnity } from './src/screens/PointListUnity';
// import { AddUnityPoint } from './src/screens/AddUnityPoint';
// import { AddPathfinderPoint } from './src/screens/AddPathfinderPoint';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  // if (!fontsLoaded) {
  //   return <></>
  // }

  return (

    <GestureHandlerRootView style={{ flex: 1 }} >


      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>

  );
}

