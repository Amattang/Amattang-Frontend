import { Dimensions, StyleSheet } from 'react-native';
import { mainBlue, mainLightBlue, mainOrange } from '../../color';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  checkListWrapper: { flexDirection: 'row' },

  whiteCard: {
    zIndex: 99,
    backgroundColor: 'white',
    padding: 30,
    width: windowWidth - 34,
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
  whiteText: {
    color: 'white',
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

  trashButton: {
    width: 60,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: mainBlue,
  },

  myItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  myItemMainTitle: {
    marginTop: 30,
  },

  myItemSubTitle: {
    marginTop: 15,
  },

  myItemInputBox: {
    borderRadius: 10,
    marginHorizontal: 17,
    marginTop: 10,
    paddingHorizontal: 17,
    paddingVertical: 15,

    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  myItemElements: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth - 94,
  },

  myItemBottomSheetButton: {
    width: 60,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
  },

  myItemElementsWrapper: {
    width: windowWidth - 34,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 17,
    marginTop: 10,
  },

  myItemDetailElementWrapper: {
    flexDirection: 'row',
    width: windowWidth - 34,
    marginLeft: 35,
    paddingVertical: 15,
  },

  myItemDetailElementText: {
    marginLeft: 10,
  },
  myItemCount: {
    marginLeft: 15,
  },
});

export default styles;
