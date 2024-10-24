import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Stack, router } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, FONT } from "../../../constants";
import { FilterCategory, FilterRating, FilterMeasurement, FilterFooter } from '../../../components';

const Filter = () => {
return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen 
            options = {{
                headerHeight: 150,
                headerShown: true,
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                // headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />),
                headerLeft: ({color, size}) => (<Ionicons 
                    name="chevron-back-outline" 
                    size={SIZES.xLarge} 
                    color={color} 
                    onPress={router.back} />),
                headerRight: ({color, size}) => (<Ionicons name="notifications-outline" size={SIZES.xLarge} color={color} />),
                headerTitle: "Filter",
                headerTitleAlign: "center",
                headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
            }} 
        /> 

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1, padding: SIZES.medium, paddingTop: 0}}>
                <FilterCategory />
                <FilterRating />
                <FilterMeasurement />
            </View>
        </ScrollView>
            <FilterFooter />
    </SafeAreaView>




)}
export default Filter