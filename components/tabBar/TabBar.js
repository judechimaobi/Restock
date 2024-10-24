// TabBar.js

import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SIZES, COLORS } from "../../constants"; // Ensure correct path
import styles from './TabBar.style';
import TabBarButton from './TabBarButton';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function TabBar({ state, descriptors, navigation }) {
  
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const buttonWidth = dimensions.width / state.routes.length;
  
  const onTabBarLayout = (e) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  // Move tab when isFocused changes
  useEffect(() => {
    const focusedIndex = state.index;
    tabPositionX.value = withSpring(buttonWidth * focusedIndex, {
      mass: 1,
      damping: 10,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
    });
  }, [state.index, buttonWidth]);

  return (
    <View style={styles.container} onLayout={onTabBarLayout}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: 'absolute',
            backgroundColor: COLORS.primary,
            borderRadius: 30,
            marginHorizontal: 12,
            height: buttonWidth - 22,
            width: buttonWidth - 22,
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {
            mass: 1,
            damping: 10,
            stiffness: 100,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
          });
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton 
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? COLORS.primary : '#222'}
            label={label}
          />
        );
      })}
    </View>
  );
}
