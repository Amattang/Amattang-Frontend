import React, { useEffect, useState } from 'react';
import { Button, Text, View, Platform, PermissionsAndroid, Dimensions, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Carousel from 'react-native-snap-carousel';
import { styles } from './Map.style';
import { IPick, ILocations } from '../../types/mapTypes';
import SlideItem from '../../components/Map/SlideItem';
import { ITEM_WIDTH, SLIDER_WIDTH } from '../../constants/Map.constant';
import { requestPermission } from '../../utils/LocationPermission';

const Map = () => {
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
  // 슬라이드로 선택한 위치
  const [pick, setPick] = useState<IPick>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    requestPermission().then((result) => {
      if (result === 'granted') {
        setPick(locations[0].latlng);
      }
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {pick && (
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: pick.latitude,
            longitude: pick.longitude,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0021,
          }}
          zoomEnabled={true}
          showsScale={true}
        >
          {locations.map((marker, idx) => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              image={
                marker.center
                  ? require('../../assets/images/map/mapCenter3.png')
                  : require('../../assets/images/map/mapPosition3.png')
              }
              key={idx}
            />
          ))}
        </MapView>
      )}
      <View style={styles.carContainer}>
        <Carousel
          data={locations}
          renderItem={SlideItem}
          itemWidth={ITEM_WIDTH}
          sliderWidth={SLIDER_WIDTH}
          layout={'default'}
          onSnapToItem={(index) => {
            setLocations(
              locations.map((marker) =>
                marker.id === index
                  ? (setPick(marker.latlng), { ...marker, center: true })
                  : { ...marker, center: false }
              )
            );
          }}
        />
      </View>
    </View>
  );
};

export default Map;
