import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Image, Pressable, Text, View } from 'react-native';
import { useNavigatioç } from '@react-navigation/native';

function CheckListBtn() {
  const [onCheckList, setOnCheckList] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setOnCheckList(!onCheckList);
  };

  const onCustomCheckListHandler = () => {
    navigation.navigate('Stack', { screen: 'custom' });
    setOnCheckList(!onCheckList);
  };

  const onFormalCheckListHandler = () => {
    navigation.navigate('Stack', { screen: 'basic' });
    setOnCheckList(!onCheckList);
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
                <Pressable onPress={onCustomCheckListHandler}>
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
                source={require('../assets/images/CheckLIstTabImgNegative.png')}
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
              source={require('../assets/images/CheckListTabImgPositive.png')}
            />
          </Pressable>
        </>
      )}
    </>
  );
}

export default CheckListBtn;
