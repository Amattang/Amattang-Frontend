import React from 'react';
import { Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomCheckList from './customCheckLIst/CustomCheckList';
import BasicCheckList from './formalCHeckList/BasiclCheckList';
import { CheckListStackParamsList, CheckListStackProps } from '../navigationTypes';

const NativeStack = createNativeStackNavigator<CheckListStackParamsList>();

function CheckListStackNav({ navigation }: CheckListStackProps) {
  return (
    <>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name="custom"
          component={CustomCheckList}
          options={() => ({
            title: '나만의 체크리스트',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Text>go back</Text>
              </Pressable>
            ),
          })}
        />
        <NativeStack.Screen
          name="basic"
          component={BasicCheckList}
          options={() => ({
            title: '기본 체크리스트',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Text>go back</Text>
              </Pressable>
            ),
          })}
        />
      </NativeStack.Navigator>
    </>
  );
}

export default CheckListStackNav;
