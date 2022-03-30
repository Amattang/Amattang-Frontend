import { Dimensions, StyleSheet } from 'react-native';
import { mainBlue, mainLightBlue, mainOrange } from '../../color';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  profileSettingOuterWrapper: { backgroundColor: 'white', flex: 1, height: windowHeight },

  profileSettingName: {
    color: mainBlue,
    margin: 20,
    fontSize: 18,

    fontFamily: 'AppleSDGothicNeoB00',
  },
  profileSettingInnerWrapper: {
    backgroundColor: mainLightBlue,
    margin: 17,
    borderRadius: 16,
  },
  profileSettingTitle: {
    color: '#ADADAD',
    lineHeight: 22,
    fontSize: 18,
    margin: 20,
    marginTop: 15,
  },
  profileSettingEachElementWrapper: {
    borderTopColor: '#CACACA',
    borderStyle: 'solid',
    borderColor: 'black',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },

  horizontalLine: {
    height: 0.4,
    backgroundColor: '#CACACA',
    marginTop: 10,
  },
  profileSettingEachElementText: {
    fontFamily: 'AppleSDGothicNeoM00',
    fontSize: 18,
  },
  profileSettingBottomElements: {
    marginTop: 15,
    marginBottom: 30,
  },
  redText: {
    color: mainOrange,
  },
});

export default styles;
