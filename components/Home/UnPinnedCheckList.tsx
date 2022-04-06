import React, { useContext } from 'react';
import { homeScreenTypes } from '../../types/homeScreenTypes';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';
import { useNavigation } from '@react-navigation/native';
import { checkListCtx } from '../../Context/CheckListByServer';

interface iProps {
  unPinnedCheckList: homeScreenTypes | null;
}

function UnPinnedCheckList({ unPinnedCheckList }: iProps) {
  const checkListContext = useContext(checkListCtx);
  const navigation = useNavigation<any>();

  const onCheckListMoveHandler = async () => {
    await checkListContext?.setCheckListId(Number(unPinnedCheckList?.id));
    navigation.navigate('stack', { screen: 'basicCheckList' });
  };
  return (
    <>
      {unPinnedCheckList ? (
        <Pressable
          onPress={onCheckListMoveHandler}
          style={styles.unpinnedChecklistCard}
          key={unPinnedCheckList.id}
        >
          {unPinnedCheckList.imgUri ? (
            <Image
              style={styles.unpinnedChecklistImg}
              source={{ uri: unPinnedCheckList.imgUri }}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.unpinnedDefaultImgWrapper}>
              <Image
                style={[styles.unpinnedChecklistImg]}
                source={require('../../assets/images/checkList/checkLIstDefaultImg.png')}
                resizeMode="contain"
              />
            </View>
          )}
          <View style={styles.unpinnedChecklistSummaryCard}>
            <View>
              <DefaultText style={[styles.unpinnedChecklistTitle]}>
                {unPinnedCheckList.mainTitle
                  ? unPinnedCheckList.mainTitle.length > 15
                    ? `${unPinnedCheckList.mainTitle.slice(0, 15)}...`
                    : unPinnedCheckList.mainTitle
                  : '체크리스트 이름을 만들어주세요!'}
              </DefaultText>
              <DefaultText style={styles.unpinnedChecklistAddress}>
                {unPinnedCheckList.address
                  ? unPinnedCheckList.address.length > 20
                    ? `${unPinnedCheckList.address.slice(0, 20)}...`
                    : unPinnedCheckList.address
                  : '해당 매물 위치를 입력해주세요!'}
              </DefaultText>
            </View>
            <View style={styles.bottomElements}>
              {unPinnedCheckList.roomType && unPinnedCheckList.area && (
                <View style={[styles.bottomElement, styles.roomType]}>
                  <Image source={require('../../assets/images/home/roomTypeImg.png')} />
                  <DefaultText style={[styles.blueText, styles.bottomElementText]}>
                    {unPinnedCheckList.roomType} /{unPinnedCheckList.area}
                  </DefaultText>
                </View>
              )}
              <View style={[styles.bottomElement]}>
                {unPinnedCheckList.distance && (
                  <>
                    <Image source={require('../../assets/images/home/distanceImg.png')} />
                    <DefaultText style={[styles.blueText, styles.bottomElementText]}>
                      {unPinnedCheckList.distance}
                    </DefaultText>
                  </>
                )}
              </View>
            </View>
          </View>
        </Pressable>
      ) : null}
    </>
  );
}

export default UnPinnedCheckList;
