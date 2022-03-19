import React, { Dispatch, RefObject, SetStateAction } from 'react';
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
  deletedCheckLists: checkListTypes[];
  setDeletedCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  isEdit: boolean;
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  onAnimateHandler: () => void;
  onDismissHandler: () => void;
  renderBackdrop: React.FC<BottomSheetBackgroundProps>;
  bottomSheetModalRef: RefObject<BottomSheetModalMethods> | undefined;
  snapPoints: (string | number)[] | SharedValue<(string | number)[]>;
  checkLists: checkListTypes[];
}

function BottomSheetsOfDeletedCheckList({
  deletedCheckLists,
  setDeletedCheckLists,
  isEdit,
  setCheckLists,
  onAnimateHandler,
  onDismissHandler,
  renderBackdrop,
  bottomSheetModalRef,
  snapPoints,
  checkLists,
}: IProps) {
  const onUpdateCheckListHandler = () => {
    bottomSheetModalRef?.current?.dismiss();
    // 애니매이션 지속시간에  상태변경이 일어나면 애니매이션이 취소됨
    setTimeout(() => {
      setDeletedCheckLists(
        deletedCheckLists.filter((CheckLists: checkListTypes) => !CheckLists.visibility)
      );
      setCheckLists([...checkLists.filter((item) => item.visibility), ...deletedCheckLists]);
    }, 500);
    setTimeout(() => 1000);
  };

  const onUpdateCheckList = (deletedCheckList: checkListTypes) => {
    isEdit &&
      setDeletedCheckLists(
        deletedCheckLists.map((item) =>
          item.questionId === deletedCheckList.questionId
            ? { ...item, visibility: !item.visibility }
            : { ...item }
        )
      );
  };

  const onSelectAllHandler = () => {
    setDeletedCheckLists(deletedCheckLists.map((item) => ({ ...item, visibility: true })));
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
                deletedCheckList.visibility
                  ? [styles.deletedCheckListBtnWrapper, styles.checkListFocusedBlue]
                  : styles.deletedCheckListBtnWrapper
              }
            >
              <DefaultText
                style={
                  deletedCheckList.visibility
                    ? styles.deletedCheckListWhiteText
                    : styles.deletedCheckListText
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
          <Pressable
            onPress={onUpdateCheckListHandler}
            style={
              deletedCheckLists.filter((checkList) => checkList.visibility).length
                ? [styles.updateCheckListButton, styles.checkListFocusedBlue]
                : styles.updateCheckListButton
            }
          >
            <DefaultText
              style={
                deletedCheckLists.filter((checkList) => checkList.visibility).length
                  ? styles.checkListWhiteText
                  : styles.checkListGrayText
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
