import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
        View, 
        Dimensions, 
        Animated,
        Platform, } from 'react-native';

import Slides from './slides';
import SectionItem from './sectionItem';
import { COLORS } from '../../../constants';

const { width, height } = Dimensions.get('window');

const SPACING = 5;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.8 : width * 0.8;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / ITEM_SIZE;


const WelcomeBanner = ({ navigation }) => {

  const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);


  return (
    <View style={styles.container}>

      <Animated.FlatList
        data={Slides}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        bounces={false}
        keyExtractor={(item) => item.id}
        decelerationRate={Platform.OS === 'ios' ? 'fast' : 0.9}
        renderToHardwareTextureAndroid
        overScrollMode="never"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={16}
        ref={slidesRef}
        snapToInterval={ITEM_SIZE}
        renderItem={({ item, index }) => (
          <SectionItem
            item={item}
            scrollX={scrollX}
            index={index}
            ITEM_SIZE={ITEM_SIZE}
            SPACING={SPACING}
            EMPTY_ITEM_SIZE={EMPTY_ITEM_SIZE}
          />
        )}
      />

    </View> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default WelcomeBanner