import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({



	container: {
		flex: 1,
		justifyContent: 'center',
	},


	body: {
		alignSelf: 'center',
	},
	title: {
		textAlign: 'center',
		fontFamily: FONT.heavy,
		fontSize: SIZES.medium,
	},
	passwordField: {
		backgroundColor: COLORS.white,
		borderRadius: SIZES.xSmall,
		padding: SIZES.small / 2.5,
		marginVertical: SIZES.large,
		textAlign: 'center',
		fontSize: SIZES.xxLarge,
		letterSpacing: SIZES.small
	},
	
	btn: {
		// width: 140,
		borderRadius: SIZES.xSmall / 2,
		backgroundColor: COLORS.primary,
		padding: SIZES.xSmall,
		alignSelf: 'center',
		marginBottom: SIZES.large,
	},
	btnText: {
		fontFamily: FONT.heavy,
		color: COLORS.white,
		textAlign: 'center',
		fontSize: SIZES.small
	},

});

export default styles;