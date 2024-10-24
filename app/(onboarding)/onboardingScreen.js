import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, useWindowDimensions, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, useRouter } from 'expo-router';

import Slides from './slides';
import OnboardingItem from './onboardingItem';
import Paginator from './paginator';
import { COLORS, FONT, SIZES } from '../../constants';

export default function OnboardingScreen() {
	const router = useRouter();
	const { width, height } = useWindowDimensions();

	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	
	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
	const slidesRef = useRef(null);

// BUTTON ANIMATION
	const [btnText, setBtnText] = useState('Next');
	const scrollTo = async () => {
		if (currentIndex < Slides.length - 2) {
			setBtnText('Next');
			slidesRef.current.scrollToIndex({index: currentIndex + 1});
		} else if (currentIndex === Slides.length - 2) {
			setBtnText('Get started');
			slidesRef.current.scrollToIndex({index: currentIndex + 1});
		} else {
			try {
				AsyncStorage.setItem('HAS_LAUNCHED', 'true');
				AsyncStorage.getItem('HAS_LAUNCHED', (err, result) => {
					console.log(result);
					Updates.reloadAsync();
					// router.replace("../(tabs)/home");
				});
				// console.log(setViewedOnboarding(true))

				
				
				// setViewedOnboarding(true)
				// console.log(AsyncStorage.getItem('viewedOnboarding'))
				// alert("OK")
				
				// Updates.reloadAsync();
			} catch (err) {
				console.log('Error @setItem: ', err);
			}
		}
		console.log(Slides.length - 2, currentIndex);
	};



	return (
    <View style={[styles.container, {width}]}>
			<FlatList
				data={Slides}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <OnboardingItem item={item} />}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
					useNativeDriver: false,
				})}
				onViewableItemsChanged={viewableItemsChanged}
				viewabilityConfig={viewConfig}
				scrollEventThrottle={32}
				ref={slidesRef}
			/>

			<View style={styles.btnView}>
				<Paginator data={Slides} scrollX={scrollX} />
				<TouchableOpacity style={styles.btn} onPress={scrollTo}>
					<Text style={styles.btnText}>{btnText} <Ionicons name='arrow-forward' size={18} /></Text>
				</TouchableOpacity>
			</View>
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

	btnView: {
		flex: 0.15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30,
	},
	btn: {
		justifyContent:'center',
		marginRight: -SIZES.xxLarge,
		alignItems: 'center',
		height: SIZES.xLarge * 2,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: SIZES.large * 2,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: COLORS.primary,
		marginTop: -10
	},
	btnText: {
		color: '#ffffff',
		textAlignVertical: 'center',
		fontFamily: FONT.bold,
	}
});

