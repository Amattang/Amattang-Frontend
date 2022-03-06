import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';
import { checkList } from '../../types/checkListTypes';
import styles from '../../screens/landing/styles';

interface IProps {
  checkLists: checkList[];
  setCheckLists: Dispatch<SetStateAction<checkList[]>>;
}

function CheckListComponent({ checkLists, setCheckLists }: IProps) {
  return (
    <>
      {checkLists.map((data: checkList) => (
        <View style={styles.whiteCard} key={data.questionId}>
          <Text style={styles.checkListMainTitle}>{data.question}</Text>
          <View style={styles.subTitles}>
            {data.subCategory && (
              <View style={styles.checkListSubTitle}>
                <Text style={styles.emoji}>📘 </Text>
                <Text style={styles.checkListGrayText}>{data.subCategory}</Text>
              </View>
            )}
            {data.description && (
              <View style={styles.checkListSubTitle}>
                <Text style={styles.emoji}>👀 </Text>
                <Text style={styles.checkListGrayText}>{data.description}</Text>
              </View>
            )}
          </View>
          <View style={styles.buttonsOfCheckList}>
            {data.type === 'A' &&
              data.answer.ans.map((answer) => (
                <Pressable
                  onPress={() =>
                    setCheckLists(
                      checkLists.map((questionItem) =>
                        questionItem.questionId === data.questionId
                          ? ({
                              ...questionItem,
                              answer: {
                                ans: [
                                  ...questionItem.answer.ans.map((answerItem) =>
                                    answerItem.type === answer.type
                                      ? { ...answerItem, val: true }
                                      : { ...answerItem, val: false }
                                  ),
                                ],
                              },
                            } as checkList)
                          : ({ ...questionItem } as checkList)
                      )
                    )
                  }
                  style={
                    answer.val
                      ? answer.redType
                        ? [styles.typeABtnWrapper, styles.checkListFocusedOrange]
                        : [styles.typeABtnWrapper, styles.checkListFocusedBlue]
                      : [styles.typeABtnWrapper]
                  }
                >
                  <View>
                    <Text style={answer.val ? styles.checkListWhiteText : styles.checkListGrayText}>
                      {answer.type}
                    </Text>
                  </View>
                </Pressable>
              ))}
            {data.type === 'B' && <Text>b</Text>}
            {data.type === 'C' && <Text>c</Text>}
            {data.type === 'D' &&
              data.answer.ans.map((answer) => (
                <Pressable
                  onPress={() =>
                    setCheckLists(
                      checkLists.map((questionItem) =>
                        questionItem.questionId === data.questionId
                          ? ({
                              ...questionItem,
                              answer: {
                                ans: [
                                  ...questionItem.answer.ans.map((answerItem) =>
                                    answerItem.type === answer.type
                                      ? { ...answerItem, val: !answerItem.val }
                                      : { ...answerItem }
                                  ),
                                ],
                              },
                            } as checkList)
                          : ({ ...questionItem } as checkList)
                      )
                    )
                  }
                  style={
                    answer.val
                      ? [styles.typeDBtnWrapper, styles.checkListFocusedBlue]
                      : [styles.typeDBtnWrapper]
                  }
                >
                  <View>
                    <Text style={answer.val ? styles.checkListWhiteText : styles.checkListGrayText}>
                      {answer.type}
                    </Text>
                  </View>
                </Pressable>
              ))}
          </View>
        </View>
      ))}
    </>
  );
}

export default CheckListComponent;
