import { StyleSheet, Platform } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({


  container: {
    // marginTop: -20,
    paddingTop: SIZES.xLarge * 3,
    padding: SIZES.large,
    gap: SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderTopRightRadius: SIZES.xxLarge,
    borderTopLeftRadius: SIZES.xxLarge,
  },
  imageBox: {
    backgroundColor:'red',
    flex: 1,
    height: SIZES.xxLarge * 12,
    borderRadius: SIZES.xLarge,
    overflow:'hidden',

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
  backgroundImage: {
    justifyContent: 'flex-end',
    height: SIZES.xxLarge * 12,
    padding: SIZES.small,
    paddingBottom: SIZES.large,
    
  },
  boxGradient: {
    borderBottomRightRadius: SIZES.xLarge,
    borderBottomLeftRadius: SIZES.xLarge,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  ratingBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  ratingStar: {
    color: 'orange',
    fontSize: 14,
    marginTop: SIZES.xSmall,
  },
  subTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray
  },
  section2: {
    // marginBottom: SIZES.medium
  },
  sectionTitle: {
    fontFamily: FONT.bold,
    textTransform: 'uppercase',
    fontSize: SIZES.small,
    color: COLORS.black,
    marginBottom: SIZES.xSmall,
  },
  listItemsContainer: {
    flex: 1,
  },
  typeBtn: (selected, item) => ({
    // width: 'auto',
    justifyContent: 'flex-start',
    padding: SIZES.small / 2,
    borderWidth: .5,
    borderColor: selected == item ? COLORS.primary : COLORS.grayDark,
    borderRadius: SIZES.small / 4,
    marginHorizontal: 5,
    marginBottom: SIZES.xSmall / 2,
    backgroundColor: selected == item ? COLORS.primary : null
  }),
  typeBtnText: (selected, item) => ({
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: selected == item ? COLORS.white : COLORS.grayDark,
    
  }),

  section3: {
    marginBottom: SIZES.medium
  },
  descText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
    lineHeight: SIZES.large
  },


















  // btnBox: {
  //   flex: 1,
  //   flexDirection: "row",
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  
  // clearBtn: (fullWidth) => ({
  //   width: fullWidth / 4,
  //   padding: SIZES.xSmall,
  //   borderRadius: SIZES.small / 2,
  //   borderWidth: SIZES.small / 10,
  //   borderColor: COLORS.primary,
  //   marginHorizontal: 5,
  // }),
  // clearBtnText: {
  //   color: COLORS.primary,
  //   textAlign: 'center',
  // },
  // showBtn: (fullWidth) => ({
  //   width: fullWidth / 1.7,
  //   padding: SIZES.xSmall,
  //   backgroundColor: COLORS.primary,
  //   borderRadius: SIZES.small / 2,
  //   marginHorizontal: 5,
  // }),
  // showBtnText: {
  //   color: COLORS.white,
  //   textAlign: 'center',
  // },







  // sectionHeader: {
  //   paddingVertical: SIZES.small,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: 'center'
  // },
  // sectionHeaderTitle: {
  //   fontFamily: FONT.bold,
  //   fontSize: SIZES.medium,
  // },
  // sectionHeaderBtn: {
  //   justifyContent: "space-between"
  // },
  // sectionHeaderBtnText: {
  //   fontSize: SIZES.small,
  //   color: COLORS.primary
  // },


  // measurementRow: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: SIZES.xSmall / 4
  // },

  // rowText: {
  //   fontFamily: FONT.regular,
  //   color: COLORS.black,
  // },
  // checkBoxSection: {

  // },
  // checkbox: {
  //   backgroundColor: COLORS.white,
  //   borderColor: COLORS.darkWhite,
  //   borderRadius: SIZES.xSmall / 1.5,
  // },


});

export default styles;
