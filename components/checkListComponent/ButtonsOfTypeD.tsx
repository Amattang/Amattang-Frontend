import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';
import { checkList } from '../../types/checkListTypes';
import styles from './style';

interface IProps {
  mainQuestionItem: checkList;
  checkLists: checkList[];
  setCheckLists: Dispatch<SetStateAction<checkList[]>>;
}

function ButtonsOfTypeD({ mainQuestionItem, setCheckLists, checkLists }: IProps) {
  return (
    <>
      {mainQuestionItem.answer.ans.map((answer) => (
        <Pressable
          onPress={() =>
            setCheckLists(
              checkLists.map((questionItem) =>
                questionItem.questionId === mainQuestionItem.questionId
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
    </>
  );
}

export default ButtonsOfTypeD;
