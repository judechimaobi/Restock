import react from "react";
// import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback } from "react";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import { ScreenHeaderBtn, Search, WelcomeBanner, MostPurchased, ProductCategories, PopularBundles } from '../../../components';
import { useHeaderHeight } from '@react-navigation/elements';


import { StyleSheet, Text, View, ScrollView, SafeAreaView, Appearance, useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';
import { LinearGradient } from "expo-linear-gradient";




SplashScreen.preventAutoHideAsync();

export default function Index () {
  const headerHeight = useHeaderHeight();

    // LOADING FONTS
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? COLORS.lightWhite : COLORS.gray;
    const themeContainerStyle = colorScheme === 'light' ? COLORS.lightWhite : COLORS.gray;
    const [fontsLoaded, fontError] = useFonts({
      'Nexa-extralight': require('../../../assets/fonts/Nexa-extralight.ttf'),
      'Nexa-light': require('../../../assets/fonts/Nexa-light.otf'),
      'Nexa-regular': require('../../../assets/fonts/Nexa-regular.otf'),
      'Nexa-bold': require('../../../assets/fonts/Nexa-bold.otf'),
      'Nexa-heavy': require('../../../assets/fonts/Nexa-heavy.ttf')
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
      // style={[themeContainerStyle, themeTextStyle]}
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
          <Stack.Screen 
            options = {{
              headerHeight: 150,
              headerShown: true,
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerShadowVisible: false,
              headerRight: ({color, size}) => (<Ionicons name="notifications-outline" size={SIZES.xLarge} color={color} />),
              headerTitle: "Home",
              headerTitleAlign: "center",
              headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
            }} 
          /> 

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1, paddingTop: 0, paddingBottom: 120}}>
              <Search />
              <WelcomeBanner />
              <ProductCategories />
              <MostPurchased />
              <PopularBundles />
            </View>
          </ScrollView>
          <LinearGradient
            colors={['transparent', COLORS.white, COLORS.white]}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '15%',
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    )
}