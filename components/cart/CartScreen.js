import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './cartTabs/CartTabs.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../../constants';


import { CartItems } from './cartItems/CartItems';
import { CartFooter } from './cartFooter/CartFooter';







const Tabs = [
	{id: '1', name: 'My Cart'},
	{id: '2', name: 'Current orders'},
]

  
const CartScreen = () => {
	const [selecetedTab, setSelecetedTab] = useState(1);
  const [selecetedTabScreen, setSelecetedTabScreen] = useState('My Cart');

	return (
    <View style={styles.container}>
      <View style={styles.tabBox}>

      <FlatList
          data={Tabs}
          horizontal={true}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          keyExtractor={(item) => item.id}
          contentContainerStyle= {{columnGap: SIZES.small, flexGrow: 1, justifyContent: 'center'}}
          renderItem={({ item }) => 
            <TouchableOpacity style={styles.tabBtn (selecetedTab, item.id)} 
              onPress={() => {
                setSelecetedTab(item.id)
                setSelecetedTabScreen(item.name)
                }}>
              <Text style={styles.tabTitle(selecetedTab, item.id)}>{item.name}</Text>
            </TouchableOpacity>  
        } />

      </View>


			



			<ScrollView showsVerticalScrollIndicator={false} style={{flex:1, padding: SIZES.medium, paddingTop: 0}}>
					{/* <CartItems selecetedTabScreen = {selecetedTabScreen} /> */}
					{/* <CartFooter /> */}
			</ScrollView>
    </View>
  )}
export default CartScreen