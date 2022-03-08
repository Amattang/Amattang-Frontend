import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';

function EmptyHome() {
  return (
    <>
      <View style={styles.emptyHomeMainImg}>
        <Image source={require('../../assets/images/home/homeMainImg.png')} />
      </View>
      <DefaultText style={[styles.emptyHomeText, styles.emptyHomeMainTitle]}>
        작성한 체크리스트가 없어요!
      </DefaultText>
      <DefaultText style={[styles.emptyHomeText, styles.emptyHomeSubTitle]}>
        원하는 집을 방문하고 꼼꼼히 기록해보세요
      </DefaultText>
    </>
  );
}

export default EmptyHome;
