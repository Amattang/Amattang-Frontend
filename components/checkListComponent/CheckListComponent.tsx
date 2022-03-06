import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { checkList } from '../../types/checkListTypes';
import styles from './style';
import ButtonsOfTypeA from './ButtonsOfTypeA';
import ButtonsOfTypeD from './ButtonsOfTypeD';

interface IProps {
  checkLists: checkList[];
  setCheckLists: Dispatch<SetStateAction<checkList[]>>;
}

function CheckListComponent({ checkLists, setCheckLists }: IProps) {
  return (
    <>
      {checkLists.map((mainQuestionItem: checkList) => (
        <View style={styles.whiteCard} key={mainQuestionItem.questionId}>
          <Text style={styles.checkListMainTitle}>{mainQuestionItem.question}</Text>
          <View style={styles.subTitles}>
            {mainQuestionItem.subCategory && (
              <View style={styles.checkListSubTitle}>
                <Text style={styles.emoji}>📘 </Text>
                <Text style={styles.checkListGrayText}>{mainQuestionItem.subCategory}</Text>
              </View>
            )}
            {mainQuestionItem.description && (
              <View style={styles.checkListSubTitle}>
                <Text style={styles.emoji}>👀 </Text>
                <Text style={styles.checkListGrayText}>{mainQuestionItem.description}</Text>
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
            {mainQuestionItem.type === 'B' && <Text>b</Text>}
            {mainQuestionItem.type === 'C' && <Text>c</Text>}
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
