import React, { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react';
import {
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import { checkListTypes } from '../../types/checkListTypes';
import { SharedValue } from 'react-native-reanimated';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from './styles';

interface IProps {
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  onAnimateHandler: () => void;
  onDismissHandler: () => void;
  renderBackdrop: React.FC<BottomSheetBackgroundProps>;
  bottomSheetModalRef: RefObject<BottomSheetModalMethods> | undefined;
  snapPoints: (string | number)[] | SharedValue<(string | number)[]>;
  checkLists: checkListTypes[];
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
  const [deletedCheckLists, setDeletedCheckLists] = useState<checkListTypes[]>(
    checkLists.filter((CheckLists: checkListTypes) => CheckLists.deleted)
  );

  const onUpdateCheckListHandler = () => {
    bottomSheetModalRef?.current?.dismiss();
    // 애니매이션 지속시간에  상태변경이 일어나면 애니매이션이 취소됨
    setTimeout(() => {
      setDeletedCheckLists(
        deletedCheckLists.filter((CheckLists: checkListTypes) => CheckLists.deleted)
      );
      setCheckLists([...checkLists, ...deletedCheckLists]);
    }, 500);
  };

  const onUpdateCheckList = (deletedCheckList: checkListTypes) => {
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
          {deletedCheckLists.map((deletedCheckList: checkListTypes) => (
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
                deletedCheckLists.filter((CheckLists: checkListTypes) => CheckLists.deleted)
                  ? styles.checkListGrayText
                  : [styles.checkListWhiteText]
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
