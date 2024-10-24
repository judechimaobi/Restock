import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './OrderStatusScreen.styles';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../../../constants';
import { useRouter } from 'expo-router';






const OrderStatusScreen = () => {

const router = useRouter();

return (
	<ScrollView style={styles.container}>
		<View style={styles.topSection}>
			<Image source={require('../../../assets/images/bachelor.jpg')} style={styles.itemImage} />
			<Text style={styles.itemTitle}>Order-3089</Text>
			<Text style={styles.itemDesc}>Delievery date: 10/12/2023</Text>
		</View>

		<TouchableOpacity style={styles.trackBtn} onPress={()=>{router.push({pathname: '/(tabs)/cart/trackOrderMap'})}}>
			<Text style={styles.trackBtnText}>Track order on map</Text>
		</TouchableOpacity>

		<View style={styles.box}>
			<View style={styles.row}>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}>Order Confirmed</Text>
				</View>
				<View style={styles.circle}></View>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}></Text>
				</View>
			</View>
			<View style={styles.line}></View>


			<View style={styles.row}>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}></Text>
				</View>
				<View style={styles.circle}></View>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}>Preparing order</Text>
					<Text style={styles.labelSubText}>Takes about 24 hour</Text>
				</View>
			</View>
			<View style={styles.line}></View>

			<View style={styles.row}>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}>Rider is picking up your order</Text>
				</View>
				<View style={styles.circle}></View>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}></Text>
				</View>
			</View>
			<View style={styles.line}></View>

			<View style={styles.row}>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}></Text>
				</View>
				<View style={styles.circle}></View>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}>On the way</Text>
				</View>
			</View>
			<View style={styles.line}></View>

			<View style={styles.row}>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}>Rider is at your place</Text>
				</View>
				<View style={styles.circle}></View>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}></Text>
				</View>
			</View>
			<View style={styles.line}></View>

			<View style={styles.row}>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}></Text>
				</View>
				<View style={styles.circle}></View>
				<View style={styles.labelBox}>
					<Text style={styles.labelText}>Delivered</Text>
				</View>
			</View>
	</View>



	</ScrollView>
)}
export default OrderStatusScreen