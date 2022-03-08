import React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import { homeScreenTypes } from '../../types/homeScreenTypes';
import styles from './styles';

function CheckListHome() {
  const response = [
    {
      imgUri: 'https://picsum.photos/id/237/200/100',
      id: 'id1',
      mainTtle: '카페거리 맞은편 풀옵션 양문형 냉장고',
      address: '경기도 화성시 동탄환대로 27길 45',
      distance: '도보 10분',
      roomType: '원룸',
      area: '7평',
      pinned: true,
    },
    {
      imgUri: 'https://picsum.photos/id/23/200/100',
      id: 'id2',
      mainTtle: '카페거리 맞은편 풀옵션',
      address: '경기도 화성시 동탄환대로 27길 45',
      distance: '도보 10분',
      roomType: '원룸',
      area: '7평',
      pinned: false,
    },
    {
      imgUri: 'https://picsum.photos/id/434/200/100',
      id: 'id31',
      mainTtle: '카페거리 맞은편 풀옵션',
      address: '경기도 화성시 동탄환대로 27길 45',
      distance: '도보 10분',
      roomType: '원룸',
      area: '7평',
      pinned: true,
    },
    {
      imgUri: 'https://picsum.photos/id/14/200/100',
      id: 'id4',
      mainTtle: '카페거리 맞은편 풀옵션',
      address: '경기도 화성시 동탄환대로 27길 45',
      distance: '도보 10분',
      roomType: '원룸',
      area: '7평',
      pinned: false,
    },
    {
      imgUri: 'https://picsum.photos/id/14/200/100',
      id: 'id5',
      mainTtle: '카페거리 맞은편 풀옵션',
      address: '경기도 화성시 동탄환대로 27길 45',
      distance: '도보 10분',
      roomType: '원룸',
      area: '7평',
      pinned: true,
    },
    {
      imgUri: 'https://picsum.photos/id/114/200/100',
      id: 'id6',
      mainTtle: '카페거리 맞은편 풀옵션',
      address: '경기도 화성시 동탄환대로 27길 45',
      distance: '도보 10분',
      roomType: '원룸',
      area: '7평',
      pinned: true,
    },
    {
      imgUri: 'https://picsum.photos/id/114/200/100',
      id: 'id7',
      mainTtle: '카페거리 맞은편 풀옵션',
      address: '경기도 화성시 동탄환대로 27길 45',
      distance: '도보 10분',
      roomType: '원룸',
      area: '7평',
      pinned: false,
    },
    {
      imgUri: 'https://picsum.photos/id/114/200/100',
      id: 'id8',
      mainTtle: '카페거리 맞은편 풀옵션',
      address: '경기도 화성시 동탄환대로 27길 45',
      distance: '도보 10분',
      roomType: '원룸',
      area: '7평',
      pinned: false,
    },
  ];

  return (
    <View style={styles.fullScreenWrapper}>
      <DefaultText style={[styles.pinnedText]}>📌 고정된 리스트</DefaultText>
      <View style={styles.pinnedChecklistWrapper}>
        <ScrollView horizontal={true}>
          {response
            .filter((item: homeScreenTypes) => item.pinned)
            .map((home: homeScreenTypes) => (
              <Pressable style={styles.pinnedChecklistCard} key={home.id}>
                <Image
                  style={styles.pinnedChecklistImg}
                  source={{ uri: home.imgUri }}
                  resizeMode="cover"
                />
                <View style={styles.pinnedChecklistSummaryCard}>
                  <View>
                    <DefaultText style={[styles.pinnedChecklistTitle, styles.blueText]}>
                      {home.mainTtle.length > 15
                        ? `${home.mainTtle.slice(0, 15)}...`
                        : home.mainTtle}
                    </DefaultText>
                    <DefaultText style={styles.pinnedChecklistAddress}>
                      {home.address.length > 20 ? `${home.address.slice(0, 20)}...` : home.address}
                    </DefaultText>
                  </View>
                  <View style={styles.bottomElements}>
                    <View style={[styles.bottomElement]}>
                      <Image source={require('../../assets/images/home/roomTypeImg.png')} />
                      <DefaultText style={[styles.blueText, styles.bottomElementText]}>
                        {home.roomType} / {home.area}
                      </DefaultText>
                    </View>
                    <View style={[styles.bottomElement, styles.distanceWrapper]}>
                      <Image source={require('../../assets/images/home/distanceImg.png')} />
                      <DefaultText style={[styles.blueText, styles.bottomElementText]}>
                        {home.distance}
                      </DefaultText>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
        </ScrollView>
      </View>

      <View style={styles.unpinnedChecklistWrapper}>
        <ScrollView>
          {response
            .filter((item: homeScreenTypes) => !item.pinned)
            .map((home: homeScreenTypes) => (
              <Pressable style={styles.unpinnedChecklistCard} key={home.id}>
                <Image
                  style={styles.unpinnedChecklistImg}
                  source={{ uri: home.imgUri }}
                  resizeMode="cover"
                />
                <View style={styles.unpinnedChecklistSummaryCard}>
                  <View>
                    <DefaultText style={[styles.unpinnedChecklistTitle]}>
                      {home.mainTtle.length > 15
                        ? `${home.mainTtle.slice(0, 15)}...`
                        : home.mainTtle}
                    </DefaultText>
                    <DefaultText style={styles.unpinnedChecklistAddress}>
                      {home.address.length > 20 ? `${home.address.slice(0, 20)}...` : home.address}
                    </DefaultText>
                  </View>
                  <View style={styles.bottomElements}>
                    <View style={[styles.bottomElement]}>
                      <Image source={require('../../assets/images/home/roomTypeImg.png')} />
                      <DefaultText style={[styles.blueText, styles.bottomElementText]}>
                        {home.roomType} / {home.area}
                      </DefaultText>
                    </View>
                    <View style={[styles.bottomElement, styles.distanceWrapper]}>
                      <Image source={require('../../assets/images/home/distanceImg.png')} />
                      <DefaultText style={[styles.blueText, styles.bottomElementText]}>
                        {home.distance}
                      </DefaultText>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default CheckListHome;
