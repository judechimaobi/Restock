import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({

  container: {
    width: '100%',
    padding: SIZES.large,
    paddingBottom: SIZES.xLarge,
    paddingTop: SIZES.xSmall,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: SIZES.xLarge * 2,
    borderBottomRightRadius: SIZES.xLarge * 2,
    marginBottom: SIZES.large
  },
  profilePicSection: {
    marginBottom: SIZES.large,
  },
  profilePicBox: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: COLORS.white,
    marginBottom: SIZES.small,
  },
  profilePicText: {
    fontFamily: FONT.heavy,
    color: COLORS.white,
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  profileName: {
    fontFamily: FONT.bold,
    color: COLORS.white,
    fontSize: SIZES.large,
    textAlign: 'center',
  },


  walletSection: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: SIZES.large,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  walletBox: {
    flexDirection: 'row',
    marginBottom: SIZES.large,
    alignItems: 'center',
  },
  walletInnerBox: {

  },
  eyeBtn: {
    marginRight: SIZES.xSmall,
  },
  walletTitleText: {
    fontFamily: FONT.heavy,
    fontSize: SIZES.large,
    color: COLORS.white,
    letterSpacing: -1.5
  },
  walletSubtitleText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xSmall,
    color: COLORS.white,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.medium
  },


  actionBtnSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.large,
  },
  btn: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 3,
    padding: SIZES.small / 2,
    marginHorizontal: SIZES.small / 3
  },
  btnText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xSmall,
    color: COLORS.primary,
    textAlign: 'center',
  },
  ProfileDetailsSection: {
    
  },
  detailtext: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xSmall,
    color: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.xSmall,
  },
  lowerSection: {
    flexDirection: 'row',
    fontFamily: FONT.bold,
    fontSize: SIZES.xSmall,
    color: COLORS.white,
    justifyContent: 'space-around'
  },

});

export default styles;
