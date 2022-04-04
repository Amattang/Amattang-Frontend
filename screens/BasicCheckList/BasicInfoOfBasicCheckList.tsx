import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import { ActivityIndicator, View } from 'react-native';
import { checkListCtx } from '../../Context/CheckListByServer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckListSummaryComponenet from '../../components/CheckListComponent/CheckListSummaryComponenet';
import { useFocusEffect } from '@react-navigation/native';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
}

function BasicInfoOfBasicCheckList({ isEdit, setIsBottomSheet }: IProps) {
  const checkListContext = useContext(checkListCtx);
  const [modal, setModal] = useState(false);

  const [onServerData, setOnServerData] = useState(false);
  const [checkLists, setCheckLists] = useState<checkListTypes[]>([]);
  const [deletedCheckLists, setDeletedCheckLists] = useState<checkListTypes[]>([]);
  const [checkListSummary, setCheckListSummary] = useState<any>({});

  const getServerData = async () => {
    try {
      const serverResponse = await axios.get(
        `/api/check-list/${checkListContext?.checkListId}/common?mainCategory=기본정보`
      );
      setCheckListSummary(serverResponse.data.data.information);
      setCheckLists([
        ...serverResponse.data.data.questionList.map((item: checkListTypes) => ({
          ...item,
        })),
      ]);
      setDeletedCheckLists(
        [...serverResponse.data.data.questionList].filter((item) => !item.visibility)
      );
      setOnServerData(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getServerData();
  }, [modal]);
  useFocusEffect(
    useCallback(() => {
      getServerData();
    }, [modal])
  );
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
        <View>
          <BottomSheetModalProvider>
            <KeyboardAwareScrollView extraHeight={150}>
              <ScrollView contentContainerStyle={{ marginBottom: 80 }}>
                <CheckListSummaryComponenet checkListSummary={checkListSummary} />
                {checkLists
                  .filter((item) => item.visibility)
                  .map((mainQuestionItem: checkListTypes) => (
                    <CheckListComponent
                      modal={modal}
                      setModal={setModal}
                      key={mainQuestionItem.questionId}
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
            </KeyboardAwareScrollView>
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
        </View>
      ) : (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} />
      )}
    </>
  );
}

export default BasicInfoOfBasicCheckList;
