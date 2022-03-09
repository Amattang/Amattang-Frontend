import React, { Dispatch, SetStateAction } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BasicInfoOfBasicCheckList from '../../../../screens/BasicCheckList/BasicInfoOfBasicCheckList';
import OutsideOfBasicCheckList from '../../../../screens/BasicCheckList/OutsideOfBasicCheckList';
import InsideOfBasicCheckList from '../../../../screens/BasicCheckList/InsideOfBasicCheckList';
import MyItemOfBasicCheckList from '../../../../screens/BasicCheckList/MyItemOfBasicCheckList';
import { mainLightBlue } from '../../../../color';
import FloatingBtn from '../../../../components/CheckListComponent/FloatingBtn';

const Tab = createMaterialTopTabNavigator();

interface IProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
}

function BasicCheckList({ setIsEdit, isEdit }: IProps) {
  const onEditHandler = () => {
    setIsEdit(true);
  };

  const onCameraHandler = () => {
    console.log('camera');
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{ swipeEnabled: false, tabBarStyle: { backgroundColor: mainLightBlue } }}
      >
        <Tab.Screen
          name="basic"
          children={() => <BasicInfoOfBasicCheckList isEdit={isEdit} />}
          options={{ title: '기본 정보' }}
        />
        <Tab.Screen
          name={'outside'}
          children={() => <OutsideOfBasicCheckList isEdit={isEdit} />}
          options={{ title: '외부 시설' }}
        />
        <Tab.Screen
          name={'inside'}
          children={() => <InsideOfBasicCheckList isEdit={isEdit} />}
          options={{ title: '내부 시설' }}
        />
        <Tab.Screen
          name={'option'}
          children={() => <MyItemOfBasicCheckList isEdit={isEdit} />}
          options={{ title: '내 항목' }}
        />
      </Tab.Navigator>
      {isEdit ? (
        <FloatingBtn floatingFunction={onCameraHandler} image={'camera'} />
      ) : (
        <FloatingBtn floatingFunction={onEditHandler} image={'edit'} />
      )}
    </>
  );
}

export default BasicCheckList;
