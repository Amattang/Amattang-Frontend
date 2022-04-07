import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import ModalAddress from '../Map/ModalAddress';
import styles from '../../screens/Landing/styles';
import { requestPermission } from '../../utils/LocationPermission';
import Geolocation from 'react-native-geolocation-service';
import { useNavigation } from '@react-navigation/native';

const ButtonOfMap = () => {
  const [fullAddress, setFullAddress] = useState<string>('');

  // 현재위치 찾기
  const navigation = useNavigation<any>();

  const goGeoLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position) => {
        navigation.navigate('map', {
          activeType: true,
          lat: position.coords.latitude,
          long: position.coords.longitude,
          setFullAddress,
        });
      },
      (error) => {
        console.error(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // 허가 있어야 map으로 이동
  const onMapHandler = () => {
    requestPermission().then((result) => {
      if (result === 'granted') {
        goGeoLocation();
      }
    });
  };

  return (
    <>
      <DefaultText style={{ top: 30 }}>{fullAddress}</DefaultText>
      <View style={styles.buttonsOfCheckList}>
        <ModalAddress setFullAddress={setFullAddress} />
        <Pressable
          onPress={onMapHandler}
          style={[styles.mapInputOfAddress, styles.buttonOfCheckList]}
        >
          <Image
            style={styles.mapInputImageOfAddress}
            source={require('../../assets/images/landing/map.png')}
          />
          <DefaultText>현위치</DefaultText>
        </Pressable>
      </View>
    </>
  );
};

export default ButtonOfMap;
