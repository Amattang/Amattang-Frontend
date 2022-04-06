import { StyleSheet } from 'react-native';
import { mainLightBlue } from '../../color';

export const styles = StyleSheet.create({
  directInputOfAddress: {
    width: 127,
    height: 44,
  },
  buttonOfCheckList: {
    backgroundColor: mainLightBlue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  directInputTextOfAddress: { color: 'gray' },
  header: {
    height: 102,
  },
  close: {
    zIndex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 26.58,
    top:56.58,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    top: 53,
  },
});
