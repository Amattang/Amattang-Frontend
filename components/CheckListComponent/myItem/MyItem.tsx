import React, { useState } from 'react';
import { DefaultText } from '../../../CustomText';
import { Alert, Pressable, View } from 'react-native';
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
  const [isMyItemClicked, setIsMyItemClicked] = useState(true);

  const onUpdateMyItemHandler = () => {
    isEdit
      ? eachMyItemHandler(myItem)
      : Alert.alert('읽기상태입니다!', '추가하기를 취소하고 오른쪽 아래 버튼을 눌러주세요');
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
