import React from 'react';
import { View, Text } from 'react-native';
import { useCart } from '../../../components/contexts/CartContext'; // Import useCart
import styles from './CartBadge.style';

const CartBadge = () => {
  const { totalItems } = useCart(); // Get totalItems from the context

  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{totalItems}</Text>
    </View>
  );
};

export default CartBadge;
