import { StyleSheet } from 'react-native';
import { fontGray, mainBlue, white } from '../../color';

export const styles = StyleSheet.create({
  container: {
    height: 210,
    padding: 17,
    backgroundColor: white,
  },
  mainAddress: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 11,
  },
  detailAddress: {
    borderColor: fontGray,
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 29,
    padding: 0,
    marginBottom: 25,
    paddingLeft: 12,
  },
  bottomBtn: {
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addressBtn: {
    backgroundColor: mainBlue,
  },
  settingText: {
    color: 'white',
  },
});
