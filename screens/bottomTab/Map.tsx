import React, { useEffect, useState } from 'react';
import { Button, Text, View, Platform, PermissionsAndroid, Dimensions, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Carousel from 'react-native-snap-carousel';
import { styles } from './Map.style';
import { ILocation, ILocations } from '../../types/mapTypes';
import SlideItem from '../../components/Map/SlideItem';
import { ITEM_WIDTH, SLIDER_WIDTH } from '../../constants/Map.constant';
import { requestPermission } from '../../utils/LocationPermission';

const Map = () => {
  // mockup data
  const [locations, setLocations] = useState<ILocations[]>([
    {
      id: 0,
      // imgUri:null,
      mainTitle: '희망빌라',
      address: '강남구 2039길',
      location: { latitude: 37.562516, longitude: 127.035679 },
      distance: '10분',
      roomType: '원룸',
      area: '4평',
      form: '오픈형',
      pinned: false,
      center: true,
    },
    {
      id: 1,
      // imgUri:null,
      mainTitle: '더샵',
      address: '강남구 2039길',
      location: { latitude: 37.561255, longitude: 127.04456 },
      distance: '10분',
      roomType: '원룸',
      area: '4평',
      form: '오픈형',
      pinned: false,
      center: true,
    },
    {
      id: 2,
      // imgUri:null,
      mainTitle: '한양아파트',
      address: '강남구 2039길',
      location: { latitude: 37.58071, longitude: 127.035978 },
      distance: '10분',
      roomType: '원룸',
      area: '4평',
      form: '오픈형',
      pinned: false,
      center: true,
    },
    {
      id: 3,
      // imgUri:null,
      mainTitle: '한양빌리지',
      address: '강남구 2039길',
      location: { latitude: 37.572162, longitude: 127.032171 },
      distance: '10분',
      roomType: '원룸',
      area: '4평',
      form: '오픈형',
      pinned: false,
      center: true,
    },
  ]);
  // 슬라이드로 선택한 위치
  const [pick, setPick] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    requestPermission().then((result) => {
      if (result === 'granted') {
        setPick(locations[0].location);
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
              coordinate={marker.location}
              title={marker.mainTitle}
              // description={marker.description}
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
      <View style={styles.container}>
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
                  ? (setPick(marker.location), { ...marker, center: true })
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
