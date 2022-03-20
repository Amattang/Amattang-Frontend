import React, { useState } from 'react';
import { DefaultText } from '../../../CustomText';
import { Pressable, View } from 'react-native';
import { myItemClickHandlerType, myItemType } from '../../../types/checkListTypes';
import MyItemElement from './MyItemElement';
import styles from '../styles';

interface IProps {
  elementClickedHandler: ({ myItem, myItemElement }: myItemClickHandlerType) => void;
  myItems: myItemType[];
  myItem: myItemType;
  eachMyItemHandler: (MyItemData: myItemType) => void;
  isEdit: boolean;
}

function MyItem({ elementClickedHandler, myItem, eachMyItemHandler, isEdit }: IProps) {
  const [isMyItemClicked, setIsMyItemClicked] = useState(false);

  const onUpdateMyItemHandler = () => {
    isEdit && eachMyItemHandler(myItem);
  };
  return (
    <>
      <View
        style={
          isMyItemClicked
            ? [styles.myItemElementsWrapper, styles.checkListFocusedBlue]
            : [styles.myItemElementsWrapper]
        }
      >
        <Pressable
          onPress={() => setIsMyItemClicked(!isMyItemClicked)}
          style={[styles.myItemElements]}
        >
          <View style={{ flexDirection: 'row' }}>
            <DefaultText style={isMyItemClicked ? [styles.whiteText] : [styles.blueText]}>
              {myItem.categoryName}
            </DefaultText>
            <DefaultText
              style={
                isMyItemClicked
                  ? [styles.whiteText, styles.myItemCount]
                  : [styles.blueText, styles.myItemCount]
              }
            >
              {myItem.question.length}
            </DefaultText>
          </View>
        </Pressable>

        <Pressable style={styles.myItemBottomSheetButton} onPress={onUpdateMyItemHandler}>
          <DefaultText
            style={
              isMyItemClicked
                ? [styles.whiteText, styles.myItemCount]
                : [styles.blueText, styles.myItemCount]
            }
          >
            · · ·
          </DefaultText>
        </Pressable>
      </View>
      {isMyItemClicked
        ? myItem.question.map((myItemElement) => (
            <MyItemElement
              key={myItemElement.questionId}
              isEdit={isEdit}
              myItem={myItem}
              elementClickedHandler={elementClickedHandler}
              myItemElement={myItemElement}
            />
          ))
        : null}
    </>
  );
}

export default MyItem;
