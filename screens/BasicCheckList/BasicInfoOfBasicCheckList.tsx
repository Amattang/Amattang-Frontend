import React, { Dispatch, SetStateAction, useMemo, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
import ButtonOfBringBackDeletedCheckList from '../../components/CheckListComponent/ButtonOfBringBackDeletedCheckList';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
}

function BasicInfoOfBasicCheckList({ isEdit, setIsBottomSheet }: IProps) {
  const [checkLists, setCheckLists] = useState(response);

  // 바텀시트 동작을 위한 코드
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
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
  const handlePresentModalPress = () => {
    isEdit
      ? bottomSheetModalRef.current?.present()
      : Alert.alert('읽기상태입니다!', '오른쪽 아래 버튼을 눌러주세요');
  };

  // 삭제버튼 동작을 위한 코드

  return (
    <>
      <BottomSheetModalProvider>
        <ScrollView>
          {checkLists
            .filter((item) => !item.deleted)
            .map((mainQuestionItem: checkListTypes) => (
              <CheckListComponent
                isOnboarding={false}
                checkLists={checkLists}
                isEdit={isEdit}
                checkList={mainQuestionItem}
                setCheckLists={setCheckLists}
              />
            ))}

          {handlePresentModalPress && (
            <ButtonOfBringBackDeletedCheckList handlePresentModalPress={handlePresentModalPress} />
          )}
        </ScrollView>

        <BottomSheetsOfDeletedCheckList
          isEdit={isEdit}
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
