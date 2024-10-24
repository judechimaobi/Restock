import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import { OrderStatusScreen } from '../../../components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import styles from "../../../components/categories/categoriesScreen.style";

import MapTracking from "../../../components/cart/map/MapTracking";






const TrackOrderMap = () => {
	const router = useRouter();
	return (
		
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen 
				options = {{
					headerShown: true,
                	headerTransparent: true,
					headerShadowVisible: false,
					headerLeft: ({color, size}) => (<Ionicons 
						name="chevron-back-outline" 
						size={SIZES.xLarge} 
						color={color} 
						onPress={router.back} />),
					// headerRight: ({color, size}) => (<Ionicons name="notifications-outline" size={SIZES.xLarge} color={color} />),
					headerTitle: "",
					headerTitleAlign: "center",
					headerTitleAlign: "center",
					headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
					}} 
			/> 

			{/* <View style={{flex:1, paddingTop: 0}}> */}

				<MapTracking style={styles.map} />
				
			{/* </View> */}
		</SafeAreaView>
	)
}
export default TrackOrderMap