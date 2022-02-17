import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './mainBottomNav/Home';

import Vote from './mainBottomNav/Vote';
import { Button, Image, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

function MainBottomNav({ navigation: { navigate } }) {
  const [onCheckList, setOnCheckList] = useState(false);

  const toggleModal = () => {
    setOnCheckList(!onCheckList);
  };

  const onCustomCheckListHandler = () => {
    console.log('나만의');
  };
  const onFormalCheckListHandler = () => {
    console.log('기본');
  };
  return (
    <>
      {onCheckList ? (
        <>
          <Modal isVisible={true} animationIn={'fadeIn'}>
            <Pressable
              onPress={toggleModal}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 99,
              }}
            >
              <View
                style={{
                  borderRadius: 8,
                  zIndex: 99,
                  position: 'absolute',
                  left: 80,
                  bottom: 80,
                  width: 180,
                  backgroundColor: '#F1F1F6',
                }}
              >
                <Pressable onPress={() => navigate('Stack', { screen: 'custom' })}>
                  <View style={{ height: 56, justifyContent: 'center', marginLeft: 16 }}>
                    <Text>나만의 체크리스트</Text>
                  </View>
                </Pressable>
                <Pressable onPress={onFormalCheckListHandler}>
                  <View style={{ height: 56, justifyContent: 'center', marginLeft: 16 }}>
                    <Text>기본 체크리스트</Text>
                  </View>
                </Pressable>
              </View>

              <Image
                style={{ width: 55, height: 55, zIndex: 9999 }}
                source={require('./mainBottomNav/CheckLIstTabImgNegative.png')}
              />
            </Pressable>
          </Modal>
        </>
      ) : (
        <>
          <Pressable
            onPress={toggleModal}
            style={{
              position: 'absolute',
              marginHorizontal: 170,
              width: 60,
              bottom: 40,
              zIndex: 99,
            }}
          >
            <Image
              style={{ width: 55, height: 55 }}
              source={require('./mainBottomNav/CheckListTabImgPositive.png')}
            />
          </Pressable>
        </>
      )}
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Vote'} component={Vote} />
      </Tab.Navigator>
    </>
  );
}

export default MainBottomNav;
