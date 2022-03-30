import { StyleSheet } from 'react-native';
import { mainBlue } from '../../color';

const styles = StyleSheet.create({
  modalWrapper: { justifyContent: 'flex-end', flex: 1 },
  cameraModalXBtn: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cameraModalElementBtnWrapper: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
  },
  horizantalLine: { height: 1, backgroundColor: '#D8D8D8' },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  cameraModalInnerText: {
    fontSize: 18,
    color: mainBlue,
  },
  cameraModalBoldText: {
    fontFamily: 'AppleSDGothicNeoB00',
  },
  cameraModalEachBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});
export default styles;
