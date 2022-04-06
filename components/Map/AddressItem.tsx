import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
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
  setFullAddress: Dispatch<SetStateAction<String>>;
};

const AddressItem = ({ address, checkList, latitude, longitude, setFullAddress }: Props) => {
  const navigation = useNavigation();

  const [specificAddress, onChangeText] = useState<string>('');
  const fullAddress = `${address} ${specificAddress}`;

  const checkListContext = useContext(checkListCtx);

  const onPressHandler = () => {
    checkListContext?.setChoseCheckListByServer({
      ...checkListContext?.choseCheckListByServer,
      typeM: {
        questionId: checkList?.questionId,
        address: fullAddress,
        latitude,
        longitude,
      },
    });

    setFullAddress(fullAddress);
    // const data = {
    //   ...checkListContext?.choseCheckListByServer,
    //   typeM: {
    //     questionId: checkList?.questionId,
    //     address: fullAddress,
    //     latitude,
    //     longitude,
    //   },
    // };

    // console.log(`data : ${JSON.stringify(data)}`);

    // axios
    //   .put(`/api/check-list/${checkListContext?.checkListId}/common/question`, data)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    navigation.goBack();
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
