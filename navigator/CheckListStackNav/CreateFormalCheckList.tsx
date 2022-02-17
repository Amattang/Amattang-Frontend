import React from 'react';
import { Pressable, Text } from 'react-native';

function CreateFormalCheckList({ navigation: { navigate } }) {
  return (
    <Pressable onPress={() => navigate('FormalList')}>
      <Text>기본 체크리스트</Text>
    </Pressable>
  );
}

export default CreateFormalCheckList;
