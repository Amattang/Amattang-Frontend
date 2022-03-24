import React, { useContext } from 'react';
import { homeScreenTypes } from '../../types/homeScreenTypes';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';
import { checkListCtx } from '../../Context/CheckListByServer';
import { useNavigation } from '@react-navigation/native';

interface iProps {
  pinnedCheckList: homeScreenTypes | null;
}

function PinnedCheckList({ pinnedCheckList }: iProps) {
  const checkListContext = useContext(checkListCtx);
  const navigation = useNavigation<any>();

  const onCheckListMoveHandler = async () => {
    await checkListContext?.setCheckListId(Number(pinnedCheckList?.id));
    navigation.navigate('stack', { screen: 'basicCheckList' });
  };
  return (
    <>
      <DefaultText style={[styles.pinnedText]}>📌 고정된 리스트</DefaultText>
      {pinnedCheckList ? (
        <Pressable
          onPress={onCheckListMoveHandler}
          style={styles.pinnedChecklistCard}
          key={pinnedCheckList?.id}
        >
          {pinnedCheckList.imgUri ? (
            <Image
              style={styles.pinnedChecklistImg}
              source={{ uri: pinnedCheckList.imgUri }}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={[styles.pinnedChecklistImg]}
              source={require('../../assets/images/home/mainLogo.png')}
              resizeMode="contain"
            />
          )}
          <View style={styles.pinnedChecklistSummaryCard}>
            <View>
              <DefaultText style={[styles.pinnedChecklistTitle, styles.blueText]}>
                {pinnedCheckList.mainTitle
                  ? pinnedCheckList.mainTitle.length > 15
                    ? `${pinnedCheckList.mainTitle.slice(0, 15)}...`
                    : pinnedCheckList.mainTitle
                  : '체크리스트 이름을 만들어주세요!'}
              </DefaultText>
              <DefaultText style={styles.pinnedChecklistAddress}>
                {pinnedCheckList.address
                  ? pinnedCheckList.address.length > 20
                    ? `${pinnedCheckList.address.slice(0, 20)}...`
                    : pinnedCheckList.address
                  : '해당 매물 위치를 입력해주세요!'}
              </DefaultText>
            </View>
            <View style={styles.bottomElements}>
              {pinnedCheckList?.roomType && pinnedCheckList?.area && (
                <View style={[[styles.bottomElement, styles.roomType]]}>
                  <Image source={require('../../assets/images/home/roomTypeImg.png')} />
                  <DefaultText style={[styles.blueText, styles.bottomElementText]}>
                    {pinnedCheckList?.roomType} / {pinnedCheckList?.area}
                  </DefaultText>
                </View>
              )}
              {pinnedCheckList?.distance && (
                <View style={[styles.bottomElement]}>
                  <Image source={require('../../assets/images/home/distanceImg.png')} />
                  <DefaultText style={[styles.blueText, styles.bottomElementText]}>
                    {pinnedCheckList?.distance}
                  </DefaultText>
                </View>
              )}
            </View>
          </View>
        </Pressable>
      ) : null}
    </>
  );
}

export default PinnedCheckList;
