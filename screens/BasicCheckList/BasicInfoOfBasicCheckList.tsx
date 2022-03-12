import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { Alert, Pressable, View } from 'react-native';
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
import { checkListTypes } from '../../types/checkListTypes';
import { DefaultText } from '../../CustomText';
import ButtonOfAddDeletedCheckList from '../../components/CheckListComponent/ButtonOfAddDeletedCheckList';

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
        <ScrollView>
          {checkLists
            .filter((item) => !item.deleted)
            .map((mainQuestionItem: checkListTypes) => (
              <CheckListComponent
                checkLists={checkLists}
                isEdit={isEdit}
                checkList={mainQuestionItem}
                setCheckLists={setCheckLists}
              />
            ))}

          {handlePresentModalPress && (
            <ButtonOfAddDeletedCheckList handlePresentModalPress={handlePresentModalPress} />
          )}
        </ScrollView>

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
