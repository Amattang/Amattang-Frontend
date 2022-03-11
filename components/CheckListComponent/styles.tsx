import { StyleSheet } from 'react-native';
import { mainBlack, mainBlue, mainLightBlue, mainOrange } from '../../color';

const styles = StyleSheet.create({
  FullScreen: {
    backgroundColor: mainLightBlue,
    flex: 1,
  },

  whiteCard: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 14,
    marginVertical: 12,
    marginHorizontal: 17,
  },
  checkListMainTitle: { fontSize: 20 },
  buttonsOfCheckList: {
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonOfCheckList: {
    backgroundColor: mainLightBlue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subTitles: { marginTop: 14 },
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
  typeAExtendedBtnWrapper: {
    marginRight: 19,
    borderRadius: 4,
    paddingHorizontal: 14,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainLightBlue,
  },
  checkListFocusedBlue: { backgroundColor: mainBlue },
  checkListFocusedOrange: { backgroundColor: mainOrange },

  typeBBtnWrapper: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },

  floatingBtnWrapper: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainBlue,
    borderRadius: 55,
    position: 'absolute',
    right: 20,
    bottom: 50,
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

  container: {
    height: 110,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    height: 110,
    alignItems: 'center',
  },
  buttonOfbottomSheet: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    paddingVertical: 20,
  },
  blueText: {
    color: mainBlue,
  },
  bottomButtonOfBottomSheet: { flexDirection: 'row', marginTop: 10 },
  selectAllBtn: {
    width: 150,
    marginBottom: 30,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateCheckListButton: {
    borderRadius: 8,
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    backgroundColor: mainLightBlue,
  },
  deletedCheckListBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    marginHorizontal: 17,
    marginVertical: 5,
    padding: 20,
    backgroundColor: mainLightBlue,
  },
  deletedCheckListText: { fontSize: 16 },
  deletedCheckListWhiteText: { color: 'white', fontSize: 16 },
});

export default styles;
