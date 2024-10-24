import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 30,
    height: 30,
    // backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.large / 1.25,
    borderWidth: SIZES.xSmall / 5,
    borderColor: COLORS.primary,
  }),
});

export default styles;
