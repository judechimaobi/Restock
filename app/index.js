import { useEffect, useState, useHistory  } from "react";
import { Redirect, useRouter, Link } from 'expo-router';

import { ProductProvider } from '../components/contexts/ProductContext';
// import { COLORS, icons, images, SIZES, FONT } from '../constants';
// import { SafeAreaView, View, SafeAreaProvider, StatusBar, Text } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import { StoreData, GetItemFor } from "./(onboarding)/storageHelper";

const HAS_LAUNCHED = 'HAS_LAUNCHED';

const Home = () => {
  const [hasLaunched, setHasLaunched] = useState(true);
  const router = useRouter();
  useEffect (() => {
    const checkOnboarding = async () => {
      const hasLaunchedValue = GetItemFor(HAS_LAUNCHED);
      if(hasLaunchedValue) {
        setHasLaunched(true)
      } else {
        StoreData(HAS_LAUNCHED, true)
      }
    }
    checkOnboarding().catch((error) => {console.log(error)});
  }, [])

  return (
      hasLaunched ? (
        <Redirect href="/(tabs)/home" />
      ) : (
        <Redirect href="/(onboarding)" />
      )
  );
}
export default Home;