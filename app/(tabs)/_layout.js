import Tabs  from "expo-router/tabs";
import { COLORS, icons, images, SIZES, FONT } from '../../constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { ScreenHeaderBtn } from '../../components';
import { Image, View } from 'react-native';
import { Link, useRouter } from "expo-router";
import TabBar from "../../components/tabBar/TabBar";
import { ProductProvider } from "../../components/contexts/ProductContext";
import { CartProvider } from '../../components/contexts/CartContext';



const TabsLayout = () => {
    const router = useRouter();

    const gotoProfile = () => {
      if (router.push("(tabs)/profile")) {
        alert('Ok')
      }
    } 

    // screenOptions={{headerShown: false}}

    return (
          // <Tabs screenOptions={{
          //   headerShown: false,
          //   // headerStatusBarHeight: 0,
          //   tabBarInactiveTintColor: COLORS.black,
          //   tabBarActiveTintColor: COLORS.primary, 
          //   headerShadowVisible: false,
          //   title: '',
          //   tabBarItemStyle: {
          //     backgroundColor: COLORS.white,
          //     height: 60,              
          //   }
          //   }}>
          
          <ProductProvider>
            <CartProvider>

              <Tabs tabBar={props => <TabBar {...props} />} screenOptions={{headerShown: false, paddingBottom: 200}}>

                <Tabs.Screen 
                  name = "home" 
                  options={{
                    tabBarLabel: "Home", 
                    title: "Home",
                    tabBarIcon: ({color, size}) => (<AntDesign name="home" size={SIZES.large} color={color} />)}} 
                    />

                <Tabs.Screen 
                  name = "categories" 
                  options={{
                    tabBarLabel: "Category", 
                    title: "Categories",
                    tabBarBadgeStyle: {
                      backgroundColor: COLORS.primary,
                    },
                    tabBarIcon: ({color, size}) => (<Ionicons name="grid-outline" size={SIZES.large} color={color} />)}} />

                <Tabs.Screen 
                  name = "bundles" 
                  options={{
                    tabBarLabel: "Bundles", 
                    title: "Bundles",
                    tabBarIcon: ({color, size}) => (<Ionicons name="gift-outline" size={SIZES.large} color={color} />)}} />

                <Tabs.Screen 
                  name = "cart" 
                  options={{
                    tabBarLabel: "Cart", 
                    title: "Cart",
                    tabBarBadge: 4,
                    tabBarBadgeStyle: {
                      backgroundColor: COLORS.primary,
                      fontFamily: FONT.regular,
                      fontSize: SIZES.small,
                    },
                    tabBarIcon: ({color, size}) => (<Ionicons name="cart-outline" size={SIZES.large} color={color} />)}} />


                
                <Tabs.Screen 
                  name = "profile" 
                  options={{
                    tabBarLabel: "Profile", 
                    title: "Profile",
                    // tabBarIcon: () => (
                      //     <View>
                      //       <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={gotoProfile} />
                      //     </View>
                      //     ),
                    tabBarIcon: ({color, size}) => (<Ionicons name="person-outline" size={SIZES.large} color={color} />)}} /> 
              </Tabs>
            </CartProvider>
          </ProductProvider>
    );
  }


  export default TabsLayout;
