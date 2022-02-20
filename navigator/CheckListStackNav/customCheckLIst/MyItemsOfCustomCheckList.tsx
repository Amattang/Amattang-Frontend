import React from 'react';
import { Pressable, Text } from 'react-native';

function MyItemsOfCustomCheckList({ navigation: { navigate } }) {
  return (
    <Pressable onPress={() => navigate('FormalList')}>
      <Text>내항목</Text>
    </Pressable>
  );
}

export default MyItemsOfCustomCheckList;
