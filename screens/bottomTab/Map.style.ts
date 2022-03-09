import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  carContainer: {
    position: 'absolute',
    bottom: 100,
  },
  carCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 70,
    width: 230,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  carImage: {
    flex: 1,
    width: 50,
    height: 50,
  },
  carSubtext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carText: {
    flex: 2,
  },
  carTitle: {
    fontSize: 20,
    fontWeight: '800',
  },
});
