import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({

	container: {
		flex: 1,
		padding: SIZES.medium,
	},
	sectionTitle: {
		textAlign: 'left',
		fontFamily: FONT.heavy,
		fontSize: SIZES.large,
		marginBottom: SIZES.small
	},
	card: (item, selectedDelivery) => ({
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius: SIZES.small,
		// backgroundColor: item == selectedDelivery  ? COLORS.lightPrimary : COLORS.white,
		borderWidth:  SIZES.xSmall / 4,
		borderColor:  item == selectedDelivery  ? COLORS.lightPrimary : COLORS.lightWhite,
		backgroundColor: COLORS.white,
		padding: SIZES.medium,
		marginBottom: SIZES.small
	}),
	checkbox: (item, selectedDelivery) => ({
		width: 30,
		height: 30,
		backgroundColor: item == selectedDelivery  ? COLORS.primary : COLORS.white,
		borderWidth: SIZES.small / 2,
		borderColor: item == selectedDelivery  ? COLORS.lightPrimary : COLORS.lightWhite,
		borderRadius: SIZES.large,
	}),
	cardDetailBox: {
		paddingHorizontal: SIZES.large
	},
	cardTitleText: {
		textAlign: 'left',
		fontFamily: FONT.bold,
		fontSize: SIZES.medium,
	},
	cardSubtitleText: {
		width: 170,
		textAlign: 'left',
		fontFamily: FONT.regular,
		fontSize: SIZES.xSmall,
		lineHeight: 14,
		color: COLORS.gray,
	},
	editBtnBox: {

	},
	editBtnText: {
		padding: 5,
		backgroundColor: COLORS.lightWhite,
		fontSize: SIZES.medium,
		borderWidth: SIZES.xSmall / 8,
		borderColor: '#eee',
		borderRadius: SIZES.small / 2,
	},


	// Payment method styles /////////////////////////////

	paymentCard: (item, selectedPayment) => ({
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: SIZES.small,
		borderWidth:  SIZES.xSmall / 4,
		borderColor:  item == selectedPayment  ? COLORS.lightPrimary : COLORS.lightWhite,
		backgroundColor: COLORS.white,
		padding: SIZES.medium,
		marginBottom: SIZES.small
	}),

	paymentCardDetailBox: {
		// paddingHorizontal: SIZES.large,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	imageIcon: {
		width: 40, 
		height: 40,
		marginRight: SIZES.small,
	},
	paymentCardTitleText: {
		textAlign: 'left',
		fontFamily: FONT.bold,
		fontSize: SIZES.medium,
	},
	paymentCheckbox: (item, selectedPayment) => ({
		width: 30,
		height: 30,
		backgroundColor: item == selectedPayment  ? COLORS.primary : COLORS.white,
		borderWidth: SIZES.small / 2,
		borderColor: item == selectedPayment  ? COLORS.lightPrimary : COLORS.lightWhite,
		borderRadius: SIZES.large,
	}),








});

export default styles;