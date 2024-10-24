import React, { useState, useRef, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, useWindowDimensions, Animated } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';
import * as Updates from 'expo-updates';
import { Ionicons } from '@expo/vector-icons';



import { StatusBar } from 'expo-status-bar';
// import { useHeaderHeight } from '@react-navigation/elements';


import { ScrollView, SafeAreaView, Appearance, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';


import OnboardingScreen from './onboardingScreen';
import { COLORS, icons, images, SIZES, FONT } from '../../constants';




SplashScreen.preventAutoHideAsync();



export default function OnboardingComponent() {
	// const headerHeight = useHeaderHeight();

    // LOADING FONTS
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? COLORS.lightWhite : COLORS.gray;
    const themeContainerStyle = colorScheme === 'light' ? COLORS.lightWhite : COLORS.gray;
    const [fontsLoaded, fontError] = useFonts({
      'Nexa-extralight': require('../../assets/fonts/Nexa-extralight.ttf'),
      'Nexa-light': require('../../assets/fonts/Nexa-light.otf'),
      'Nexa-regular': require('../../assets/fonts/Nexa-regular.otf'),
      'Nexa-bold': require('../../assets/fonts/Nexa-bold.otf'),
      'Nexa-heavy': require('../../assets/fonts/Nexa-heavy.ttf')
    });
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);
    if (!fontsLoaded && !fontError) {
      return null;
    }

    // SETTING DEFAULTS
    const customTextProps = {
      style: {
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
      //   fontFamily: Platform.OS === 'ios' ? FONT.regular : FONT.regular,
        color: COLORS.gray,
      }
    };

    setCustomText(customTextProps);

	return (
		// <SafeAreaProvider onLayout={onLayoutRootView} style={[themeContainerStyle]}>
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<StatusBar hidden/>
			<OnboardingScreen />
		</SafeAreaView>
		
  	)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

