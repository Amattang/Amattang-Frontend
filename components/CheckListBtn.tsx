import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NestedProps } from '../navigation/navigationTypes';
import { mainBlue } from '../color';

function CheckListBtn() {
  const navigation = useNavigation<NestedProps>();
  const onFormalCheckListHandler = () => {
    navigation.navigate('stack', { screen: 'basicCheckList' });
  };

  return (
    <>
      <Pressable style={styles.btnWrapper} onPress={onFormalCheckListHandler}>
        <Text style={styles.BtnText}>+</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  btnWrapper: {
    position: 'absolute',
    width: 55,
    height: 55,
    backgroundColor: mainBlue,
    borderRadius: 50,
    marginHorizontal: 170,
    bottom: 50,
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
    paddingBottom: 2.5,
    paddingLeft: 2.5,
  },
});

export default CheckListBtn;
