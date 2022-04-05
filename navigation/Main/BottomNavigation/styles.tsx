import { StyleSheet } from 'react-native';
import { mainBlue, mainLightBlue } from '../../../color';

const styles = StyleSheet.create({
  activeColor: { color: mainBlue },
  inactiveColor: { color: mainLightBlue },
  title: { fontSize: 12, fontFamily: 'AppleSDGothicNeoB00' },
  btnWrapper: {
    position: 'absolute',
    width: 55,
    height: 55,
    backgroundColor: mainBlue,
    borderRadius: 50,
    marginHorizontal: 170,
    bottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
    paddingBottom: 2.5,
    paddingLeft: 2.5,
  },
  setting: {
    marginRight: 20,
  },
});

export default styles;
