import React, { useEffect, useState } from 'react';
import { Button, Text, View, Platform, PermissionsAndroid, Dimensions, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { styles } from './Map.style';
import { ILocations, ILocation } from '../../types/mapTypes';
import SlideItem from '../../components/Map/SlideItem';
import { ITEM_WIDTH, SLIDER_WIDTH } from '../../constants/Map.constant';
import { requestPermission } from '../../utils/LocationPermission';
import axios from 'axios';

const Map = () => {
  // mockup data
  const [locations, setLocations] = useState<ILocations[]>();

  // 슬라이드로 선택한 위치
  const [pick, setPick] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    axios
      .get(`./api/check-list`)
      .then((res) => {
        console.log(res.data.data);
        setLocations(res.data.data);
        requestPermission().then((result) => {
          if (result === 'granted') {
            setPick(res.data.data[0].location);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {pick && locations && (
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
              description={marker.address}
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
      {locations && (
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
                    ? (setPick(marker.location), { ...marker, center: true })
                    : { ...marker, center: false }
                )
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Map;
