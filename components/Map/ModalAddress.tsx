import React, { useState } from 'react';
import { Modal, Pressable } from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';
import { useNavigation } from '@react-navigation/native';
import { OnBoardingStackProps } from '../../types/navigationTypes';

const ModalAddress = () => {
  const navigation = useNavigation<OnBoardingStackProps>();

  // @brief 주소검색창 - 데이터 조회
  const [isModal, setModal] = useState<boolean>(false);

  return (
    <>
      <Modal visible={isModal}>
        <Pressable onPress={() => setModal(false)}>
          <DefaultText>닫기</DefaultText>
        </Pressable>
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
