import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, Platform, Pressable } from 'react-native';
import styles from './MostPurchased.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter, useNavigation } from 'expo-router';
import { FONT, SIZES, COLORS } from "../../../constants";
import { ProductContext } from '../../contexts/ProductContext';
import axios from 'axios';

const Slides = [
  {
    id: '1',
    name: 'Rice',
    qty: '1',
    unit: 'painter',
    price: "3,900",
    image: require('../../../assets/images/rice.png'),
  },
  {
    id: '2',
    name: 'Yam',
    qty: '1',
    unit: 'tuber',
    price: "109,900",
    image: require('../../../assets/images/yam.jpg'),
  },
  {
    id: '3',
    name: 'Oil',
    qty: '1',
    unit: 'bottle',
    price: "3,900",
    image: require('../../../assets/images/palmoil.jpg'),
  },
  {
    id: '4',
    name: 'Spaghetti',
    qty: '1',
    unit: 'pack',
    price: "38,000",
    image: require('../../../assets/images/spaghetti.png'),
  },
  {
    id: '5',
    name: 'Meat',
    qty: '1',
    unit: 'kilo',
    price: "989,200",
    image: require('../../../assets/images/meat.jpg'),
  },
  {
    id: '6',
    name: 'Cowpea',
    qty: '1',
    unit: 'painter',
    price: "3,900",
    image: require('../../../assets/images/cowpea.png'),
  },
  {
    id: '7',
    name: 'Noodles',
    qty: '1',
    unit: 'carton',
    price: "3,900",
    image: require('../../../assets/images/noodles.png'),
  },
  {
    id: '8',
    name: 'Bananers',
    qty: '1',
    unit: 'kg',
    price: "3,900",
    image: require('../../../assets/images/bananer.png'),
  },
  {
    id: '9',
    name: 'Sprite',
    qty: '1',
    unit: 'carton',
    price: "3,900",
    image: require('../../../assets/images/sprite.png'),
  },
  {
    id: '10',
    name: 'garri',
    qty: '4',
    unit: 'kg',
    price: "3,900",
    image: require('../../../assets/images/garri.jpg'),
  },
]

const MostPurchasedItems = ({ item, router }) => {
  return (
    <Pressable
      style={styles.sectionBody}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/home/productDetails",
          params: { item: JSON.stringify(item)},
        })
      }
    >
      <Image source={require('../../../assets/images/sprite.png')} style={styles.image} />
      <View style={styles.productDetailBox}>
        <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
      </View>
      <View style={styles.sectionFooter}>
        <View style={styles.priceBox}>
          <Text style={styles.currency} numberOfLines={1}>NGN</Text>
          <Text style={styles.price} numberOfLines={1}>{item.lowest_price}</Text>
        </View>
        <TouchableOpacity style={styles.sectionBtn}>
            <Ionicons name='eye' size={14} style={styles.sectionBtnIcon} />
            {/* <Text style={styles.sectionBtnText}>View</Text>  */}
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};




const MostPurchased = () => {
    const { products, loading } = useContext(ProductContext);
    if (loading) {
      // Loader
    }

  const router = useRouter();
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Most purchased</Text>
        {/* <TouchableOpacity style={styles.sectionHeaderBtn} onPress={()=> { router.push({pathname: "/(tabs)/categories/"})}}>
          <Text style={styles.sectionHeaderBtnText}>See more <Ionicons name="chevron-forward" /></Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.sectionHeaderBtn} onPress={()=> {router.push({pathname: "/(tabs)/bundles/"})}}>
          <Text style={styles.sectionHeaderBtnText}>See more</Text>
          <Ionicons name="chevron-forward" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

        <FlatList
          data={products}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={true}
          keyExtractor={(item) => item.id}
          decelerationRate={Platform.OS === 'ios' ? 'fast' : 0.9}
          renderToHardwareTextureAndroid
          snapToInterval={SIZES.xxLarge * 4.5}
          overScrollMode="never"
          scrollEventThrottle={16}
          
          renderItem={({ item, index }) => 
            <MostPurchasedItems
            router={router}
              item={item} 
          />}
        />
    </View>
  )
}

export default MostPurchased