import { StyleSheet, Platform } from "react-native";

import { FONT, SIZES, COLORS } from "../../../../constants";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    padding: SIZES.xSmall,

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        elevation: 10,
      },
    }),
  },
  






  
  itemImage: {
    width: '25%',
    height: 'auto',
    resizeMode: 'cover',
    borderRadius: SIZES.small,
  },
  rightSectionBox: {
    flex: 1,
    flexDirection: 'row',
    padding: SIZES.small,
    justifyContent: 'space-between',
    gap: 5,
  },
  detailBox: {
    width: '60%'
  },
  itemTitle: {
    fontFamily: FONT.heavy,
    fontSize: SIZES.xxLarge / 2.3,
  },
  itemDetails: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginBottom: SIZES.small
  },
  itemPrice: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: COLORS.black,
  },













  inputSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
    alignItems: 'center',
    borderRadius: SIZES.xSmall / 2
  },
  inputBtn: {
    padding: SIZES.small / 2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.xSmall / 2
  },
  inputBtnText: {
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  inputIcon: {
    fontSize: SIZES.small,
    color: COLORS.white,
    // fontWeight: '900'
  },
  inputFieldBox: {
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    borderRadius: SIZES.xSmall / 2,
    borderColor: '#eee',
    // height: 30,
  },
  inputField: {
    textAlign: 'center',
    padding: SIZES.small / 3,

  },
  heartIcon: {
    fontSize: SIZES.xxLarge,
    color: COLORS.error,
  },
























  deleteIconBox: {
    // backgroundColor: 'red',
  },



  orderContainer: {
    width: '100%',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: SIZES.small,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,

  },
  orderDetailsBox: {

  },
  orderId: {
    fontFamily: FONT.heavy,
    fontSize: SIZES.medium,
    textTransform: 'uppercase',
    color: COLORS.black,
  },
  detailText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large / 2,
    color: COLORS.gray,
    lineHeight: 20,
  },
  trackOrderBtn: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.xSmall / 2,
  },
  trackOrderBtnText: {
    textTransform: 'uppercase',
    fontFamily: FONT.bold,
    fontSize: SIZES.large / 2,
    textAlign: 'center',
    color: COLORS.white,
  },






});

export default styles;
