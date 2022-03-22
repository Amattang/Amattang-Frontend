import React from 'react';
import { Pressable } from 'react-native';
import { DefaultText } from '../../CustomText';
import Geolocation from 'react-native-geolocation-service';

const GoNowPosition = ({ setLocation }: any) => {
  // 현재위치 찾기
  const goGeoLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      (error) => {
        console.error(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <>
      <Pressable onPress={goGeoLocation}>
        <DefaultText>현재위치로 가기</DefaultText>
      </Pressable>
    </>
  );
};

export default GoNowPosition;
