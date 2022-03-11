import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { Alert, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from '../../components/CheckListComponent/styles';
import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';
import { response } from '../../mockData/checkListOfBasicInfo';
import {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import BottomSheetsOfDeletedCheckList from '../../components/CheckListComponent/BottomSheetsOfDeletedCheckList';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
}

function BasicInfoOfBasicCheckList({ isEdit, setIsBottomSheet }: IProps) {
  const [checkLists, setCheckLists] = useState(response);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => [200, 400], []);

  const renderBackdrop = (props: BottomSheetBackgroundProps) => (
    <BottomSheetBackdrop {...props} opacity={0.7} />
  );

  const onAnimateHandler = () => {
    setIsBottomSheet(false);
  };

  const onDismissHandler = () => {
    setIsBottomSheet(true);
  };
  // callbacks
  const handlePresentModalPress = () => {
    isEdit
      ? bottomSheetModalRef.current?.present()
      : Alert.alert('읽기상태입니다!', '오른쪽 아래 버튼을 눌러주세요');
  };

  return (
    <>
      <BottomSheetModalProvider>
        <View style={[styles.FullScreen]}>
          <ScrollView>
            <CheckListComponent
              handlePresentModalPress={handlePresentModalPress}
              setIsBottomSheet={setIsBottomSheet}
              isEdit={isEdit}
              checkLists={checkLists}
              setCheckLists={setCheckLists}
            />
          </ScrollView>
        </View>
        <BottomSheetsOfDeletedCheckList
          setCheckLists={setCheckLists}
          onAnimateHandler={onAnimateHandler}
          onDismissHandler={onDismissHandler}
          renderBackdrop={renderBackdrop}
          bottomSheetModalRef={bottomSheetModalRef}
          snapPoints={snapPoints}
          checkLists={checkLists}
        />
      </BottomSheetModalProvider>
    </>
  );
}

export default BasicInfoOfBasicCheckList;
