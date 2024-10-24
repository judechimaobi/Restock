import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CheckOutScreen.styles';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../../../constants';
import { useLocalSearchParams, useRouter } from 'expo-router';
import CartFooter from '../cartFooter/CartFooter';





const DELIVERY_LOCATIONS = [
	{
		id : 1,
		name: 'Dr. Marchus Ezema',
		address: 'No. 61 Ezeako Street, Achara Layout, Enugu',
		phone: '08103045678',
	},
	// {
	// 	id : 3,
	// 	name: 'Madam Ewe Akuudo',
	// 	address: 'No. 191 Ekwulobia Street, New Haven, Enugu',
	// 	phone: '08103045678',
	// },
	{
		id : 2,
		name: 'Sydney Eze',
		address: 'No. 65 Alo Street, Enu-ana, Enugu',
		phone: '08103045678',
	}
]

const PAYMENT_METHODS = [
	{
		id : 1,
		name : 'My Wallet',
		image: require('../../../assets/images/wallet.png'),
		details: 'N19,750'
	},
	{
		id : 2,
		name : 'Debit Card',
		image: require('../../../assets/images/debitcard.png'),
		details: '2599 8937 **** ****',
	},
]



const DeliveryCard = ({item, selectedDelivery, setSelectedDelivery}) => {
	return (
				<TouchableOpacity style={styles.card(item.id, selectedDelivery)} onPress={() => {setSelectedDelivery(item.id)}}>
					<TouchableOpacity style={styles.checkbox(item.id, selectedDelivery)} 
						onPress={() => {setSelectedDelivery(item.id)}}>
					</TouchableOpacity>
					<View style={styles.cardDetailBox}>
						<Text style={styles.cardTitleText}>{item.name}</Text>
						<Text style={styles.cardSubtitleText}><Ionicons name='location' /> {item.address}</Text>
						<Text style={styles.cardSubtitleText}><Ionicons name='call' /> {item.phone}</Text>
					</View>
					<TouchableOpacity style={styles.editBtnBox}>
						<Ionicons name='pencil' style={styles.editBtnText} />
					</TouchableOpacity>
				</TouchableOpacity>
	)
}


const PaymentCard = ({item, selectedPayment, setSelectedPayment}) => {
	
	return (
		<TouchableOpacity style={styles.paymentCard(item.id, selectedPayment)} onPress={() => {setSelectedPayment(item.id)}}>
			
			<View style={styles.paymentCardDetailBox}>
				<Image source={item.image} style={styles.imageIcon} />
				<View>

					<Text style={styles.paymentCardTitleText}>{item.name}</Text>
					<Text style={styles.cardSubtitleText}>{item.details}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.paymentCheckbox(item.id, selectedPayment)} 
				onPress={() => {setSelectedPayment(item.id)}}>
			</TouchableOpacity>
		</TouchableOpacity>
	)
}


const currencyToNumber = (currencyString) => {
	// Remove the currency symbol (e.g., "NGN ") and any commas
	const cleanedString = currencyString.replace(/NGN\s|,/g, '').trim();
	
	// Convert to number
	const numberValue = parseFloat(cleanedString);
	
	return isNaN(numberValue) ? 0 : numberValue; // Return 0 if conversion fails
};


const CheckOutScreen = () => {
	const { item } = useLocalSearchParams();


	const formattedAmount = JSON.parse(item);
	const amount = currencyToNumber(JSON.parse(item));
	// console.log(amount);

	const router = useRouter();
	const [selectedDelivery, setSelectedDelivery] = useState();
	const [selectedPayment, setSelectedPayment] = useState();



	return (
		<View style={{flex: 1}}>
			<View style={styles.container}>

				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style={styles.sectionTitle}>Deliver to</Text>
					{DELIVERY_LOCATIONS.map((item) => {
						return (
							<DeliveryCard
								key={item.id} // Add a unique key
								item={item}
								selectedDelivery={selectedDelivery}
								setSelectedDelivery={setSelectedDelivery}
							/>
						);
					})}

					<Text style={styles.sectionTitle}>Payment method</Text>

					{PAYMENT_METHODS.map((item) => {
						return (
							<PaymentCard
								key={item.id}
								item={item}
								selectedPayment={selectedPayment}
								setSelectedPayment={setSelectedPayment}
							/>
						);
					})}

				</ScrollView>	
			
			</View>

			<CartFooter totalAmount={formattedAmount} btnText={'Pay'} btnRoute={'/(tabs)/cart/paymentAuth'} screen={"checkout"} />
		</View>
	)
}
export default CheckOutScreen