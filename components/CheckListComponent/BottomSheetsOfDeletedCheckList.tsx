import React, { Dispatch, RefObject, SetStateAction, useState } from 'react';
import {
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import { checkList } from '../../types/checkListTypes';
import { SharedValue } from 'react-native-reanimated';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from './styles';

interface IProps {
  setCheckLists: Dispatch<SetStateAction<checkList[]>>;
  onAnimateHandler: () => void;
  onDismissHandler: () => void;
  renderBackdrop: React.FC<BottomSheetBackgroundProps>;
  bottomSheetModalRef: RefObject<BottomSheetModalMethods> | undefined;
  snapPoints: (string | number)[] | SharedValue<(string | number)[]>;
  checkLists: checkList[];
}

function BottomSheetsOfDeletedCheckList({
  setCheckLists,
  onAnimateHandler,
  onDismissHandler,
  renderBackdrop,
  bottomSheetModalRef,
  snapPoints,
  checkLists,
}: IProps) {
  const [deletedCheckLists, setDeletedCheckLists] = useState<checkList[]>(
    checkLists.filter((CheckLists: checkList) => CheckLists.deleted)
  );

  const onUpdateCheckListHandler = () => {
    bottomSheetModalRef?.current?.dismiss();
    // 애니매이션 지속시간에  상태변경이 일어나면 애니매이션이 취소됨
    setTimeout(() => {
      setDeletedCheckLists(deletedCheckLists.filter((CheckLists: checkList) => CheckLists.deleted));
      setCheckLists([...checkLists, ...deletedCheckLists]);
    }, 500);
  };

  const onUpdateCheckList = (deletedCheckList: checkList) => {
    setDeletedCheckLists(
      deletedCheckLists.map((item) =>
        item.questionId === deletedCheckList.questionId
          ? { ...item, deleted: !item.deleted }
          : { ...item }
      )
    );
  };

  const onSelectAllHandler = () => {
    setDeletedCheckLists(deletedCheckLists.map((item) => ({ ...item, deleted: false })));
    console.log('t');
  };

  return (
    <>
      <BottomSheetModal
        index={1}
        detached={true}
        backdropComponent={renderBackdrop}
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onAnimate={onAnimateHandler}
        onDismiss={onDismissHandler}
      >
        <BottomSheetScrollView>
          {deletedCheckLists.map((deletedCheckList: checkList) => (
            <Pressable
              onPress={() => onUpdateCheckList(deletedCheckList)}
              style={
                deletedCheckList.deleted
                  ? styles.deletedCheckListBtnWrapper
                  : [styles.deletedCheckListBtnWrapper, styles.checkListFocusedBlue]
              }
            >
              <DefaultText
                style={
                  deletedCheckList.deleted
                    ? styles.deletedCheckListText
                    : styles.deletedCheckListWhiteText
                }
              >
                {deletedCheckList.emoji} {deletedCheckList.question}
              </DefaultText>
            </Pressable>
          ))}
        </BottomSheetScrollView>
        <View style={styles.bottomButtonOfBottomSheet}>
          <Pressable onPress={onSelectAllHandler} style={[styles.selectAllBtn]}>
            <DefaultText style={styles.blueText}>모두 선택</DefaultText>
          </Pressable>
          <Pressable onPress={onUpdateCheckListHandler} style={styles.updateCheckListButton}>
            <DefaultText
              style={
                deletedCheckLists.filter((item) => item.deleted)
                  ? styles.checkListGrayText
                  : [styles.blueText]
              }
            >
              + 추가하기
            </DefaultText>
          </Pressable>
        </View>
      </BottomSheetModal>
    </>
  );
}

export default BottomSheetsOfDeletedCheckList;
