import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Dimensions, Image, Pressable, SafeAreaView, Share } from 'react-native';

import BasicCheckList from './BasicCheckList/BasiclCheckList';
import { CheckListStackParamsList } from '../../../types/navigationTypes';
import styles from './styles';
import ProfileSetting from '../../../screens/ProfileSetting/ProfileSetting';
import { mainLightBlue } from '../../../color';
import { DefaultText } from '../../../CustomText';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { checkListCtx } from '../../../Context/CheckListByServer';
import { useNavigation } from '@react-navigation/native';
import Map from '../../../screens/bottomTab/Map';

const NativeStack = createNativeStackNavigator<CheckListStackParamsList>();

interface IProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

function CheckListStackNav({ setIsLogin }: IProps) {
  const navigation = useNavigation();
  const checkListContext = useContext(checkListCtx);

  const [isEdit, setIsEdit] = useState(true);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `https://amattang.netlify.app/${checkListContext?.checkListId}`,
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
    checkListContext?.onChoseCheckListHandler();
    setIsEdit(false);
  };
  const height = Dimensions.get('window').height;

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

  useEffect(() => {
    setInterval(() => {
      checkListContext?.onChoseCheckListHandler();
    }, 100000);
  }, []);

  return (
    <>
      <NativeStack.Navigator screenOptions={screenOptions}>
        <NativeStack.Screen
          name={'profileSetting'}
          children={() => <ProfileSetting setIsLogin={setIsLogin} />}
          options={() => ({
            title: '??????',
            headerStyle: { backgroundColor: 'white' },
          })}
        />
        <NativeStack.Screen
          name="basicCheckList"
          children={() => (
            <SafeAreaView style={{ height: height - 55 }}>
              <BasicCheckList isEdit={isEdit} setIsEdit={setIsEdit} />
            </SafeAreaView>
          )}
          options={() => ({
            animationTypeForReplace: 'pop',
            animation: 'slide_from_bottom',
            title: '?????? ???????????????',
            headerRight: () =>
              isEdit ? (
                <Pressable onPress={onSubmitHandler}>
                  <DefaultText>??????</DefaultText>
                </Pressable>
              ) : (
                <Pressable onPress={onShare}>
                  <Image source={require('../../../assets/images/checkList/share.png')} />
                </Pressable>
              ),
          })}
        />
        <NativeStack.Screen
          name="map"
          component={Map}
          options={{
            animation: 'slide_from_bottom',
            title: '???????????? ?????? ??????',
            headerTitleAlign: 'center',
            headerTintColor: '#22232B',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/images/common/leftArrow.png')} />
              </Pressable>
            ),
          }}
        />
      </NativeStack.Navigator>
    </>
  );
}

export default CheckListStackNav;
