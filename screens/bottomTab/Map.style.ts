import { StyleSheet } from 'react-native';
import { mainBlue } from '../../color';

export const styles = StyleSheet.create({
  carContainer: {
    position: 'absolute',
    bottom: 100,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 13,
    height: 86,
    width: 265,
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  image: {
    width: 64,
    height: 60,
    borderRadius: 6,
  },
  mainTitle: {
    width: 125,
    height: 22,
    top: 9,
    left: 18,
    fontSize: 18,
    lineHeight: 21.6,
    fontWeight: '500',
  },
  subTitle: {
    flexDirection: 'row',
    alignContent: 'center',
    top: 20,
    left: 18,
  },
  iconText: {
    flexDirection: 'row',
    alignContent: 'center',
    bottom: 4,
  },
  distanceIcon: {
    width: 14.53,
    height: 14.53,
    marginRight: 6.73,
  },
  timeIcon: {
    width: 12,
    height: 14.49,
    marginLeft: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 10,
    color: mainBlue,
  },
});
