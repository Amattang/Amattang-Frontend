import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { DefaultText } from '../../CustomText';

const AddressItem = ({ address }: any) => {
  const [specificAddress, onChangeText] = useState<string>('');

  return (
    <View>
      <Text>{address}</Text>
      <TextInput placeholder="상세 주소 입력" onChangeText={onChangeText} value={specificAddress} />
      <Pressable onPress={() => console.log('주소 등록')}>
        <DefaultText>이 위치로 주소 설정</DefaultText>
      </Pressable>
    </View>
  );
};

export default AddressItem;
