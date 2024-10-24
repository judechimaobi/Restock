import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // bottom: 140,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.darkWhite,
    marginBottom: SIZES.small,
    borderRadius: SIZES.small,
  },
  
  itemImage: {
    width: '35%',
    height: 'auto',
    resizeMode: 'cover',
    borderRadius: SIZES.small,
  },
  rightSectionBox: {
    flex: 1,
    alignItems:'center',
    flexDirection: 'row',
    padding: SIZES.small
  },
  detailBox: {
    // backgroundColor: COLORS.primary,
    flex: 1,
    flexDirection: 'column',
    gap: 15,
  },
  itemTitle: {
    fontFamily: FONT.heavy,
    fontSize: SIZES.xxLarge / 2.3,
  },
  itemDetails: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray,
    // marginBottom: SIZES.small
  },
  itemPrice: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: COLORS.black,
  },
  deleteIconBox: {
    padding: SIZES.medium / 2,
    borderRadius: SIZES.large / 2,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#ffe3e3',
  },
  deleteIcon: {
    color: COLORS.grayDark
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
