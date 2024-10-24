import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './PaymentAuthScreen.styles';
import { ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../../../constants';
import { useRouter } from 'expo-router';






const AuthorizeTrans = () => {
const router = useRouter();

return (
	<View style={styles.container}>
		<View style={styles.body}>
			<Text style={styles.title}>Enter Transaction Pin</Text>
			<TextInput secureTextEntry={true} style={styles.passwordField} keyboardType='numeric' maxLength={6} />
			<TouchableOpacity style={styles.btn} onPress={()=>{alert('Transaction Authorized!'); router.push({pathname: '/(tabs)/cart/transactionSuccessful'}) }}>
				<Text style={styles.btnText}>Authorize</Text>
			</TouchableOpacity>
		</View>
	</View>
)}
export default AuthorizeTrans