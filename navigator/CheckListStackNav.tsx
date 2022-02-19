import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateCustomCheckList from './CheckListStackNav/customCheckLIst/CreateCustomCheckList';
import CreateFormalCheckList from './CheckListStackNav/formalCHeckList/CreateFormalCheckList';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

const NativeStack = createNativeStackNavigator();

function CheckListStackNav() {
  const navigation = useNavigation();
  return (
    <>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name="custom"
          component={CreateCustomCheckList}
          options={() => ({
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Text>go back</Text>
              </Pressable>
            ),
          })}
        />
        <NativeStack.Screen
          name="formal"
          component={CreateFormalCheckList}
          options={() => ({
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Text>go back</Text>
              </Pressable>
            ),
          })}
        />
      </NativeStack.Navigator>
    </>
  );
}

export default CheckListStackNav;
