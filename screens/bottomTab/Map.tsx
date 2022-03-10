import React, { useEffect, useState } from 'react';
import { Button, Text, View, Platform, PermissionsAndroid, Dimensions, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Carousel from 'react-native-snap-carousel';
import { styles } from './Map.style';
import { DefaultText } from '../../CustomText';

interface IHere {
  latitude: number;
  longitude: number;
}

interface ILocations {
  latlng: IHere;
  title: string;
  description: string;
  text: string;
  id: number;
  center: boolean;
}

//  변경 예정
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

// 위치정보 사용
async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    }
  } catch (e) {
    console.log(e);
  }
}

const Map = () => {
  const [here, setHere] = useState<IHere | undefined>({
    latitude: 37.5629087,
    longitude: 127.035192,
  });

  // mockup data
  const [locations, setLocations] = useState<ILocations[]>([
    {
      id: 0,
      latlng: { latitude: 37.562516, longitude: 127.035679 },
      title: '희망빌라',
      description: '원룸 / 7평',
      text: '도보 10분',
      center: true,
    },
    {
      id: 1,
      latlng: { latitude: 37.561255, longitude: 127.04456 },
      title: '더샵',
      description: '원룸 / 7평',
      text: '도보 10분',
      center: false,
    },
    {
      id: 2,
      latlng: { latitude: 37.58071, longitude: 127.035978 },
      title: '한양아파트',
      description: '원룸 / 7평',
      text: '도보 10분',
      center: false,
    },
    {
      id: 3,
      latlng: { latitude: 37.572162, longitude: 127.032171 },
      title: '한양빌리지',
      description: '원룸 / 7평',
      text: '도보 10분',
      center: false,
    },
  ]);

  // 내 위치 찾기
  const goGeoLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position) => {
        setHere({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    requestPermission().then((result) => {
      if (result === 'granted') {
        goGeoLocation();
      }
    });
  }, []);

  // 현재 위치로 가기 -> 필요하면 살려두고 필요 없으면 삭제 예정
  const goCurrentPosition = (): void => {
    goGeoLocation();
  };

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.carCard}>
        <Image style={styles.carImage} source={require('../../assets/images/home/activeAll.png')} />
        <View style={styles.carText}>
          <Text style={styles.carTitle}>{item.title}</Text>
          <View style={styles.carSubtext}>
            <DefaultText>{item.text}</DefaultText>
            <DefaultText>{item.description}</DefaultText>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {here && (
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: here.latitude,
            longitude: here.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // region={{
          //   latitude: here.latitude,
          //   longitude: here.longitude,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
        >
          {locations.map((marker, idx) => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              image={
                marker.center
                  ? require('../../assets/images/home/activeAll.png')
                  : require('../../assets/images/home/activeMap.png')
              }
              key={idx}
            />
          ))}
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
      {/* <Button onPress={goCurrentPosition} title={'현재 위치로 가기'} /> */}
      <View style={styles.carContainer}>
        <Carousel
          data={locations}
          renderItem={renderItem}
          itemWidth={ITEM_WIDTH}
          sliderWidth={SLIDER_WIDTH}
          layout={'default'}
          onSnapToItem={(index) => {
            setLocations(
              locations.map((marker) =>
                marker.id === index ? { ...marker, center: true } : { ...marker, center: false }
              )
            );
          }}
        />
      </View>
    </View>
  );
};

export default Map;
