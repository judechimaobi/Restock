import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import { CartTabs, CartItems, CartFooter, CartEmpty, CartScreen } from '../../../components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";

export default function Index () {
	const [isEmpty, setIsEmpty] = useState(true);
	const [selecetedTab, setSelecetedTab] = useState(1);
	const [selecetedTabScreen, setSelecetedTabScreen] = useState('My Cart');

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen 
				options = {{
				headerStyle: { backgroundColor: COLORS.lightWhite },
				headerShadowVisible: false,
				// headerLeft: () => (<ScreenHeaderBtn iconurl={icons.menu} dimension="60%" />),
				headerRight: ({color, size}) => (<Ionicons name="notifications-outline" size={SIZES.xLarge} color={color} />),
				headerTitle: "Cart",
				headerTitleAlign: "center",
				headerTitleAlign: "center",
				headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
				}} 
			/> 

			<View style={{flex: 1}}>
				<View style={{padding: SIZES.medium, paddingTop: 0}}>
					{/* <CartScreen /> */}
					<CartTabs 
						selecetedTab = {selecetedTab} 
						setSelecetedTab = {setSelecetedTab} 
						setSelecetedTabScreen = {setSelecetedTabScreen} />
				</View>
																						
				<CartItems selecetedTabScreen = {selecetedTabScreen} cartState={setIsEmpty} />

				{/* <CartFooter cartState={setIsEmpty} /> */}
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
			</View>
			
		</SafeAreaView>
	)
}