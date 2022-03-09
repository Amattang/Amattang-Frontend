import React from 'react';
import { Image, Pressable, Share, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BasicCheckList from './BasicCheckList/BasiclCheckList';
import { CheckListStackParamsList, CheckListStackProps } from '../../../types/navigationTypes';
import styles from './styles';
import ProfileSetting from '../../../screens/ProfileSetting/ProfileSetting';
const NativeStack = createNativeStackNavigator<CheckListStackParamsList>();

function CheckListStackNav({ navigation }: CheckListStackProps) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://www.naver.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
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
            headerRight: () => (
              <Pressable onPress={onShare}>
                <Text>공유</Text>
              </Pressable>
            ),
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
        <NativeStack.Screen
          name={'profileSetting'}
          component={ProfileSetting}
          options={() => ({
            title: '프로필 설정',
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
