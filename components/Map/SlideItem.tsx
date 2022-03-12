import React from 'react';
import { Image, Text, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import { ISlides } from '../../types/mapTypes';
import { styles } from './SlideItem.style';

const SlideItem = ({ item }: ISlides) => {
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

export default SlideItem;
