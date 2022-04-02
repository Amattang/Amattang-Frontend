import { useNavigation } from '@react-navigation/native';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { checkListCtx } from '../../Context/CheckListByServer';
import { DefaultText } from '../../CustomText';
import { checkListTypes, choseCheckListItemByServerType } from '../../types/checkListTypes';
import { styles } from './AddressItem.style';

type Props = {
  address: string | undefined;
  isEdit: boolean;
  checkList: checkListTypes;
  checkLists: checkListTypes[];
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  latitude: number;
  longitude: number;
};

const AddressItem = ({
  address,
  isEdit,
  checkList,
  setCheckLists,
  checkLists,
  latitude,
  longitude,
}: Props) => {
  const navigation = useNavigation();

  const [specificAddress, onChangeText] = useState<string>('');

  const checkListContext = useContext(checkListCtx);

  const onPressHandler = () => {
    console.log('checklist야!');
    navigation.goBack();

    isEdit &&
      setCheckLists(
        checkLists.map((questionItem) =>
          questionItem.questionId === checkList.questionId
            ? ({
                ...questionItem,
                questionId: checkList.questionId,
                address: address,
                latitude: 0,
                longitude: 0,
              } as checkListTypes)
            : ({ ...questionItem } as checkListTypes)
        )
      );
    (checkListContext?.choseCheckListByServer.typeM as choseCheckListItemByServerType[]).some(
      (item) => item.questionId === checkList.questionId
    )
      ? isEdit &&
        checkListContext?.setChoseCheckListByServer({
          ...checkListContext?.choseCheckListByServer,
          typeM: [
            ...(checkListContext?.choseCheckListByServer.typeM as choseCheckListItemByServerType[]),
            {
              questionId: checkList.questionId,
              address: address,
              latitude: 0,
              longitude: 0,
            },
          ],
        })
      : isEdit &&
        checkListContext?.setChoseCheckListByServer({
          ...checkListContext?.choseCheckListByServer,
          typeM: [
            ...(checkListContext?.choseCheckListByServer.typeM as choseCheckListItemByServerType[]),
            {
              questionId: checkList.questionId,
              address: address,
              latitude: 0,
              longitude: 0,
            },
          ],
        });

    console.log(checkListContext?.choseCheckListByServer);
  };

  return (
    <View style={styles.container}>
      <DefaultText style={styles.mainAddress}>{address}</DefaultText>
      <TextInput
        placeholder="상세 주소 입력"
        onChangeText={onChangeText}
        value={specificAddress}
        style={styles.detailAddress}
      />
      <Pressable onPress={() => onPressHandler()} style={[styles.addressBtn, styles.bottomBtn]}>
        <DefaultText style={styles.settingText}>이 위치로 주소 설정</DefaultText>
      </Pressable>
    </View>
  );
};

export default AddressItem;
