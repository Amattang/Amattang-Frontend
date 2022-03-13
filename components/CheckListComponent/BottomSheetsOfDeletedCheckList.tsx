import React, { Dispatch, RefObject, SetStateAction, useState } from 'react';
import {
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { Alert, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import { checkListTypes } from '../../types/checkListTypes';
import { SharedValue } from 'react-native-reanimated';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from './styles';

interface IProps {
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
  isEdit,
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
    isEdit
      ? setDeletedCheckLists(
          deletedCheckLists.map((item) =>
            item.questionId === deletedCheckList.questionId
              ? { ...item, deleted: !item.deleted }
              : { ...item }
          )
        )
      : Alert.alert('읽기상태입니다!', '추가하기를 취소하고 오른쪽 아래 버튼을 눌러주세요');
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

          {/*<Pressable onPress={onUpdateCheckListHandler} style={styles.updateCheckListButton}>*/}
          <Pressable
            onPress={onUpdateCheckListHandler}
            style={
              deletedCheckLists.filter((checkList) => !checkList.deleted).length
                ? [styles.updateCheckListButton, styles.checkListFocusedBlue]
                : styles.updateCheckListButton
            }
          >
            <DefaultText
              style={
                deletedCheckLists.filter((checkList) => !checkList.deleted).length
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
