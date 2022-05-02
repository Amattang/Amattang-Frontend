import { useNavigation } from '@react-navigation/native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import { styles } from './AddressItem.style';

type Props = {
  address: string | undefined;
  setFullAddress: Dispatch<SetStateAction<string>>;
  activeType: boolean;
};

const AddressItem = ({ address, setFullAddress, activeType }: Props) => {
  const navigation = useNavigation();

  const [specificAddress, onChangeText] = useState<string>('');
  const fullAddress = `${address} ${specificAddress}`;

  return (
    <View style={styles.container}>
      <DefaultText style={styles.mainAddress}>{address}</DefaultText>
      <TextInput
        placeholder="상세 주소 입력"
        onChangeText={onChangeText}
        value={specificAddress}
        style={styles.detailAddress}
      />
      <Pressable
        onPress={() => {
          navigation.goBack();
          setFullAddress(fullAddress);
        }}
        style={[styles.addressBtn, styles.bottomBtn]}
      >
        <DefaultText style={styles.settingText}>이 위치로 주소 설정</DefaultText>
      </Pressable>
    </View>
  );
};

export default AddressItem;
