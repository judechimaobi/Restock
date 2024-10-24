import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({



	container: {
		flex: 1,
		marginTop: SIZES.xLarge * 4,
		justifyContent: 'center',
	},

	tickImage: {
		width: 70,
		height: 70,
		alignSelf: 'center',
		borderRadius: 100,
	},
	body: {
		alignSelf: 'center',
	},
	title: {
		textAlign: 'center',
		fontFamily: FONT.heavy,
		fontSize: SIZES.large,
		color: COLORS.white,
		marginTop: SIZES.xLarge,
		marginBottom: SIZES.xLarge * 2,
	},
	
	btn1: {
		width: '100%',
		borderRadius: SIZES.xSmall / 2,
		backgroundColor: COLORS.white,
		padding: SIZES.xSmall,
		alignSelf: 'center',
		marginBottom: SIZES.small,
	},
	btn1Text: {
		fontFamily: FONT.bold,
		color: COLORS.primary,
		textAlign: 'center',
		fontSize: SIZES.small
	},

	btn2: {
		width: '100%',
		borderWidth: 1,
		borderColor: COLORS.white,
		borderRadius: SIZES.xSmall / 2,
		padding: SIZES.xSmall,
		alignSelf: 'center',
		marginBottom: SIZES.small,
	},
	btn2Text: {
		fontFamily: FONT.bold,
		color: COLORS.white,
		textAlign: 'center',
		fontSize: SIZES.small
	},

});

export default styles;