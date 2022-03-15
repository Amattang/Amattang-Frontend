import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';

import { response } from '../../mockData/checkListOfOutside';
import styles from '../../components/CheckListComponent/styles';
import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';
import { ScrollView } from 'react-native-gesture-handler';
import BottomSheetsOfDeletedCheckList from '../../components/CheckListComponent/BottomSheetsOfDeletedCheckList';
import {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { checkListTypes } from '../../types/checkListTypes';
import ButtonOfBringBackDeletedCheckList from '../../components/CheckListComponent/ButtonOfBringBackDeletedCheckList';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
}

function OutsideOfBasicCheckList({ isEdit, setIsBottomSheet }: IProps) {
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
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <BottomSheetModalProvider>
        <View>
          <ScrollView>
            {checkLists
              .filter((item) => !item.deleted)
              .map((mainQuestionItem: checkListTypes) => (
                <CheckListComponent
                  onBoarding={false}
                  checkLists={checkLists}
                  handlePresentModalPress={handlePresentModalPress}
                  isEdit={isEdit}
                  checkList={mainQuestionItem}
                  setCheckLists={setCheckLists}
                />
              ))}

            {handlePresentModalPress && (
              <ButtonOfBringBackDeletedCheckList
                handlePresentModalPress={handlePresentModalPress}
              />
            )}
          </ScrollView>
        </View>
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

export default OutsideOfBasicCheckList;
