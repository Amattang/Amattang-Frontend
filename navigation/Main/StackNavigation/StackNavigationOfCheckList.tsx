import React from 'react';
import { Image, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BasicCheckList from './BasicCheckList/BasiclCheckList';
import { CheckListStackParamsList, CheckListStackProps } from '../../../types/navigationTypes';
import styles from './styles';
const NativeStack = createNativeStackNavigator<CheckListStackParamsList>();

function CheckListStackNav({ navigation }: CheckListStackProps) {
  return (
    <>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name="basicCheckList"
          component={BasicCheckList}
          options={() => ({
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            title: '기본 체크리스트',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={styles.leftArrowImg}
                  source={require('../../../assets/images/common/leftArrow.png')}
                />
              </Pressable>
            ),
          })}
        />
      </NativeStack.Navigator>
    </>
  );
}

export default CheckListStackNav;
