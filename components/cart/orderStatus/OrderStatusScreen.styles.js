import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({



	container: {
		flex: 1,
	},
	topSection: {
		marginBottom: SIZES.large,
	},
	itemImage: {
		width: '50%',
		alignSelf: 'center',
		height: SIZES.xLarge * 5,
		borderRadius: SIZES.large,
		marginBottom: SIZES.xSmall,
	},
	itemTitle: {
		textAlign: 'center',
		fontFamily: FONT.heavy,
		fontSize: SIZES.large,
	},
	itemDesc: {
		textAlign: 'center',
		fontFamily: FONT.regular,
		fontSize: SIZES.small,
		color: COLORS.gray,
	},

	trackBtn: {
		width: 140,
    borderRadius: SIZES.xSmall / 2,
    backgroundColor: COLORS.primary,
    padding: SIZES.xSmall,
		alignSelf: 'center',
		marginBottom: SIZES.large,
	},
	trackBtnText: {
		fontFamily: FONT.regular,
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZES.xSmall
	},



	box: {
		flex: 1
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	labelBox: {

	},
	labelText: {
		fontFamily: FONT.bold,
    fontSize: SIZES.small,
		width: 100,
		// textAlign: 'center',
	},
	labelSubText: {
		fontFamily: FONT.bold,
    fontSize: SIZES.xSmall,
		color: COLORS.gray,
		width: 100,
	},
	circle: {
		width: SIZES.xLarge,
		height: SIZES.xLarge,
		backgroundColor: COLORS.white,
		borderWidth: SIZES.xSmall / 2,
		borderColor: COLORS.primary,
		borderRadius: 20,
		marginHorizontal: SIZES.small
	},
	line: {
		width: SIZES.xSmall / 5,
		height: SIZES.xLarge * 2,
		alignSelf: 'center',
		borderStyle: 'dashed',
		borderWidth: SIZES.xSmall / 6,
		borderColor: COLORS.primary,
	},













  tabBtn: (selectedTab, item) => ({
    // flex: 1,
    // width: 140,
    // height: 'auto',
    borderRadius: SIZES.xSmall,
    backgroundColor: selectedTab == item ? COLORS.primary : COLORS.white,
    padding: SIZES.xSmall,
  }),
  tabTitle: (selectedTab, item) => ({
    fontFamily: FONT.regular,
    color: selectedTab == item ? COLORS.white : COLORS.black,
    textAlign: 'center',
    fontSize: SIZES.xSmall
  }),

});

export default styles;