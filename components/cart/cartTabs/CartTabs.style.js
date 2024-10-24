import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // flex: 1
    // marginBottom: SIZES.small
  },
  tabBox: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: COLORS.lightWhite,
    // borderRadius: SIZES.small,
    // alignSelf: 'center'
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