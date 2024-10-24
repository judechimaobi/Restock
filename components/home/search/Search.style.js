import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.large,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SIZES.small,
    // marginRight: SIZES.small,
  },
  searchInputContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    flex: .95,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: SIZES.small,
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    // height: "100%",
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xSmall,
  },

  filterBtn: {
    width: 48,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.xSmall,
    justifyContent: "center",
    alignItems: "center",
  },

  
});

export default styles;
