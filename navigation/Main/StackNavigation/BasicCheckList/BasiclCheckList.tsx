import React, { Dispatch, SetStateAction, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BasicInfoOfBasicCheckList from '../../../../screens/BasicCheckList/BasicInfoOfBasicCheckList';
import OutsideOfBasicCheckList from '../../../../screens/BasicCheckList/OutsideOfBasicCheckList';
import InsideOfBasicCheckList from './InsideOfBasicCheckList';
import MyItemOfBasicCheckList from '../../../../screens/BasicCheckList/MyItemOfBasicCheckList';
import { mainLightBlue } from '../../../../color';
import FloatingBtn from '../../../../components/CheckListComponent/FloatingBtn';
import CameraAndGallery from '../../../../components/camera/CameraAndGallery';

const Tab = createMaterialTopTabNavigator();

interface IProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
}

function BasicCheckList({ setIsEdit, isEdit }: IProps) {
  const [isBottomSheet, setIsBottomSheet] = useState(true);
  const [onModal, setOnModal] = useState(false);
  const onEditHandler = () => {
    setIsEdit(true);
  };

  const onCameraHandler = () => {
    setOnModal(!onModal);
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{ swipeEnabled: false, tabBarStyle: { backgroundColor: mainLightBlue } }}
      >
        <Tab.Screen
          name="basic"
          children={() => (
            <BasicInfoOfBasicCheckList isEdit={isEdit} setIsBottomSheet={setIsBottomSheet} />
          )}
          options={{ title: '기본 정보' }}
        />
        <Tab.Screen
          name={'outside'}
          children={() => (
            <OutsideOfBasicCheckList isEdit={isEdit} setIsBottomSheet={setIsBottomSheet} />
          )}
          options={{ title: '외부 시설' }}
        />
        <Tab.Screen
          name={'inside'}
          children={() => (
            <InsideOfBasicCheckList
              isEdit={isEdit}
              setIsBottomSheet={setIsBottomSheet}
              isBottomSheet={isBottomSheet}
            />
          )}
          options={{ title: '내부 시설' }}
        />
        <Tab.Screen
          name={'option'}
          children={() => (
            <MyItemOfBasicCheckList isEdit={isEdit} setIsBottomSheet={setIsBottomSheet} />
          )}
          options={{ title: '내 항목' }}
        />
      </Tab.Navigator>
      {isEdit
        ? isBottomSheet && <FloatingBtn floatingFunction={onCameraHandler} image={'camera'} />
        : isBottomSheet && <FloatingBtn floatingFunction={onEditHandler} image={'edit'} />}
      {onModal ? <CameraAndGallery setOnModal={setOnModal} onModal={onModal} /> : null}
    </>
  );
}

export default BasicCheckList;
