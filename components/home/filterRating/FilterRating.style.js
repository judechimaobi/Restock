import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.small,
  },
  sectionHeader: {
    paddingVertical: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  sectionHeaderTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  sectionHeaderBtn: {
    justifyContent: "space-between"
  },
  sectionHeaderBtnText: {
    fontSize: SIZES.small,
    color: COLORS.primary
  },

  ratingRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingStarSection: {
    
  },
  ratingStarBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ratingStar: {
    marginRight: SIZES.xSmall / 3,
    color: COLORS.primary
  },
  checkBoxSection: {

  },
  checkbox: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.darkWhite,
    borderRadius: SIZES.xSmall / 1.5,
  },

});

export default styles;
