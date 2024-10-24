import React, { useState } from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './CartFooter.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';





const CartFooter = ({subtotal, shippingFee, vat, totalAmount, btnText, btnRoute, screen}) => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();


  if(screen == "cart") {
    return (
      <View style={styles.container(width)}>
        <View style={styles.innerContainer}>
          <View style={styles.row}>
            <Text style={styles.rowText}>Subtotal</Text>
            <Text style={styles.rowTextPrice}>{subtotal}</Text>
          </View>
  
          <View style={styles.row}>
            <Text style={styles.rowText}>Shipping fee</Text>
            <Text style={styles.rowTextPrice}>{shippingFee}</Text>
          </View>
  
          <View style={styles.row}>
            <View style={styles.vatBox}>
              <Text style={styles.rowText}>VAT (7.5%)</Text>
              <Text style={[styles.rowText, styles.disclaimerText ]}>Please note that this is not charged by Restock.</Text>
            </View>
            
            <Text style={styles.rowTextPrice}>{vat}</Text>
          </View>
  
          <View style={styles.line}></View>
          
          <View style={styles.row}>
            <Text style={styles.totalRowText}>Total</Text>
            <Text style={styles.totalRowText}>{totalAmount}</Text>
          </View>
  
          <View style={styles.btnBox}>
            <TouchableOpacity 
              style={styles.btn}
              onPress={() =>
                router.push({
                  pathname: btnRoute,
                  params: { item: JSON.stringify(totalAmount)},
                })
            }>
              <Text style={styles.btntext}>{btnText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }


  if(screen == "checkout") {
    return (
      <View style={styles.container(width)}>
        <View style={styles.innerContainer}>
          <View style={styles.row}>
            <Text style={styles.totalRowText}>Total</Text>
            <Text style={styles.totalRowText}>{totalAmount}</Text>
          </View>
  
          <View style={styles.btnBox}>
            <TouchableOpacity 
              style={styles.btn}
              onPress={() =>
                router.push({
                  pathname: btnRoute,
                  params: { item: JSON.stringify(totalAmount)},
                })
            }>
              <Text style={styles.btntext}>{btnText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

export default CartFooter