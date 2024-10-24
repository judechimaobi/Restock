import React, { useEffect } from 'react';
import { View, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolate } from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './TabBar.style';
import { SIZES, COLORS } from '../../constants';
import CartBadge from '../cart/cartBadge/CartBadge';

export default function TabBarButton({ onPress, onLongPress, isFocused, routeName, color, label }) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {
      duration: 350,
    });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);

    return {
      transform: [{
        scale: scaleValue
      }],
      top
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });

  const icons = {
    home: (color) => <AntDesign name="home" size={SIZES.large} color={color} style={styles.tabItemIcon} />,
    categories: (color) => <Ionicons name="grid-outline" size={SIZES.large} color={color} style={styles.tabItemIcon} />,
    bundles: (color) => <Ionicons name="gift-outline" size={SIZES.large} color={color} style={styles.tabItemIcon} />,
    cart: (color) => <Ionicons name="cart-outline" size={SIZES.large} color={color} style={styles.tabItemIcon} />,
    profile: (color) => <Ionicons name="person-outline" size={SIZES.large} color={color} style={styles.tabItemIcon} />,
  };

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.tabItem}>
      {/* && badgeCount > 0 */}
      {routeName === 'cart' && (
        <CartBadge />
      )}
      <Animated.View style={animatedIconStyle}>
        {icons[routeName](isFocused ? COLORS.white : '#222')}
      </Animated.View>
      <Animated.Text style={[{ color: isFocused ? COLORS.white : '#222' }, styles.tabItemText, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
}

