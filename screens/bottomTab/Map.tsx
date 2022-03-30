import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { styles } from './Map.style';
<<<<<<< HEAD
import { ILocations, ILocation } from '../../types/mapTypes';
=======
import { ILocation, ILocations } from '../../types/mapTypes';
import SlideItem from '../../components/Map/SlideItem';
>>>>>>> 0d4a6808b28901476b2ade5b1aecd17dc27c18e6
import { ITEM_WIDTH, SLIDER_WIDTH } from '../../constants/Map.constant';
import { requestPermission } from '../../utils/LocationPermission';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { checkListCtx } from '../../Context/CheckListByServer';
import { DefaultText } from '../../CustomText';

const Map = () => {
  // mockup data
<<<<<<< HEAD
  const [locations, setLocations] = useState<ILocations[]>();

=======
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
>>>>>>> 0d4a6808b28901476b2ade5b1aecd17dc27c18e6
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
<<<<<<< HEAD
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
=======
    requestPermission().then((result) => {
      if (result === 'granted') {
        setPick(locations[0].location);
      }
    });
>>>>>>> 0d4a6808b28901476b2ade5b1aecd17dc27c18e6
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
<<<<<<< HEAD
              description={marker.address}
=======
              // description={marker.description}
>>>>>>> 0d4a6808b28901476b2ade5b1aecd17dc27c18e6
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 0d4a6808b28901476b2ade5b1aecd17dc27c18e6
    </View>
  );
};

export default Map;
