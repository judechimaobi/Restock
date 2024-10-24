import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: SIZES.xLarge
  },
  bannerWrapper: {
    maxHeight: 130,
  },
  bannerImage: {
    width: SIZES.xxLarge * 7.5,
    borderRadius: SIZES.medium,
    resizeMode: 'cover',
    maxHeight: 130,
    marginRight: SIZES.small
  },
});

export default styles;
