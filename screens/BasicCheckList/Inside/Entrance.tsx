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

import {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { ActivityIndicator } from 'react-native';
import { checkListTypes } from '../../../types/checkListTypes';
import CheckListComponent from '../../../components/CheckListComponent/CheckListComponent';
import ButtonOfBringBackDeletedCheckList from '../../../components/CheckListComponent/ButtonOfBringBackDeletedCheckList';
import BottomSheetsOfDeletedCheckList from '../../../components/CheckListComponent/BottomSheetsOfDeletedCheckList';
import { GetCheckListServerData } from '../../../api/GetCheckListServerData';
import { checkListCtx } from '../../../Context/CheckListByServer';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
}

function Entrance({ isEdit, setIsBottomSheet }: IProps) {
  const checkListContext = useContext(checkListCtx);
  const [onServerData, setOnServerData] = useState(false);
  const [checkLists, setCheckLists] = useState<checkListTypes[]>([]);
  const [deletedCheckLists, setDeletedCheckLists] = useState<checkListTypes[]>(
    checkLists.filter((CheckLists: checkListTypes) => !CheckLists.visibility)
  );

  useEffect(() => {
    GetCheckListServerData({
      setCheckLists,
      setDeletedCheckLists,
      setOnServerData,
      checkListId: checkListContext?.checkListId,
      mainCategory: '내부시설',
      subCategory: '현관',
    });
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
                  key={mainQuestionItem.questionId}
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

export default Entrance;
