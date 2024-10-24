import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -SIZES.xSmall,
    right: SIZES.small,
    zIndex: 2,
    padding: SIZES.xSmall / 3,
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.error,
    borderWidth: 2,
    borderColor: COLORS.white,
    
  },
  badgeText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.large / 2.3 
  },


});

export default styles;
