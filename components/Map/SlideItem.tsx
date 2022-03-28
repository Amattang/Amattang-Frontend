import React from 'react';
import { Image, Text, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import { ILocations } from '../../types/mapTypes';
import { styles } from './SlideItem.style';

type Props = {
  item: ILocations;
};

const SlideItem = ({ item }: Props) => {
  return (
    <View style={styles.card}>
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
    </View>
  );
};

export default SlideItem;
