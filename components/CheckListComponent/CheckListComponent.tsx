import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { checkList } from '../../types/checkListTypes';
import styles from './styles';
import ButtonsOfTypeA from './ButtonsOfTypeA';
import ButtonsOfTypeD from './ButtonsOfTypeD';
import { DefaultText } from '../../CustomText';
import ButtonsOfTypeB from './ButtonsOfTypeB';

interface IProps {
  isEdit: boolean;
  checkLists: checkList[];
  setCheckLists: Dispatch<SetStateAction<checkList[]>>;
}

function CheckListComponent({ isEdit, checkLists, setCheckLists }: IProps) {
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
                isEdit={isEdit}
                mainQuestionItem={mainQuestionItem}
                setCheckLists={setCheckLists}
                checkLists={checkLists}
              />
            )}
            {mainQuestionItem.type === 'B' && (
              <ButtonsOfTypeB
                isEdit={isEdit}
                mainQuestionItem={mainQuestionItem}
                setCheckLists={setCheckLists}
                checkLists={checkLists}
              />
            )}
            {mainQuestionItem.type === 'C' && <DefaultText>c</DefaultText>}
            {mainQuestionItem.type === 'D' && (
              <ButtonsOfTypeD
                isEdit={isEdit}
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
