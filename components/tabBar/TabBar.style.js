import { StyleSheet, Platform, Dimensions } from "react-native";

import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({


  container: {
    // flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: SIZES.xLarge,
    justifyContent: 'space-between',
    paddingVertical: SIZES.small,
    marginHorizontal: SIZES.xLarge,
    borderRadius: SIZES.large * 2,
    backgroundColor: COLORS.white,
    alignItems: 'center',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
      },
      android: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        elevation: 15,
      },
    }),
    },

  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  tabItemText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small
  },
  tabItemIcon: {

  },
  animatedBg: (dimensions) => ({
    position: 'absolute',
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    marginHorizontal: 12,
    height: dimensions.height - 15,
    width: dimensions.height - 15,

  })
});

export default styles;
