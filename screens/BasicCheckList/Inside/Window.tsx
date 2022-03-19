import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import { checkListTypes } from '../../../types/checkListTypes';
import CheckListComponent from '../../../components/CheckListComponent/CheckListComponent';
import ButtonOfBringBackDeletedCheckList from '../../../components/CheckListComponent/ButtonOfBringBackDeletedCheckList';
import BottomSheetsOfDeletedCheckList from '../../../components/CheckListComponent/BottomSheetsOfDeletedCheckList';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
  checkListId: number;
}

function OutsideOfBasicCheckList({ isEdit, setIsBottomSheet, checkListId }: IProps) {
  const [onServerData, setOnServerData] = useState(false);
  const [checkLists, setCheckLists] = useState<checkListTypes[]>([]);
  const [deletedCheckLists, setDeletedCheckLists] = useState<checkListTypes[]>(
    checkLists.filter((CheckLists: checkListTypes) => !CheckLists.visibility)
  );

  const getServerData = async () => {
    const serverResponse = await axios.get(
      `/api/check-list/${checkListId}/common?mainCategory=외부시설`
    );
    setCheckLists([
      ...serverResponse.data.data.questionList.map((item: checkListTypes) => ({
        ...item,
      })),
    ]);
    setDeletedCheckLists(
      [
        ...serverResponse.data.data.questionList.map((item: checkListTypes) => ({
          ...item,
        })),
      ].filter((item) => !item.visibility)
    );
    setOnServerData(true);
  };

  useEffect(() => {
    getServerData();
  }, []);

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
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

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
                  handlePresentModalPress={handlePresentModalPress}
                  isEdit={isEdit}
                  checkList={mainQuestionItem}
                  setCheckLists={setCheckLists}
                />
              ))}

            {deletedCheckLists && (
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

export default OutsideOfBasicCheckList;