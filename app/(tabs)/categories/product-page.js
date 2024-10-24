import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from '../../../constants';
import { ScreenHeaderBtn, Search, WelcomeBanner, MostPurchased, ProductCategories, PopularBundles } from '../../../components';

export default function Index () {
    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options = {{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                // headerLeft: () => (<ScreenHeaderBtn iconurl={icons.menu} dimension="60%" />),
                // headerRight: () => (<ScreenHeaderBtn iconurl={icons.profile} dimension="60%" />),
                headerTitle: "Product page",
                }} 
            /> 



            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding: SIZES.medium}}>
                    
                        <Text>This is the product page</Text>
                    
                <Search />
                <ProductCategories />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}