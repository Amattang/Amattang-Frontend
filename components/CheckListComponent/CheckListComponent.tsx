import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, View } from 'react-native';
import { checkListTypes } from '../../types/checkListTypes';
import styles from './styles';
import ButtonsOfTypeA from './ButtonsOfTypeA';
import ButtonsOfTypeD from './ButtonsOfTypeD';
import { DefaultText } from '../../CustomText';
import ButtonsOfTypeB from './ButtonsOfTypeB';

interface IProps {
  handlePresentModalPress?: () => void;
  isEdit: boolean;
  checkLists: checkListTypes[];
  checkList: checkListTypes;
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
}

function CheckListComponent({ isEdit, checkLists, checkList, setCheckLists }: IProps) {
  return (
    <>
      <View style={styles.whiteCard} key={checkList.questionId}>
        <DefaultText style={styles.checkListMainTitle}>{checkList.question}</DefaultText>
        <View style={styles.subTitles}>
          {checkList.subCategory && (
            <View style={styles.checkListSubTitle}>
              <DefaultText style={styles.emoji}>📘 </DefaultText>
              <DefaultText style={styles.checkListGrayText}>{checkList.subCategory}</DefaultText>
            </View>
          )}
          {checkList.description && (
            <View style={styles.checkListSubTitle}>
              <DefaultText style={styles.emoji}>👀 </DefaultText>
              <DefaultText style={styles.checkListGrayText}>{checkList.description}</DefaultText>
            </View>
          )}
        </View>

        <View style={styles.buttonsOfCheckList}>
          {checkList.type === 'A' && (
            <ButtonsOfTypeA
              isEdit={isEdit}
              checkList={checkList}
              setCheckLists={setCheckLists}
              checkLists={checkLists}
            />
          )}
          {checkList.type === 'B' && (
            <ButtonsOfTypeB
              isEdit={isEdit}
              checkList={checkList}
              setCheckLists={setCheckLists}
              checkLists={checkLists}
            />
          )}
          {checkList.type === 'C' && <DefaultText>c</DefaultText>}
          {checkList.type === 'D' && (
            <ButtonsOfTypeD
              isEdit={isEdit}
              checkList={checkList}
              setCheckLists={setCheckLists}
              checkLists={checkLists}
            />
          )}
        </View>
      </View>
    </>
  );
}

export default CheckListComponent;
