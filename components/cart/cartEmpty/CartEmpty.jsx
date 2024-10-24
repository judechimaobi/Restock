import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CartEmpty.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../constants';


const CartEmpty = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require("../../../assets/images/emptyCart.png")} style={styles.emptyImage} />
        <Text style={styles.title}>Your Cart is empty</Text>
        <Text style={styles.desc}>Looks like you have not added anything to your cart yet. Go ahead and explore top categories</Text>
        {/* <TouchableOpacity style={styles.btn} onPress={() => cartState(false)}>
          <Text style={styles.btnText}>Top Categories</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default CartEmpty