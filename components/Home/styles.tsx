import { Platform, StyleSheet } from 'react-native';
import { mainBlue, mainLightBlue } from '../../color';

const styles = StyleSheet.create({
  unpinnedDefaultImgWrapper: { backgroundColor: '#F1F1F6', borderRadius: 6 },
  pinnedDefaultImg: { width: 150, height: 100 },
  pinnedDefaultImgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 45,
    backgroundColor: '#CFCFCF',
    width: 240,
    height: 180,
    borderRadius: 10,
  },
  fullScreenWrapper: { flex: 1, backgroundColor: 'white' },
  welcomeTitle:
    Platform.OS === 'ios'
      ? { marginTop: 55, marginLeft: 17, fontFamily: 'AppleSDGothicNeoB00', fontSize: 24 }
      : { marginTop: 15, marginLeft: 17, fontFamily: 'AppleSDGothicNeoB00', fontSize: 24 },

  pinnedText: {
    marginTop: 20,
    marginBottom: 15,
    fontWeight: '700',
    fontSize: 18,
  },

  emptyHomeMainImg: {
    marginTop: 220,
    alignItems: 'center',
  },
  emptyHomeText: {
    color: mainBlue,
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyHomeMainTitle: { fontSize: 24, marginTop: 40 },
  emptyHomeSubTitle: { fontSize: 14, marginTop: 20 },

  blueText: { color: mainBlue },

  pinnedChecklistWrapper: { height: 260, marginLeft: 17 },
  pinnedChecklistCard: { marginRight: 14 },
  pinnedChecklistImg: {},
  pinnedChecklistSummaryCard: {
    width: 240,
    height: 110,
    backgroundColor: mainLightBlue,
    position: 'relative',
    bottom: 50,
    borderRadius: 10,
    padding: 14,
    justifyContent: 'space-between',
  },
  pinnedChecklistTitle: { fontSize: 16, fontWeight: '600' },
  pinnedChecklistAddress: { fontSize: 11, color: '#8C8CA1', marginTop: 5 },

  bottomElements: { flexDirection: 'row' },
  bottomElement: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomElementText: { marginLeft: 7, fontSize: 12 },
  roomType: {
    marginRight: 20,
  },
  unpinnedChecklistWrapper: { flex: 3, marginLeft: 17 },
  unpinnedChecklistCard: { flexDirection: 'row', marginVertical: 8, height: 100 },
  unpinnedChecklistImg: { width: 136, height: 100, borderRadius: 6 },
  unpinnedChecklistSummaryCard: {
    padding: 7,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  unpinnedChecklistTitle: { fontSize: 16, fontWeight: '600' },
  unpinnedChecklistAddress: { fontSize: 11, color: '#8C8CA1', marginTop: 10 },
});

export default styles;
