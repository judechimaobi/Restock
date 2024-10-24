import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, ImageBackground} from 'react-native';
import { COLORS, icons, images, SIZES, FONT } from '../../constants';
export default function OnboardingItem({ item }) {
	const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
		<ImageBackground source={item.image} style={[styles.image, { width }]}>
			<View style={[styles.textView, { width }]}>
				<Text style={styles.titleText}>{item.title}</Text>
				<Text style={styles.readTextDesc}>{item.description}</Text>
			</View>
		</ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
		resizeMode: 'cover',
	},
	textView: {
		flex: 0.37,
		borderTopRightRadius: SIZES.xLarge * 3,
		borderTopLeftRadius: SIZES.xLarge * 3,
		paddingTop: SIZES.large * 2,
		backgroundColor: COLORS.white,
	},
	titleText: {
		maxWidth: '100%',
		paddingHorizontal: SIZES.large,
		paddingTop: 5,
		paddingBottom: SIZES.large,
		fontFamily: FONT.heavy,
		fontSize: SIZES.large * 2,
		letterSpacing: -3,
		textAlign: 'center',
		lineHeight: SIZES.large * 1.8,
		
	},
	readTextDesc: {
		marginTop: -15,
		paddingHorizontal: SIZES.large,
		fontFamily: FONT.regular,
		fontSize: SIZES.medium,
		textAlign: 'center',
		lineHeight: SIZES.large,
	},
});
