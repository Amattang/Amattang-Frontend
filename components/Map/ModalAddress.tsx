import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import { DefaultText } from '../../CustomText';
import { useNavigation } from '@react-navigation/native';
import { OnBoardingStackProps } from '../../types/navigationTypes';
import { styles } from './Modal.style';

const ModalAddress = () => {
  const navigation = useNavigation<OnBoardingStackProps>();

  // @brief 주소검색창 - 데이터 조회
  const [isModal, setModal] = useState<boolean>(false);

  return (
    <>
      <Modal visible={isModal}>
        <View style={styles.header}>
          <Pressable onPress={() => setModal(false)}>
            <Image style={styles.close} source={require('../../assets/images/map/mapClose.png')} />
          </Pressable>
          <DefaultText style={styles.title}>주소 설정</DefaultText>
        </View>
        <Postcode
          style={{ width: '100%', height: '100%' }}
          jsOptions={{ animation: true, hideMapBtn: true }}
          onError={(err) => {
            console.error(err);
          }}
          onSelected={(data) => {
            setModal(false);
            navigation.navigate('map', { activeType: false, address: data.address });
          }}
        />
      </Modal>
      <Pressable
        onPress={() => setModal(true)}
        style={[styles.directInputOfAddress, styles.buttonOfCheckList]}
      >
        <DefaultText style={styles.directInputTextOfAddress}>직접 입력</DefaultText>
      </Pressable>
    </>
  );
};

export default ModalAddress;
