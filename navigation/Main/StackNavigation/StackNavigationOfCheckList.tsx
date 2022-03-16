import React, { useState } from 'react';
import { Image, Pressable, Share } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import BasicCheckList from './BasicCheckList/BasiclCheckList';
import { CheckListStackParamsList, CheckListStackProps } from '../../../types/navigationTypes';
import styles from './styles';
import ProfileSetting from '../../../screens/ProfileSetting/ProfileSetting';
import { mainLightBlue } from '../../../color';
import { DefaultText } from '../../../CustomText';
import { TransitionPresets } from '@react-navigation/stack';
import Camera from '../../../screens/Camera/Camera';
const NativeStack = createNativeStackNavigator<CheckListStackParamsList>();

function CheckListStackNav({ navigation }: CheckListStackProps) {
  const [isEdit, setIsEdit] = useState(true);
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

  const onSubmitHandler = () => {
    setIsEdit(false);
  };

  const screenOptions: NativeStackNavigationOptions = isEdit
    ? {
        ...TransitionPresets.SlideFromRightIOS,
        headerRight: () => (
          <Pressable onPress={onSubmitHandler}>
            <DefaultText>저장</DefaultText>
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
        headerStyle: { backgroundColor: mainLightBlue },
        headerShown: true,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }
    : {
        ...TransitionPresets.SlideFromRightIOS,
        headerRight: () => (
          <Pressable onPress={onShare}>
            <Image source={require('../../../assets/images/checkList/share.png')} />
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
        headerStyle: { backgroundColor: mainLightBlue },
        headerShown: true,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      };

  return (
    <>
      <NativeStack.Navigator screenOptions={screenOptions}>
        <NativeStack.Screen
          name="basicCheckList"
          children={() => <BasicCheckList isEdit={isEdit} setIsEdit={setIsEdit} />}
          options={() => ({ title: '기본 체크리스트' })}
        />
        <NativeStack.Screen name={'camera'} component={Camera} options={{ headerShown: false }} />
        <NativeStack.Screen
          name={'profileSetting'}
          component={ProfileSetting}
          options={() => ({ title: '프로필 설정' })}
        />
      </NativeStack.Navigator>
    </>
  );
}

export default CheckListStackNav;
