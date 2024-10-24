import React from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, FONT } from "../../../../constants";
import { ProductDetailScreen, FooterSection } from '../../../../components';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../../../components/categories/categoriesScreen.style';




const ProductDetails = () => {

	const { item } = useLocalSearchParams();
	const itemDetails = JSON.parse(item);

	// console.log(itemDetails);

return (
	<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
		<Stack.Screen 
			options = {{
				headerHeight: 150,
				headerShown: true,
				headerTransparent: true,
				headerLeft: ({color, size}) => (<Ionicons 
					name="chevron-back-outline" 
					size={SIZES.xLarge} 
					color={color} 
					onPress={router.back} />),
				headerTitle: "",
				headerTitleAlign: "center",
				headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
			}} 
		/> 

		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{flex:1,paddingTop: 0, paddingBottom: SIZES.xxLarge * 3 }}>
				<ProductDetailScreen itemDetails={itemDetails} />
			</View>
		</ScrollView>
					{/* <FooterSection /> */}
	</SafeAreaView>

)}
export default ProductDetails