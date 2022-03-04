import { StyleSheet } from 'react-native';
import { mainBlack, mainBlue, mainLightBlue } from '../../color';

const styles = StyleSheet.create({
  landingPageFullScreen: { backgroundColor: 'white', flex: 1 },
  onBoardingFullScreen: { backgroundColor: mainLightBlue, flex: 1 },
  upperElement: { marginTop: 115, marginHorizontal: 17 },
  lowerElement: { position: 'absolute', bottom: 60, marginHorizontal: '5%', width: '90%' },
  mainText: { fontSize: 24, lineHeight: 40, color: mainBlack },
  subText: { marginTop: 32, lineHeight: 30, color: mainBlack },

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

  checkListCards: { marginTop: 30 },
  whiteCard: { marginHorizontal: 17, backgroundColor: 'white', padding: 30, borderRadius: 14 },
  checkListMainTitle: { fontSize: 20 },
  buttonsOfCheckList: { marginTop: 50, flexDirection: 'row' },
  buttonOfCheckLIst: {
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
});

export default styles;
