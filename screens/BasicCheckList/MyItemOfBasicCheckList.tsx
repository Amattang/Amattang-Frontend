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
import { ActivityIndicator, ScrollView, View } from 'react-native';

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
import MyItemOfBottomSheets from '../../components/CheckListComponent/myItem/MyItemOfBottomSheets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GetMyItemServerData } from '../../api/GetMyItemServerData';
import { checkListCtx } from '../../Context/CheckListByServer';
import axios from 'axios';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
}

function MyItemOfBasicCheckList({ isEdit, setIsBottomSheet }: IProps) {
  const checkListContext = useContext(checkListCtx);
  const [onServerData, setOnServerData] = useState(false);

  const [myItems, setMyItems] = useState<myItemType[]>(response);
  const [clickedMyItem, setClickedMyItem] = useState<myItemType | null>(null);

  useEffect(() => {
    GetMyItemServerData({
      setMyItems,
      checkListId: checkListContext?.checkListId,
      setOnServerData,
    });
  }, [checkListContext?.checkListId]);
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

  const elementClickedHandler = ({ myItem, myItemElement }: myItemClickHandlerType) => {
    setMyItems(
      myItems.map((selectedItem) =>
        myItem.categoryId === selectedItem.categoryId
          ? {
              ...selectedItem,
              questions: selectedItem.questions.map((selectedItemElement) =>
                selectedItemElement.questionId === myItemElement.questionId
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
    try {
      axios.put(`/api/check-list/${checkListContext?.checkListId}/custom`, {
        ...myItem,
        questions: myItem.questions.map((selectedItemElement) =>
          selectedItemElement.questionId === myItemElement.questionId
            ? {
                ...selectedItemElement,
                checked: !selectedItemElement.checked,
              }
            : { ...selectedItemElement }
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks

  const handleSheetChanges = useCallback(() => {}, []);

  const eachMyItemHandler = (MyItemData: myItemType | null) => {
    setClickedMyItem(MyItemData);
    handlePresentModalPress();
  };

  return (
    <>
      {onServerData ? (
        <View style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <KeyboardAwareScrollView extraHeight={150}>
              <ScrollView>
                <ButtonOfAddMyItem
                  isEdit={isEdit}
                  myItem={null}
                  eachMyItemHandler={eachMyItemHandler}
                  setMyItems={setMyItems}
                />
                {myItems.map((myItem) => (
                  <MyItem
                    key={myItem.categoryId}
                    isEdit={isEdit}
                    elementClickedHandler={elementClickedHandler}
                    myItems={myItems}
                    myItem={myItem}
                    eachMyItemHandler={eachMyItemHandler}
                  />
                ))}
              </ScrollView>
              {myItems.length === 0 && <BlankedMyItem />}
            </KeyboardAwareScrollView>
            <MyItemOfBottomSheets
              handleSheetChanges={handleSheetChanges}
              clickedMyItem={clickedMyItem}
              setClickedMyItem={setClickedMyItem}
              setMyItems={setMyItems}
              myItems={myItems}
              isEdit={isEdit}
              onAnimateHandler={onAnimateHandler}
              onDismissHandler={onDismissHandler}
              renderBackdrop={renderBackdrop}
              bottomSheetModalRef={bottomSheetModalRef}
              snapPoints={snapPoints}
            />
          </BottomSheetModalProvider>
        </View>
      ) : (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} />
      )}
    </>
  );
}

export default MyItemOfBasicCheckList;
