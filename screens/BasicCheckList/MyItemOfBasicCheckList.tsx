import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import BlankedMyItem from '../../components/CheckListComponent/myItem/BlankedMyItem';
import ButtonOfAddMyItem from '../../components/CheckListComponent/myItem/ButtonOfAddMyItem';
import { myItemClickHandlerType, myItemType } from '../../types/checkListTypes';
import { response } from '../../mockData/checkListOfMyItem';
import {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import MyItem from '../../components/CheckListComponent/myItem/MyItem';
import BottomSheetsOfMyItem from '../../components/CheckListComponent/myItem/BottomSheetsOfMyItem';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
}

function MyItemOfBasicCheckList({ isEdit, setIsBottomSheet }: IProps) {
  const [myItems, setMyItems] = useState<myItemType[]>(response);
  const [clickedMyItem, setClickedMyItem] = useState<myItemType | null>(null);

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

  const elementClickedHandler = ({ myItem, myItemElement }: myItemClickHandlerType) => {
    setMyItems(
      myItems.map((selectedItem) =>
        myItem.questionId === selectedItem.questionId
          ? {
              ...selectedItem,
              question: selectedItem.question.map((selectedItemElement) =>
                selectedItemElement.content === myItemElement.content
                  ? {
                      ...selectedItemElement,
                      checked: !selectedItemElement.checked,
                    }
                  : { ...selectedItemElement }
              ),
            }
          : { ...selectedItem }
      )
    );
  };

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const eachMyItemHandler = (MyItemData: myItemType | null) => {
    setClickedMyItem(MyItemData);
    handlePresentModalPress();
  };

  return (
    <View style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ButtonOfAddMyItem
          isEdit={isEdit}
          myItem={null}
          eachMyItemHandler={eachMyItemHandler}
          setMyItems={setMyItems}
        />
        <ScrollView>
          {myItems.map((myItem) => (
            <MyItem
              isEdit={isEdit}
              elementClickedHandler={elementClickedHandler}
              myItems={myItems}
              myItem={myItem}
              eachMyItemHandler={eachMyItemHandler}
            />
          ))}
        </ScrollView>
        {myItems.length === 0 && <BlankedMyItem />}
        <BottomSheetsOfMyItem
          handleSheetChanges={handleSheetChanges}
          clickedMyItem={clickedMyItem}
          isEdit={isEdit}
          onAnimateHandler={onAnimateHandler}
          onDismissHandler={onDismissHandler}
          renderBackdrop={renderBackdrop}
          bottomSheetModalRef={bottomSheetModalRef}
          snapPoints={snapPoints}
        />
      </BottomSheetModalProvider>
    </View>
  );
}

export default MyItemOfBasicCheckList;
