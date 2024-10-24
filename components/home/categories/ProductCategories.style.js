import { StyleSheet } from "react-native";

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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginLeft: SIZES.small,
    width: SIZES.xxLarge * 2.5,
    height: SIZES.xxLarge * 2.5,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: SIZES.xSmall,
  },
  image: {
    width: SIZES.xxLarge * 2.5,
    height: SIZES.xxLarge * 2.5,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: SIZES.small,
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
    padding: SIZES.small,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: 'bold',
    textAlign: 'center',
  },



});

export default styles;
