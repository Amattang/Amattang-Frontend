import React from 'react';
import { homeScreenTypes } from '../../types/homeScreenTypes';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';

interface iProps {
  response: homeScreenTypes[];
}

function PinnedCheckList({ response }: iProps) {
  return (
    <>
      {response
        .filter((item) => item.pinned)
        .map((home) => (
          <Pressable style={styles.pinnedChecklistCard} key={home.id}>
            <Image
              style={styles.pinnedChecklistImg}
              source={{ uri: home.imgUri }}
              resizeMode="cover"
            />
            <View style={styles.pinnedChecklistSummaryCard}>
              <View>
                <DefaultText style={[styles.pinnedChecklistTitle, styles.blueText]}>
                  {home.mainTtle.length > 15 ? `${home.mainTtle.slice(0, 15)}...` : home.mainTtle}
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
    </>
  );
}

export default PinnedCheckList;
