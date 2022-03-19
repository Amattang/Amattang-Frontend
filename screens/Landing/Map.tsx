import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { DefaultText } from '../../CustomText';
import axios from 'axios';
import { IHere } from '../../types/mapTypes';
import Geolocation from 'react-native-geolocation-service';
import AddressItem from '../../components/Map/AddressItem';
import { OnBoardingStackProps } from '../../types/navigationTypes';

function Map({ route }: any) {
  const { params } = route;
  const [here, setHere] = useState<IHere>({
    latitude: 37.498095,
    longitude: 127.02761,
  });
  // 현위치 좌표 -> 도로명주소
  const [address, setAddress] = useState('');

  // 현재위치 찾기
  const goGeoLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position) => {
        setHere({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // here.latitude
  // here.longitude
  const x = 126.95000261443744;
  const y = 37.39151960530102;

  const coordToAddress = async () => {
    try {
      await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
          {
            headers: {
              Authorization: `KakaoAK 918b29e2641545569013d1e5e6ba3611`, // REST API 키
            },
          }
        )
        .then((res) => {
          const location = res.data.documents[0];
          setAddress(location.address.address_name);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.activeType) {
      goGeoLocation();
      console.log('true');
    } else {
      console.log('false');
    }
    // coordToAddress();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: here.latitude as number,
          longitude: here.longitude as number,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021,
        }}
        zoomEnabled={true}
        showsScale={true}
      >
        <Marker
          coordinate={{
            latitude: here.latitude as number,
            longitude: here.longitude as number,
          }}
          title={'현재위치'}
          description={'현재위치'}
          pinColor={'blue'}
        />
      </MapView>
      <Pressable onPress={goGeoLocation}>
        <DefaultText>현재위치로 가기</DefaultText>
      </Pressable>
      <AddressItem />
    </View>
  );
}

export default Map;
