import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CartTabs.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../../../constants';





const Tabs = [
  {id: '1', name: 'My Cart'},
  {id: '2', name: 'Current Orders'},
]

const CartTabs = (selecetedTab, setSelecetedTabScreen) => {
  
  // const [selecetedTab, setSelecetedTab] = useState(1);
  // const [selecetedTabScreen, setSelecetedTabScreen] = useState('My Cart');
  
  const selected = selecetedTab.selecetedTab;
  const setSelected = selecetedTab.setSelecetedTab;
  const setSelectScreen = selecetedTab.setSelecetedTabScreen;
  
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
            <TouchableOpacity style={styles.tabBtn (selected, item.id)} 
              onPress={() => {
                setSelected(item.id)
                setSelectScreen(item.name)
                }}>
              <Text style={styles.tabTitle(selected, item.id)}>{item.name}</Text>
            </TouchableOpacity>
              
        } />

        {/* <TouchableOpacity style={styles.tabBtn(selected)} onPress={switchTab}>
          <Text style={styles.tabTitle(selected)}>My Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBtn(selected)} onPress={switchTab}>
          <Text style={styles.tabTitle(selected)}>Current orders</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default CartTabs