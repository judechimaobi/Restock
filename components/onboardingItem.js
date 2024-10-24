import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';

export default function OnboardingItem({ item }) {
	const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
			<Image source={item.image} style={[styles.image, { width }]} />

			<View style={[styles.textView, { width }]}>
				<Text style={styles.titleText}>{item.title}</Text>
				<Text style={styles.readTextDesc}>{item.description}</Text>
			</View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
	image: {
		flex: 0.7,
		resizeMode: 'contain',
	},
	textView: {
		flex: 0.3,
	},
	titleText: {
		fontSize: 42,
		textAlign: 'left',
		paddingLeft: 30,
		fontFamily: 'Oswald-Bold'
	},
	readTextDesc: {
		width: '70%',
		flex: 1,
		fontSize: 14,
		textAlign: 'left',
		padding: 10,
		paddingLeft: 30,
		fontFamily: 'Montserrat-Regular',
		lineHeight: 25,
	},
});
