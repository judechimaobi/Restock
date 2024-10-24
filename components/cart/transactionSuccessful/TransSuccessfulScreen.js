import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './TransSuccessfulScreen.styles';
import { ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../../../constants';
import { useRouter } from 'expo-router';





const TransSuccessful = () => {

const router = useRouter();
return (
	<View style={styles.container}>
		<View style={styles.body}>
			<Image source={require('../../../assets/icons/tick-circle.png')} style={styles.tickImage} />
			<Text style={styles.title}>Transaction Successful</Text>

			<TouchableOpacity style={styles.btn1} onPress={()=>{router.push({pathname: '/(tabs)/cart/'})}}>
				<Text style={styles.btn1Text}>Continue shopping</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn2} onPress={()=>{alert("Shared")}}>
				<Text style={styles.btn2Text}>Share</Text>
			</TouchableOpacity>
		</View>
	</View>
)}
export default TransSuccessful