import { useNavigation } from '@react-navigation/native';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { checkListCtx } from '../../Context/CheckListByServer';
import { DefaultText } from '../../CustomText';
import { checkListTypes, choseCheckListItemByServerType } from '../../types/checkListTypes';
import { styles } from './AddressItem.style';

type Props = {
  address: string | undefined;
  checkList: checkListTypes;
  latitude: number;
  longitude: number;
};

const AddressItem = ({ address, checkList, latitude, longitude }: Props) => {
  const navigation = useNavigation();

  const [specificAddress, onChangeText] = useState<string>('');

  const checkListContext = useContext(checkListCtx);

  const onPressHandler = () => {
    console.log('checklist야!');
    navigation.goBack();

    checkListContext?.setChoseCheckListByServer({
      ...checkListContext?.choseCheckListByServer,
      typeM: {
        questionId: checkList.questionId,
        address,
        latitude,
        longitude,
      },
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
