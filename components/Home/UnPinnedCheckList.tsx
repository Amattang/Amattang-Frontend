import React from 'react';
import { homeScreenTypes } from '../../types/homeScreenTypes';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';

interface iProps {
  response: homeScreenTypes[];
}

function UnPinnedCheckList({ response }: iProps) {
  return (
    <>
      {response
        .filter((item) => !item.pinned)
        .map((home) => (
          <Pressable style={styles.unpinnedChecklistCard} key={home.id}>
            <Image
              style={styles.unpinnedChecklistImg}
              source={{ uri: home.imgUri }}
              resizeMode="cover"
            />
            <View style={styles.unpinnedChecklistSummaryCard}>
              <View>
                <DefaultText style={[styles.unpinnedChecklistTitle]}>
                  {home.mainTtle.length > 15 ? `${home.mainTtle.slice(0, 15)}...` : home.mainTtle}
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
    </>
  );
}

export default UnPinnedCheckList;
