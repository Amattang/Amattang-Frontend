import React, { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';
import {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import BottomSheetsOfDeletedCheckList from '../../components/CheckListComponent/BottomSheetsOfDeletedCheckList';
import { checkListTypes } from '../../types/checkListTypes';
import ButtonOfBringBackDeletedCheckList from '../../components/CheckListComponent/ButtonOfBringBackDeletedCheckList';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

interface IProps {
  checkListId?: number | false;
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
  setCheckListId: Dispatch<SetStateAction<number>>;
}

function BasicInfoOfBasicCheckList({
  checkListId,
  isEdit,
  setIsBottomSheet,
  setCheckListId,
}: IProps) {
  const [onServerData, setOnServerData] = useState(false);
  const [checkLists, setCheckLists] = useState<checkListTypes[]>([]);
  const [deletedCheckLists, setDeletedCheckLists] = useState<checkListTypes[]>([]);

  const getServerData = async () => {
    const serverResponse = checkListId
      ? await axios.get(`/api/check-list/${checkListId}/common?mainCategory=기본정보`)
      : await axios.get('/api/check-list/init');
    console.log(serverResponse);
    setCheckLists([
      ...serverResponse.data.data.questionList.map((item: checkListTypes) => ({
        ...item,
        deleted: false,
      })),
    ]);
    setDeletedCheckLists(
      [...serverResponse.data.data.questionList].filter((item) => !item.visibility)
    );
    checkListId
      ? setCheckListId(checkListId)
      : setCheckListId(serverResponse.data.data.checkListId);
    setOnServerData(true);
  };

  useEffect(() => {
    checkLists && getServerData();
  }, []);
  // setCheckLists(response.data);
  // 바텀시트 동작을 위한 코드
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [100, 400], []);
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
    isEdit && bottomSheetModalRef.current?.present();
  };

  // 삭제버튼 동작을 위한 코드

  return (
    <>
      {onServerData ? (
        <BottomSheetModalProvider>
          <ScrollView>
            {checkLists
              .filter((item) => item.visibility)
              .map((mainQuestionItem: checkListTypes) => (
                <CheckListComponent
                  deletedCheckLists={deletedCheckLists}
                  setDeletedCheckLists={setDeletedCheckLists}
                  onBoarding={false}
                  checkLists={checkLists}
                  isEdit={isEdit}
                  checkList={mainQuestionItem}
                  setCheckLists={setCheckLists}
                />
              ))}

            {deletedCheckLists.length !== 0 && (
              <ButtonOfBringBackDeletedCheckList
                handlePresentModalPress={handlePresentModalPress}
              />
            )}
          </ScrollView>
          <BottomSheetsOfDeletedCheckList
            deletedCheckLists={deletedCheckLists}
            setDeletedCheckLists={setDeletedCheckLists}
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
      ) : (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} />
      )}
    </>
  );
}

export default BasicInfoOfBasicCheckList;
