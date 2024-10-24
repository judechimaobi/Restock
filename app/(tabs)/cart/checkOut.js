import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import { CheckOutScreen } from '../../../components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import styles from "../../../components/categories/categoriesScreen.style";






const OrderStatus = () => {
	const router = useRouter();
	return (
		
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen 
					options = {{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: ({color, size}) => (<Ionicons 
						name="chevron-back-outline" 
						size={SIZES.xLarge} 
						color={color} 
						onPress={router.back} />),
					headerTitle: "Checkout",
					headerTitleAlign: "center",
					headerTitleAlign: "center",
					headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
					}} 
			/> 

			<View style={{flex:1, paddingTop: 0}}>
				{/* <Text>Checking out...</Text> */}
				<CheckOutScreen />
				
			</View>


		</SafeAreaView>
	)
}
export default OrderStatus