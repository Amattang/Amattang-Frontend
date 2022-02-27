import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BasicCheckList from './BasicCheckList/BasiclCheckList';
import { CheckListStackParamsList, CheckListStackProps } from '../navigationTypes';

const NativeStack = createNativeStackNavigator<CheckListStackParamsList>();

function CheckListStackNav({ navigation }: CheckListStackProps) {
  return (
    <>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name="basicCheckList"
          component={BasicCheckList}
          options={() => ({
            headerShadowVisible: false,
            title: '기본 체크리스트',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={styles.leftArrowImg}
                  source={require('../../assets/images/common/leftArrow.png')}
                />
              </Pressable>
            ),
          })}
        />
      </NativeStack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  leftArrowImg: {
    width: 11,
    height: 19,
  },
});

export default CheckListStackNav;
