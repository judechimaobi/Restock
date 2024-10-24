import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProfileDetails, ProfileButtons } from '../../../components';
import { LinearGradient } from "expo-linear-gradient";

export default function Index () {
    return (
			<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
				<StatusBar 
					style="auto"
					backgroundColor= {COLORS.primary}
					barStyle="light-content"
				/>
				<Stack.Screen 
					options = {{
					headerStyle: { backgroundColor: COLORS.primary },
					headerShadowVisible: false,
					// headerLeft: () => (<ScreenHeaderBtn iconurl={icons.menu} dimension="60%" />),
					headerRight: ({color, size}) => (<Ionicons name="settings-outline" size={SIZES.xLarge} color={COLORS.white} />),
					headerTitle: "Profile",
					headerTitleAlign: "center",
					headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.white},
					}} 
				/> 



				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={{flex:1}}>
						<ProfileDetails />
					</View>
					<View style={{flex:1, padding: SIZES.medium, paddingTop: 0}}>
						<ProfileButtons />
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
    )
}