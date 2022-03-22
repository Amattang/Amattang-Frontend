import React, { useState } from 'react';
import { Modal, Pressable } from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';
import { useNavigation } from '@react-navigation/native';
import { OnBoardingStackProps } from '../../types/navigationTypes';

type Props = {
  goGeoLocation: () => void;
};

const ModalAddress = ({ goGeoLocation }: Props) => {
  const navigation = useNavigation<OnBoardingStackProps>();

  // @brief 주소검색창 - 데이터 조회
  const [isModal, setModal] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [latlong, setlatLong] = useState({
    latlong: 0,
    longitude: 0,
  });
  1;
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
            navigation.navigate('map', { activeType: false, address: data.address });
            setModal(false);
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
