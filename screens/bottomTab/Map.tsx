import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { styles } from './Map.style';
import { ILocations, ILocation } from '../../types/mapTypes';
import { ITEM_WIDTH, SLIDER_WIDTH } from '../../constants/Map.constant';
import { requestPermission } from '../../utils/LocationPermission';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { checkListCtx } from '../../Context/CheckListByServer';
import { DefaultText } from '../../CustomText';

const Map = () => {
  // mockup data
  const [locations, setLocations] = useState<ILocations[]>();

  // 슬라이드로 선택한 위치
  const [pick, setPick] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });
  const checkListContext = useContext(checkListCtx);
  const navigation = useNavigation<any>();

  const onCheckListMoveHandler = async (item: any) => {
    await checkListContext?.setCheckListId(item?.id);
    navigation.navigate('stack', { screen: 'basicCheckList' });
  };

  const SlideItem = ({ item }: any) => {
    return (
      <Pressable onPress={() => onCheckListMoveHandler(item)} style={styles.card}>
        <Image style={styles.image} source={{ uri: `${item.imgUri}` }} />
        <View>
          <Text style={styles.mainTitle}>{item.mainTitle}</Text>
          <View style={styles.subTitle}>
            <View style={styles.iconText}>
              <Image
                style={styles.distanceIcon}
                source={require('../../assets/images/map/mapDistance.png')}
              />
              <DefaultText style={styles.text}>
                {item.roomType}/{item.area}
              </DefaultText>
            </View>
            <View style={styles.iconText}>
              <Image
                style={styles.timeIcon}
                source={require('../../assets/images/map/mapTime.png')}
              />
              <DefaultText style={styles.text}>도보{item.distance}</DefaultText>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

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
                  marker.order === index
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
