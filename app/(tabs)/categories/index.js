import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import { CategoriesScreen } from '../../../components';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ProductItemCard } from '../../../components';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function Index () {
  
	const { item } = useLocalSearchParams();

	// console.log(item); return;
	// if (item) {
	// 	const category = JSON.parse(item);
	// }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <Stack.Screen 
                    options = {{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    // headerLeft: () => (<ScreenHeaderBtn iconurl={icons.menu} dimension="60%" />),
                    headerRight: ({color, size}) => (<Ionicons name="notifications-outline" size={SIZES.xLarge} color={color} />),
                    headerTitle: "Categories",
                    headerTitleAlign: "center",
                    headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
                    }} 
                /> 

                    <View style={{flex:1, padding: SIZES.medium, paddingTop: 0}}>
											<CategoriesScreen category={item} />
                    </View>
							
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


 {/* <Link href={"/categories/product-page"}>
                        <Text>Go to another page</Text>
                    </Link> */}
                    {/* <Search /> */}