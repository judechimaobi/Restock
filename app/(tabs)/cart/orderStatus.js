import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import { OrderStatusScreen } from '../../../components';
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
						// headerRight: ({color, size}) => (<Ionicons name="notifications-outline" size={SIZES.xLarge} color={color} />),
						headerTitle: "Order status",
						headerTitleAlign: "center",
						headerTitleAlign: "center",
						headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
						}} 
				/> 

			<View style={{flex:1, padding: SIZES.medium, paddingTop: 0}}>
				{/* <Text>Tracking your order</Text> */}
				<OrderStatusScreen />
				
			</View>


		</SafeAreaView>
	)
}
export default OrderStatus