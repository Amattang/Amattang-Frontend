import React, { useEffect, useState } from 'react';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { DefaultText } from '../../CustomText';
import axios from 'axios';

// 타입 뭘로 하지
function Map({ route }: any) {
  const { here } = route.params;
  const [specificAddress, onChangeText] = useState<string>('');

  // 현위치 좌표 -> 도로명주소
  const [address, setAddress] = useState('');

  const x = 126.95000261443744;
  const y = 37.39151960530102;

  const coordToAddress = async () => {
    try {
      await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
          {
            headers: {
              Authorization: 'KakaoAK 918b29e2641545569013d1e5e6ba3611', // REST API 키
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
    coordToAddress();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {here && (
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: here.latitude,
            longitude: here.longitude,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0021,
          }}
          zoomEnabled={true}
          showsScale={true}
        >
          <Marker
            coordinate={{
              latitude: here.latitude,
              longitude: here.longitude,
            }}
            title={'현재위치'}
            description={'현재위치'}
            pinColor={'blue'}
          />
        </MapView>
      )}
      <View>
        <Text>{address}</Text>
        <TextInput
          placeholder="상세 주소 입력"
          onChangeText={onChangeText}
          value={specificAddress}
        />
        <Pressable onPress={() => console.log('주소 등록')}>
          <DefaultText>이 위치로 주소 설정</DefaultText>
        </Pressable>
      </View>
    </View>
  );
}

export default Map;
