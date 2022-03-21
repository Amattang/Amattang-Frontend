import React, { useContext, useState } from 'react';
import { Image, Pressable, Share } from 'react-native';

import BasicCheckList from './BasicCheckList/BasiclCheckList';
import { CheckListStackParamsList, CheckListStackProps } from '../../../types/navigationTypes';
import styles from './styles';
import ProfileSetting from '../../../screens/ProfileSetting/ProfileSetting';
import { mainLightBlue } from '../../../color';
import { DefaultText } from '../../../CustomText';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { checkListCtx } from '../../../Context/CheckListByServer';
import axios from 'axios';

const NativeStack = createNativeStackNavigator<CheckListStackParamsList>();

function CheckListStackNav({ navigation }: CheckListStackProps) {
  const checkListContext = useContext(checkListCtx);

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

  const onSubmitHandler = async () => {
    try {
      await axios.put(
        `/api/check-list/${checkListContext?.checkListId}/common/question`,
        checkListContext?.choseCheckListByServer
      );
      // await axios.put(
      //   `/api/check-list/${checkListContext?.checkListId}/common/question/state`,
      //   checkListContext?.deletedCheckListByServer
      // );
    } catch (error) {
      console.error(error);
    }
    checkListContext?.setChoseCheckListByServer({ typeA: [], typeB: [], typeD: [], typeM: [] });
    setIsEdit(false);
  };

  const screenOptions: NativeStackNavigationOptions = {
    animation: 'slide_from_bottom',
    headerLeft: () => (
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={[styles.leftArrowImg]}
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
          options={() => ({
            animationTypeForReplace: 'pop',
            animation: 'slide_from_bottom',
            title: '기본 체크리스트',
            headerRight: () =>
              isEdit ? (
                <Pressable onPress={onSubmitHandler}>
                  <DefaultText>저장</DefaultText>
                </Pressable>
              ) : (
                <Pressable onPress={onShare}>
                  <Image source={require('../../../assets/images/checkList/share.png')} />
                </Pressable>
              ),
          })}
        />
        <NativeStack.Screen
          name={'profileSetting'}
          component={ProfileSetting}
          options={() => ({
            title: '설정',
            headerStyle: { backgroundColor: 'white' },
          })}
        />
      </NativeStack.Navigator>
    </>
  );
}

export default CheckListStackNav;
