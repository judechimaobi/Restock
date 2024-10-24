import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: '100%',
  },
  
  emptyImage: {
    width: '70%',
    marginTop: SIZES.large,
    alignSelf: 'center',
    height: 200,
    borderRadius: SIZES.small,
  },
  
  title: {
    paddingVertical: SIZES.large,
    fontFamily: FONT.heavy,
    fontSize: SIZES.xLarge,
    textAlign: 'center'
  },
  desc: {
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 20,
    paddingBottom: SIZES.large,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: SIZES.small,
  },
  btn: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    padding: SIZES.xSmall,
    borderRadius: SIZES.small / 2,
  },
  btnText: {
    fontFamily: FONT.heavy,
    fontSize: SIZES.small,
    color: COLORS.white,
    textAlign: 'center',
  },



});

export default styles;
