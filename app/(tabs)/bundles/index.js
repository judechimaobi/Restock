import react from "react";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES, FONT } from '../../../constants';
import { Search, Bundles } from '../../../components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";

export default function Index () {
    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options = {{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                // headerLeft: () => (<ScreenHeaderBtn iconurl={icons.menu} dimension="60%" />),
                headerRight: ({color, size}) => (<Ionicons name="notifications-outline" size={SIZES.xLarge} color={color} />),
                headerTitle: "Bundles",
                headerTitleAlign: "center",
                headerTitleAlign: "center",
                headerTitleStyle: {fontFamily: FONT.bold, fontSize: SIZES.medium, color: COLORS.black},
                }} 
            /> 

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex:1, padding: SIZES.medium, paddingTop: 0, paddingBottom: 120}}>
                        <Search />
                        <Bundles />
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