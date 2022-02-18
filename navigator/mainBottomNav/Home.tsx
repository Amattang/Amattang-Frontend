import React from 'react';
import { Button, Pressable, Text } from 'react-native';

function Home({ navigation: { navigate } }) {
  return (
    <Pressable onPress={() => navigate('Stacks', { screen: 'custom' })}>
      <Text>Home</Text>
    </Pressable>
  );
}

export default Home;
