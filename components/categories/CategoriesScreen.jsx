import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Pressable, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../../constants';
import { useRouter, useLocalSearchParams } from 'expo-router';
import styles from './categoriesScreen.style'
import axios from 'axios';



const CategoryItems = ({ item, width }) => {

  if (item.empty === true) {
    return <View style={styles.itemInvisible} />
  }
  return (
    <Pressable style={styles.sectionBody(width)}>
      <Image source={item.image} style={[styles.image(width)]} />
      <View style={styles.productDetailBox}>
        <Text style={styles.productName} numberOfLines={1}>{item.type}</Text>
        {/* <Text style={styles.qty} numberOfLines={1}>{item.qty} {item.unit}</Text> */}
        <Text style={styles.qty} numberOfLines={1}>{item.unit}</Text>
      </View>
      <View style={styles.sectionFooter}>
        <View style={styles.priceBox}>
          <Text style={styles.currency} numberOfLines={1}>NGN</Text>
          <Text style={styles.price} numberOfLines={1}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.sectionBtn}>
          <Text style={styles.sectionBtnText}><Ionicons name='add' size={14} /></Text> 
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }
  return data;
}

const CategoriesScreen = ({ category }) => {
  const width = Dimensions.get('window').width * 0.8;
  
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category);
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const BASE_URL = 'http://192.168.127.87:3001/api';

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
      setSelectedCategory(selectedCategory)
    } else {
      fetchProductsByCategory('Beverages');
      setSelectedCategory('Beverages')
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories`);
      setCategories(response.data);
      if (response.data.length > 0) {
        setSelectedCategory(category);
      }
      setLoadingCategories(false);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
      setLoadingCategories(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/products/${encodeURIComponent(category)}`);
      setFilteredProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error.message);
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          bounces={true}
          keyExtractor={(item) => item.category_name}
          renderItem={({ item }) => 
            <TouchableOpacity 
              style={styles.tabs(selectedCategory, item.category_name)} 
              onPress={() => {
                setSelectedCategory(item.category_name);
              }}>
              <Text style={styles.tabText(selectedCategory, item.category_name)}>{item.category_name}</Text>
            </TouchableOpacity>
          } 
        />
      </View>

      <View>
      <FlatList
        data={formatData(filteredProducts, 2)}
        showsVerticalScrollIndicator={false}
        bounces={true}
        keyExtractor={(item) => item.sku}
        numColumns={2}
        renderItem={({ item }) => (
          <View key={item.sku} style={styles.productContainer}>
            <CategoryItems key={item.sku} item={item} width={width} />
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 180 }}
      />
      </View>
    </View>
  );
};

export default CategoriesScreen;

