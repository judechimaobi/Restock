import { StyleSheet, Platform } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: SIZES.medium,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.xxLarge,
    borderTopLeftRadius: SIZES.xxLarge,
    paddingBottom: SIZES.xxLarge * 3,

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.8,
        shadowRadius: 25,
      },
      android: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        elevation: 25,
      },
    }),
  },

  inputSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 2,
    borderRadius: SIZES.xSmall / 2
  },
  inputBtn: {
    padding: SIZES.xSmall / 2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
  },
  inputBtnText: {
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  inputIcon: {
    fontSize: SIZES.small
    // fontWeight: '900'
  },
  inputFieldBox: {
    marginHorizontal: SIZES.xSmall,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    borderRadius: SIZES.xSmall / 2,
    borderColor: '#eee',
    height: 30,
  },
  inputField: {
    textAlign: 'center',
    padding: SIZES.small / 4,

  },
  heartIcon: {
    fontSize: SIZES.xxLarge,
    color: COLORS.error,
  },
  addToCartBtn: {
    alignItems: 'center',
    padding: SIZES.xSmall,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small / 2,
    marginHorizontal: 5,
  },
  addToCartBtnText: {
    fontFamily: FONT.heavy,
    color: COLORS.white,
    textAlign: 'center',
  },
  
  cartIcon: {
    fontSize: SIZES.large,
  }




















});

export default styles;
