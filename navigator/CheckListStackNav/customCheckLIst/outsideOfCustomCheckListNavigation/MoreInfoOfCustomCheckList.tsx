import React from 'react';
import { Pressable, Text } from 'react-native';

function MoreInfoOfCustomCheckList({ navigation: { navigate } }) {
  return (
    <Pressable onPress={() => navigate('FormalList')}>
      <Text>세부 항목</Text>
    </Pressable>
  );
}

export default MoreInfoOfCustomCheckList;
