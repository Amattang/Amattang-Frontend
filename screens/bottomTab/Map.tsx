import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AddressItem from '../../components/Map/AddressItem';
import GoNowPosition from '../../components/Map/GoNowPosition';
import MapTemplate from '../../components/Map/MapTemplate';
import { DefaultText } from '../../CustomText';
import { ILocation } from '../../types/mapTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnBoardingStackParamsList } from '../../types/navigationTypes';
import { KAKAO_COORD_TO_ADDRESS_API_KEY } from 'react-native-dotenv';

// type Props = NativeStackScreenProps<OnBoardingStackParamsList, 'map'>;

// 에라이 타입 에러
function Map({ route }: any) {
  const { params } = route;

  // 지도 표시 위치
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  // map 하단에 넣을 도로명주소
  const [doroAddress, setDoroAddress] = useState<string | undefined>('');

  // 좌표 -> 도로명주소
  // x : 경도, y : 위도
  const coordToAddress = async (x: string, y: string) => {
    try {
      await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
          {
            headers: {
              Authorization: `KakaoAK ${KAKAO_COORD_TO_ADDRESS_API_KEY}`, // REST API 키. 연결 아직 안함
            },
          }
        )
        .then((res) => {
          const location = res.data.documents[0];
          setDoroAddress(location ? location.address.address_name : 'undefined');
        })
        .catch((err) => {
          console.error(`error1 : ${err}`);
        });
    } catch (error) {
      console.error(error);
    }
  };

  // 도로명주소 -> 좌표
  const addressToCoords = async (doro: string) => {
    try {
      await axios
        .get(`https://dapi.kakao.com/v2/local/search/address.json?query=${doro}`, {
          headers: {
            Authorization: `KakaoAK ${KAKAO_COORD_TO_ADDRESS_API_KEY}`,
          },
        })
        .then((res) => {
          const { x, y } = res.data.documents[0];
          setLocation({
            longitude: Number(x),
            latitude: Number(y),
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 현재 위치 바로가기
    if (params.activeType) {
      coordToAddress(params.long.toString(), params.lat.toString());
    } else {
      // 주소찾기
      setDoroAddress(params.address);
      addressToCoords(params.address);
    }
  }, []);
  const latitude = params.activeType ? params.lat : location?.latitude;
  const longitude = params.activeType ? params.long : location?.longitude;

  return (
    <View style={{ flex: 1 }}>
      {params.activeType ? (
        <MapTemplate lat={params.lat} long={params.long} />
      ) : location ? (
        <MapTemplate lat={location.latitude} long={location.longitude} />
      ) : (
        <DefaultText>Loading...</DefaultText>
      )}
      <GoNowPosition setLocation={setLocation} coordToAddress={coordToAddress} />
      <AddressItem
        address={doroAddress}
        checkList={params.checkList}
        latitude={latitude}
        longitude={longitude}
        setFullAddress={params.setFullAddress}
      />
    </View>
  );
}

export default Map;
