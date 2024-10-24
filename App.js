import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/homeScreen'; // Uncomment if you want to use Home
import Onboarding from './components/onboarding'; // Onboarding component

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  // Font loading with useFonts hook
  // const [fontsLoaded, fontError] = useFonts({
  //   'Nexa-extralight': require('./assets/fonts/Nexa-extralight.ttf'),
  //   'Nexa-light': require('./assets/fonts/Nexa-light.otf'),
  //   'Nexa-regular': require('./assets/fonts/Nexa-regular.otf'),
  //   'Nexa-bold': require('./assets/fonts/Nexa-bold.otf'),
  //   'Nexa-heavy': require('./assets/fonts/Nexa-heavy.ttf')
  // });

  // Once fonts are loaded, hide the splash screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null; // Avoid rendering UI until fonts are loaded
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView} style={[themeContainerStyle]}>
      {/* <Home themeTextStyle={themeTextStyle} themeContainerStyle={themeContainerStyle} /> */}

      {/* <View style={styles.container}>
        <Onboarding />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </View> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingBottom: 140,
  },
  lightContainer: {
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  darkContainer: {
    backgroundColor: '#242c40',
    padding: 10,
  },
  lightThemeText: {
    fontFamily: 'Nexa-regular',
    color: '#242c40',
  },
  darkThemeText: {
    fontFamily: 'Nexa-regular',
    color: '#f8f8f8',

    flex: 1,
    backgroundColor: '#000',
    paddingBottom: 20,
  },
});



















  // Fonts setup
  // const [fontsLoaded] = useFonts({
  //   'Nexa-extralight': require('./assets/fonts/Nexa-extralight.ttf'),
  //   'Nexa-light': require('./assets/fonts/Nexa-light.otf'),
  //   'Nexa-regular': require('./assets/fonts/Nexa-regular.otf'),
  //   'Nexa-bold': require('./assets/fonts/Nexa-bold.otf'),
  //   'Nexa-heavy': require('./assets/fonts/Nexa-heavy.ttf')
  // });




  // const [loaded, setLoaded] = useState(false);