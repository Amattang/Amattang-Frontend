import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AddressItem from '../../components/Map/AddressItem';
import MapCurrentLocationBtn from '../../components/Map/MapCurrentLocationBtn';
import MapFindAddressBtn from '../../components/Map/MapFindAddressBtn';
import GoNowPosition from '../../components/Map/GoNowPosition';

interface ILocation {
  latitude: number;
  longitude: number;
}

function Map({ route }: any) {
  const { params } = route;

  // 지도 표시 위치
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  // map 하단에 넣을 도로명주소
  const [doroAddress, setDoroAddress] = useState('');

  // 좌표 -> 도로명주소
  // x : 경도, y : 위도
  const coordToAddress = async (x: string, y: string) => {
    try {
      await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
          {
            headers: {
              Authorization: 'KakaoAK 918b29e2641545569013d1e5e6ba3611', // REST API 키. 연결 아직 안함
            },
          }
        )
        .then((res) => {
          const location = res.data.documents[0];
          setDoroAddress(location.address.address_name);
        })
        .catch((err) => {
          console.error(`error : ${err}`);
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
            Authorization: 'KakaoAK 918b29e2641545569013d1e5e6ba3611',
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

  return (
    <View style={{ flex: 1 }}>
      {params.activeType ? (
        <MapCurrentLocationBtn lat={params.lat} long={params.long} />
      ) : location ? (
        <MapFindAddressBtn lat={location.latitude} long={location.longitude} />
      ) : (
        <Text>Loading...</Text>
      )}
      <GoNowPosition
        setLocation={setLocation}
        setDoroAddress={setDoroAddress}
        coordToAddress={coordToAddress}
      />
      <AddressItem address={doroAddress} />
    </View>
  );
}

export default Map;
