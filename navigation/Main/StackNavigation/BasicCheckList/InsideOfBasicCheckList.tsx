import React, { Dispatch, SetStateAction } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Window from '../../../../screens/BasicCheckList/Inside/Window';
import Ceiling from '../../../../screens/BasicCheckList/Inside/Ceiling';
import Kitchen from '../../../../screens/BasicCheckList/Inside/Kitchen';
import Bathroom from '../../../../screens/BasicCheckList/Inside/Bathroom';
import Wall from '../../../../screens/BasicCheckList/Inside/Wall';
import Entrance from '../../../../screens/BasicCheckList/Inside/Entrance';
import Option from '../../../../screens/BasicCheckList/Inside/Option';
import { mainLightBlue } from '../../../../color';
import { checkListTypes } from '../../../../types/checkListTypes';
import { DefaultText } from '../../../../CustomText';
import { Animated, TouchableOpacity, View } from 'react-native';
const Tab = createMaterialTopTabNavigator();

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
  isBottomSheet: boolean;
}

function InsideOfBasicCheckList({ isEdit, setIsBottomSheet, isBottomSheet }: IProps) {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicator: () => null,
          tabBarScrollEnabled: true,
          swipeEnabled: false,
          tabBarStyle: { backgroundColor: mainLightBlue },
          tabBarItemStyle: {
            marginHorizontal: 5,
            marginTop: 7,
            justifyContent: 'flex-start',
            height: 30,
            width: 60,
            padding: 0,
          },
          tabBarContentContainerStyle: {
            width: 500,
          },
        }}
      >
        <Tab.Screen name={'window'} component={Window} options={{ title: '창문' }} />
        <Tab.Screen name={'ceiling'} component={Ceiling} options={{ title: '천장' }} />
        <Tab.Screen name={'kitchen'} component={Kitchen} options={{ title: '부엌' }} />
        <Tab.Screen name={'bathroom'} component={Bathroom} options={{ title: '화장실' }} />
        <Tab.Screen name={'wall'} component={Wall} options={{ title: '벽' }} />
        <Tab.Screen name={'entrance'} component={Entrance} options={{ title: '현관' }} />
        <Tab.Screen name={'option'} component={Option} options={{ title: '옵션' }} />
      </Tab.Navigator>
    </>
  );
}

export default InsideOfBasicCheckList;
