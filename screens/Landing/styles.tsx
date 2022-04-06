import { StyleSheet, Platform } from 'react-native';
import { mainBlack, mainBlue, mainLightBlue, mainOrange } from '../../color';

const styles = StyleSheet.create({
  landingPageFullScreen: { backgroundColor: 'white', flex: 1, fontFamily: 'AppleSDGothicNeoM' },
  onBoardingFullScreen: {
    backgroundColor: mainLightBlue,
    flex: 1,
  },
  upperElement:
    Platform.OS === 'ios'
      ? { marginTop: 110, marginHorizontal: 17 }
      : { marginTop: 50, marginHorizontal: 17 },
  lowerElement:
    Platform.OS === 'ios'
      ? { position: 'absolute', bottom: 60, marginHorizontal: '5%', width: '90%' }
      : { position: 'absolute', bottom: 40, marginHorizontal: '5%', width: '90%' },
  mainText: { fontSize: 24, lineHeight: 40, color: mainBlack },
  subText: { fontSize: 16, marginTop: 32, lineHeight: 30, color: mainBlack },

  mainImage: { alignItems: 'flex-end', marginTop: 30 },
  loginImage: { alignItems: 'flex-end', marginRight: 30, marginTop: 80 },

  bottomBtn: {
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomImg: { marginRight: 10 },

  loginBtn: { backgroundColor: mainBlue },
  loginText: { color: 'white' },
  onBoardingBtn: { backgroundColor: mainLightBlue, marginTop: 12 },
  onBoardingText: { color: mainBlack },

  appleLoginBtn: { backgroundColor: 'black' },
  appleLoginText: { color: 'white' },
  kakaoLoginBtn: { backgroundColor: '#FEE500', marginTop: 12 },
  kakaoLoginText: {},

  whiteCard: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 14,
    marginVertical: 12,
    marginHorizontal: 17,
  },
  checkListMainTitle: { fontSize: 20 },
  buttonsOfCheckList: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonOfCheckList: {
    backgroundColor: mainLightBlue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  directInputOfAddress: {
    width: 127,
    height: 44,
  },
  directInputTextOfAddress: { color: 'gray' },
  mapInputOfAddress: { width: 89, marginLeft: 14, flexDirection: 'row' },
  mapInputImageOfAddress: { marginRight: 8 },

  subTitles: { marginTop: 19 },
  checkListSubTitle: { flexDirection: 'row' },
  checkListGrayText: { color: '#7C7C7C', lineHeight: 24 },
  checkListWhiteText: { color: 'white', lineHeight: 24 },
  typeABtnWrapper: {
    marginRight: 19,
    borderRadius: 4,
    width: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainLightBlue,
  },
  checkListFocusedBlue: { backgroundColor: mainBlue },
  checkListFocusedOrange: { backgroundColor: mainOrange },

  floatingBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    position: 'absolute',
    right: 20,
    bottom: 70,
  },

  emoji: { lineHeight: 24, fontSize: 12 },

  typeDBtnWrapper: {
    flexDirection: 'row',
    margin: 5,
    borderRadius: 4,
    paddingHorizontal: 15,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainLightBlue,
  },
});

export default styles;
