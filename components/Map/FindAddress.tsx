import React, { useState } from 'react';
import { Modal, Pressable } from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';
import { useNavigation } from '@react-navigation/native';
import { OnBoardingStackProps } from '../../types/navigationTypes';

const FindAddress = () => {
  const navigation = useNavigation<OnBoardingStackProps>();

  // @brief 주소검색창 - 데이터 조회
  const [isModal, setModal] = useState(false);
  const [address, setAddress] = useState('');
  const [latlong, setlatLong] = useState({
    latlong: 0,
    longitude: 0,
  });

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
            console.log(`error: ${err}`);
          }}
          onSelected={(data) => {
            // console.log(JSON.stringify(data));
            setAddress(data.address);
            setModal(false);
            navigation.navigate('map', { activeType: false });
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

export default FindAddress;
