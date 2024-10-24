import { React, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CartItems.style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, SIZES } from '../../../constants';
import CartFooter from './../cartFooter/CartFooter';
import { useRouter } from 'expo-router';
import { useCart } from '../../../components/contexts/CartContext';
import CartEmpty from '../cartEmpty/CartEmpty';



// Group items by type_name and aggregate their quantities
const groupCartItems = (cart) => {
  const groupedItems = {};
  
  Object.values(cart).forEach((item) => {
    // Ensure that item.price and item.quantity are numbers
    if (groupedItems[item.type_name]) {
      groupedItems[item.type_name].quantity += item.quantity;
    } else {
      groupedItems[item.type_name] = { ...item };
    }
  });

  // Log the grouped items to verify
  // console.log('Grouped Items:', groupedItems);

  return Object.values(groupedItems);
};



const Item = ({ item, updateCart }) => {
  // const handleRemove = () => {
  //   updateCart(item, 'remove');
  // };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.rightSectionBox}>
        <View style={styles.detailBox}>
          <Text style={styles.itemTitle}>{item.type_name}</Text>
          <Text style={styles.itemDetails}>{item.price} x {item.quantity}</Text>
        </View>
        <TouchableOpacity style={styles.deleteIconBox}>
          <Ionicons name='trash' size={20} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const formatCurrency = (amount) => {
  return `NGN ${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

const CartItems = ({ selectedTabScreen }) => {
  const { cart, updateCart } = useCart();
  const [isEmpty, setIsEmpty] = useState(true);

  // Group items
  const groupedItems = groupCartItems(cart);

  // Calculate subtotal, shipping fee, VAT, and total amount
  const subtotal = groupedItems.reduce((total, item) => {
    const itemTotal = parseFloat(item.price) * (item.quantity || 0); 
    return total + (isNaN(itemTotal) ? 0 : itemTotal);
  }, 0);

  const shippingFee = 1500;
  const vat = subtotal * 0.075; // 7.5% VAT
  const totalAmount = subtotal + shippingFee + vat;

  // console.log(subtotal, "Formated: " + formatCurrency(subtotal));
  // return;
  return (
    <>
      {groupedItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: SIZES.medium, paddingTop: 0 }}>
            {
              groupedItems.map((item) => (
                <Item key={item.type_name} item={item} updateCart={updateCart} />
              ))
            }
          </ScrollView>
          <CartFooter 
            subtotal={formatCurrency(subtotal)} 
            shippingFee={formatCurrency(shippingFee)} 
            vat={formatCurrency(vat)} 
            totalAmount={formatCurrency(totalAmount)} 
            btnText={'Proceed to checkout'} btnRoute={'/(tabs)/cart/checkOut'}
            screen="cart"
          />
        </View>
      )}
    </>
  );
};

export default CartItems;

  // }

  // if (selectedTabScreen === 'Current Orders') {
  //   if (isEmpty) {
  //     return (
  //       <View>
  //         <Text>No order in progress...</Text>
  //         <Text>Your order in progress will appear here.</Text>
  //         <TouchableOpacity onPress={() => { setIsEmpty(false); }}><Text>Switch</Text></TouchableOpacity>
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: SIZES.medium, paddingTop: 0 }}>
  //         {CURRENT_ORDERS.map((item) => (
  //           <CurrentOrders key={item.id} item={item} />
  //         ))}
  //       </ScrollView>
  //     );
  //   }
  // }

  //return; // To handle cases where selectedTabScreen is neither 'My Cart' nor 'Current Orders'
