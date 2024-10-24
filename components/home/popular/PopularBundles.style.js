import { StyleSheet, Platform } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.small,
  },
  sectionHeader: {
    marginHorizontal: SIZES.small,
    paddingVertical: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  sectionHeaderTitle: {
    fontFamily: FONT.heavy,
    fontSize: SIZES.large,
    letterSpacing: -2,
  },
  sectionHeaderBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arrowIcon: {
    color: COLORS.primary
  },
  sectionHeaderBtnText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: COLORS.primary
  },

  sectionBody: {
    width: SIZES.xxLarge * 8,
    backgroundColor: COLORS.white,
    alignItems: 'left',
    marginRight: SIZES.small,
    marginLeft: SIZES.small,
    borderRadius: SIZES.small,
    marginBottom: SIZES.large,

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
  image: {
    width: SIZES.xxLarge * 8,
    height: SIZES.xxLarge * 4.5,
    borderRadius: SIZES.small,
    marginBottom: SIZES.xSmall / 4
  },
  productName: {
    textAlign: 'left',
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    maxWidth: SIZES.xLarge * 4.1,
  },
  productDetailBox: {
    paddingHorizontal: SIZES.small
  },
  subtitle: {
    textAlign: 'left',
    fontFamily: FONT.regular,
    fontSize: SIZES.xSmall,
    color: COLORS.gray,
  },
  sectionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xSmall,
  },
  price: {
    textAlign: 'left',
    fontFamily: FONT.heavy,
    fontSize: SIZES.medium / 1.5,
    color: COLORS.black,
    letterSpacing: -1,
  },
  sectionBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
    width: SIZES.xxLarge * 2.5,
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.xSmall / 1.5,
    
  },
  eyeIcon: {
    color: COLORS.white
  },
  sectionBtnText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xSmall,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: COLORS.white,
  },
  heartIcon: (favourite, item) => ({
    color: favourite == item.id ? COLORS.error : COLORS.gray
  }),
});

export default styles;
