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

const Tab = createMaterialTopTabNavigator();

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
  isBottomSheet?: boolean;
  checkListId: number;
}

function InsideOfBasicCheckList({ isEdit, setIsBottomSheet, checkListId }: IProps) {
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
        <Tab.Screen
          name={'window'}
          children={() => (
            <Window checkListId={checkListId} isEdit={isEdit} setIsBottomSheet={setIsBottomSheet} />
          )}
          options={{ title: '창문' }}
        />
        <Tab.Screen
          name={'ceiling'}
          children={() => (
            <Ceiling
              checkListId={checkListId}
              isEdit={isEdit}
              setIsBottomSheet={setIsBottomSheet}
            />
          )}
          options={{ title: '천장' }}
        />
        <Tab.Screen
          name={'kitchen'}
          children={() => (
            <Kitchen
              checkListId={checkListId}
              isEdit={isEdit}
              setIsBottomSheet={setIsBottomSheet}
            />
          )}
          options={{ title: '부엌' }}
        />
        <Tab.Screen
          name={'bathroom'}
          children={() => (
            <Bathroom
              checkListId={checkListId}
              isEdit={isEdit}
              setIsBottomSheet={setIsBottomSheet}
            />
          )}
          options={{ title: '화장실' }}
        />
        <Tab.Screen
          name={'wall'}
          children={() => (
            <Wall checkListId={checkListId} isEdit={isEdit} setIsBottomSheet={setIsBottomSheet} />
          )}
          options={{ title: '벽' }}
        />
        <Tab.Screen
          name={'entrance'}
          children={() => (
            <Entrance
              checkListId={checkListId}
              isEdit={isEdit}
              setIsBottomSheet={setIsBottomSheet}
            />
          )}
          options={{ title: '현관' }}
        />
        <Tab.Screen
          name={'option'}
          children={() => (
            <Option checkListId={checkListId} isEdit={isEdit} setIsBottomSheet={setIsBottomSheet} />
          )}
          options={{ title: '옵션' }}
        />
      </Tab.Navigator>
    </>
  );
}

export default InsideOfBasicCheckList;
