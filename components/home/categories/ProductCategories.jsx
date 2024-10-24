import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, Platform, Pressable } from 'react-native';
import styles from './ProductCategories.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';



const CategoryItems = ({ item }) => {
  const router = useRouter();

  const images = {
    'cat-beverages': require('../../../assets/images/categories/cat-beverages.png'),
    'cat-cereals': require('../../../assets/images/categories/cat-cereals.png'),
    'cat-toiletries': require('../../../assets/images/categories/cat-toiletries.png'),
    'cat-snacks': require('../../../assets/images/categories/cat-snacks.png'),
    'cat-groceries': require('../../../assets/images/categories/cat-groceries.png'),
  };

  return (
    <Pressable style={styles.sectionBody}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/categories/",
          params: { item: item.category_name},
        })
      }
    >
      {/* require(item.image_url) */}
      
      {/* <ImageBackground source={item.image} style={[styles.image]} imageStyle={styles.imageStyle}> */}
      <ImageBackground source={images[item.image_url]}  style={[styles.image]} imageStyle={styles.imageStyle}>
        {/* <LinearGradient
          colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        > 
        <Text style={styles.title} numberOfLines={1}>{item.category_name}</Text>
        </LinearGradient> */}
      </ImageBackground>
    </Pressable>
  )
}

const ProductCategories = () => {

  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const BASE_URL = 'http://192.168.127.87:3001/api';

  useEffect(() => {
    fetchCategories();
  }, []);
  
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories`);
      setCategories(response.data);
      setLoadingCategories(false);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
      setLoadingCategories(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Categories</Text>
        <TouchableOpacity style={styles.sectionHeaderBtn} onPress={()=> {router.push({pathname: "/(tabs)/categories/"})}}>
          <Text style={styles.sectionHeaderBtnText}>See more</Text>
          <Ionicons name="chevron-forward" style={styles.arrowIcon} />
        </TouchableOpacity>
        
      </View>

      <FlatList
				data={categories}
        horizontal={true}
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
				bounces={true}
				keyExtractor={(item) => item.category_name}
        decelerationRate={Platform.OS === 'ios' ? 'slow' : 0.9}
        renderToHardwareTextureAndroid
        snapToInterval={10}
        overScrollMode="never"
        scrollEventThrottle={16}




        renderItem={({ item, index }) => 
          <CategoryItems
            item={item} 
        />}
			/>
    </View>
  )
}

export default ProductCategories