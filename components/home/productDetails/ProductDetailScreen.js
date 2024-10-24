import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity, FlatList, Image } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, SIZES, FONT } from "../../../constants";
import styles from './ProductDetailScreen.style';
import { LinearGradient } from 'expo-linear-gradient';
import ProductListItem from './ProductListItem/ProductListItem';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartBadge from '../../cart/cartBadge/CartBadge';
import { useCart } from '../../../components/contexts/CartContext';




const ProductDetailScreen = ( {itemDetails}) => {
	const [productItems, setProductItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

  // const [cart, setCart] = useState({});
	const { cart, updateCart } = useCart();


	// Replace with your backend's base URL
	const BASE_URL = 'http://192.168.127.87:3001/api';
	

	useEffect(() => {
		const getProductTypes = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/producttypes/${itemDetails.product_id}`);
				setProductItems(response.data);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};
		getProductTypes();
	}, []);



	// // Load cart from AsyncStorage when the app mounts
  // useEffect(() => {
  //   const loadCart = async () => {
  //     const savedCart = await AsyncStorage.getItem('cart');
  //     if (savedCart) {
  //       setCart(JSON.parse(savedCart));
  //     }
  //   };

  //   loadCart();
  // }, []);

  // // Save cart to AsyncStorage whenever it changes
  // useEffect(() => {
  //   const saveCart = async () => {
  //     await AsyncStorage.setItem('cart', JSON.stringify(cart));
  //   };

  //   saveCart();
  // }, [cart]);


	// const updateCart = (itemId, quantity) => {
  //   setCart(prevCart => {
  //     if (quantity <= 0) {
  //       const { [itemId]: _, ...newCart } = prevCart; // Remove item if quantity is 0
  //       return newCart;
  //     }
  //     return { ...prevCart, [itemId]: quantity };
  //   });
  // };

	return (
		<View style={styles.container}>
			<View style={styles.imageBox}>
			<ImageBackground
				source={require('../../../assets/images/spaghetti.png')}
				resizeMode="cover"
				style={styles.backgroundImage}
			>
			<LinearGradient colors={['transparent', COLORS.black]} style={styles.boxGradient} />
				<View style={styles.section1}>
					<Text style={styles.titleText}>{itemDetails.name}</Text>
					<View style={styles.ratingBox}>
						<Ionicons name='star' style={styles.ratingStar} />
						<Ionicons name='star' style={styles.ratingStar} />
						<Ionicons name='star' style={styles.ratingStar} />
						<Ionicons name='star' style={styles.ratingStar} />
						<Ionicons name='star' style={styles.ratingStar} />
					</View>
					{/* <Text style={styles.subTitle}>8 tubers</Text> */}
				</View>
				<Text style={styles.descText}>{itemDetails.description}</Text>
			</ImageBackground>
		</View>


			<View style={styles.section2}>
				<Text style={styles.sectionTitle}>Select type</Text>
				<View style={styles.listItemsContainer}>
					{productItems.map((item) => {    
						return (
							<ProductListItem item={item} key={item.type_id} updateCart={updateCart} cart={cart} />
						)
					})}
				</View>
				<CartBadge />
			</View>
		</View>
	)
}



export default ProductDetailScreen