import { StyleSheet } from 'react-native';
import { mainBlack, mainBlue, mainGray } from '../../color';

const styles = StyleSheet.create({
  fullScreen: { backgroundColor: 'white', flex: 1 },
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
  onBoardingBtn: { backgroundColor: mainGray, marginTop: 12 },
  onBoardingText: { color: mainBlack },

  appleLoginBtn: { backgroundColor: 'black' },
  appleLoginText: { color: 'white' },
  kakaoLoginBtn: { backgroundColor: '#FEE500', marginTop: 12 },
  kakaoLoginText: {},
});

export default styles;
