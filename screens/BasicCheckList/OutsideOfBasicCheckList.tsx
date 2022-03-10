import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';

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
          <BottomSheetsOfDeletedCheckList
            onAnimateHandler={onAnimateHandler}
            onDismissHandler={onDismissHandler}
            renderBackdrop={renderBackdrop}
            bottomSheetModalRef={bottomSheetModalRef}
            snapPoints={snapPoints}
            checkLists={checkLists}
          />
        </View>
      </BottomSheetModalProvider>
    </>
  );
}

export default OutsideOfBasicCheckList;
