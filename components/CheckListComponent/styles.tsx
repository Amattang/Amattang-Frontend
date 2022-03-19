import { Dimensions, StyleSheet } from 'react-native';
import { mainBlue, mainLightBlue, mainOrange } from '../../color';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  checkListWrapper: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 17,
  },

  whiteCard: {
    zIndex: 99,
    backgroundColor: 'white',
    padding: 30,
    width: windowWidth - 34,
    borderRadius: 14,
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

  typeDInputBtnWrapper: {
    width: 100,
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
    marginHorizontal: 17,
    marginVertical: 8,
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
    borderRadius: 10,
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
    marginLeft: 20,
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
    width: 50,
    height: 57,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    paddingVertical: 10,
  },

  myItemDetailElementText: {
    marginLeft: 10,
  },
  myItemCount: {
    marginLeft: 15,
  },
  myItemBottomSheetWrapper: { justifyContent: 'space-between', flex: 1 },

  myItemBottomSheetFinishButton: {
    marginBottom: 35,
  },

  deleteMyItem: { position: 'absolute', right: 0, top: 0, width: 50, height: 50 },
  myItemCategoryName: {
    marginHorizontal: 30,
    color: mainBlue,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  myItemElementsOfBottomSheets: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  myItemEachElementOfBottomSheets: { marginVertical: 10, marginLeft: 10 },
  addMyItemEachElementOfBottomSheets: { marginTop: 20, marginHorizontal: 30 },
});

export default styles;
