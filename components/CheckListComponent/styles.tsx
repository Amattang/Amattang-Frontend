import { Dimensions, StyleSheet } from 'react-native';
import { mainBlue, mainLightBlue, mainOrange } from '../../color';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  summaryImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFCFCF',
    width: windowWidth - 34,
    height: 260,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  textWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textWrapWrapper: { flexDirection: 'row', flexWrap: 'wrap' },
  summaryPinImg: { position: 'absolute', zIndex: 1000, top: 30, right: 15 },
  summaryMainImg: { marginBottom: 25 },
  summaryContentImg: { marginRight: 5 },
  distanceImg: { marginRight: 9 },
  summaryRightContents: { flexDirection: 'row' },
  summaryWrapper: { justifyContent: 'center', alignItems: 'center' },
  summaryContentAddress: { color: '#8C8CA1' },
  summaryContentTitle: { fontSize: 18 },
  summaryWhiteCardWrapper: {
    position: 'relative',
    marginBottom: -30,
    backgroundColor: 'white',
    width: windowWidth - 68,
    bottom: 50,
    padding: 19,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  summaryContentText: { fontSize: 12, lineHeight: 18 },
  summayWhiteCardContentWrapper: {
    justifyContent: 'space-between',
    height: 50,
    lineHeight: 18,
  },
  selectMainImageText: { fontSize: 16, color: mainBlue, fontFamily: 'AppleSDGothicNeoEB00' },
  imageModal: { position: 'absolute', right: -17 },
  selectedimageCancleButton: {
    alignItems: 'flex-end',
    width: windowWidth,
    padding: 20,
    marginBottom: 100,
  },
  selectedImageWrapper: { justifyContent: 'center', alignItems: 'center' },
  selectedImage: { width: windowWidth, height: windowWidth },
  imageSelectButtonWrapper: {
    marginHorizontal: 17,
    backgroundColor: 'white',
    marginTop: 80,
    paddingVertical: 20,
    width: windowWidth - 34,
    alignItems: 'center',
    borderRadius: 10,
  },
  imageWrapper: {
    flexDirection: 'row',
    flex: 3,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  eachImageElement: {
    flex: 1,
    width: windowWidth / 3 - 37,
    height: windowWidth / 3 - 37,
    marginVertical: 5,
    borderRadius: 4,
  },
  checkListWrapper: {
    zIndex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 17,
  },
  mainImageWrapper: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    width: windowWidth / 3 - 37,
    height: 25,
    backgroundColor: mainBlue,
    position: 'absolute',
    bottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageText: {
    color: 'white',
    fontSize: 12,
  },

  whiteCard: {
    zIndex: 99,
    backgroundColor: 'white',
    padding: 30,

    width: windowWidth - 34,
    borderRadius: 14,
  },
  checkListMainTitle: { fontSize: 20, lineHeight: 32 },
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

  subTitles: { flex: 1, marginTop: 14 },
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

  typeBBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

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
    marginBottom: 140,
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

  blankedMyItem: {
    marginTop: 100,
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
