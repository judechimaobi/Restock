import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import { AuthorizeTrans } from '../../../components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import styles from "../../../components/categories/categoriesScreen.style";






const PaymentAuth = () => {
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
					headerTitle: "Authorize Transaction",
					headerTitleAlign: "center",
					headerTitleAlign: "center",
					headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
					}} 
			/> 

			<View style={{flex:1, padding: SIZES.medium, paddingTop: 0}}>
				<AuthorizeTrans />
				
			</View>


		</SafeAreaView>
	)
}
export default PaymentAuth