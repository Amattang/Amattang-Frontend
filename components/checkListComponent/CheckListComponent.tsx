import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { checkList } from '../../types/checkListTypes';
import styles from './style';
import ButtonsOfTypeA from './ButtonsOfTypeA';
import ButtonsOfTypeD from './ButtonsOfTypeD';
import { DefaultText } from '../../CustomText';

interface IProps {
  checkLists: checkList[];
  setCheckLists: Dispatch<SetStateAction<checkList[]>>;
}

function CheckListComponent({ checkLists, setCheckLists }: IProps) {
  return (
    <>
      {checkLists.map((mainQuestionItem: checkList) => (
        <View style={styles.whiteCard} key={mainQuestionItem.questionId}>
          <DefaultText style={styles.checkListMainTitle}>{mainQuestionItem.question}</DefaultText>
          <View style={styles.subTitles}>
            {mainQuestionItem.subCategory && (
              <View style={styles.checkListSubTitle}>
                <DefaultText style={styles.emoji}>📘 </DefaultText>
                <DefaultText style={styles.checkListGrayText}>
                  {mainQuestionItem.subCategory}
                </DefaultText>
              </View>
            )}
            {mainQuestionItem.description && (
              <View style={styles.checkListSubTitle}>
                <DefaultText style={styles.emoji}>👀 </DefaultText>
                <DefaultText style={styles.checkListGrayText}>
                  {mainQuestionItem.description}
                </DefaultText>
              </View>
            )}
          </View>
          <View style={styles.buttonsOfCheckList}>
            {mainQuestionItem.type === 'A' && (
              <ButtonsOfTypeA
                mainQuestionItem={mainQuestionItem}
                setCheckLists={setCheckLists}
                checkLists={checkLists}
              />
            )}
            {mainQuestionItem.type === 'B' && <DefaultText>b</DefaultText>}
            {mainQuestionItem.type === 'C' && <DefaultText>c</DefaultText>}
            {mainQuestionItem.type === 'D' && (
              <ButtonsOfTypeD
                mainQuestionItem={mainQuestionItem}
                setCheckLists={setCheckLists}
                checkLists={checkLists}
              />
            )}
          </View>
        </View>
      ))}
    </>
  );
}

export default CheckListComponent;
