import React, { Dispatch, SetStateAction } from 'react';
import { Image, Pressable } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { ILocation } from '../../types/mapTypes';
import { styles } from './GoNowPosition.style';

type Props = {
  setLocation: Dispatch<SetStateAction<ILocation | undefined>>;
  coordToAddress: (x: string, y: string) => void;
};

const GoNowPosition = ({ setLocation, coordToAddress }: Props) => {
  // 현재위치 찾기
  const goGeoLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
        });
        coordToAddress(longitude.toString(), latitude.toString());
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
        <Image
          source={require('../../assets/images/map/myPosition.png')}
          style={styles.floatingBtn}
        />
      </Pressable>
    </>
  );
};

export default GoNowPosition;
