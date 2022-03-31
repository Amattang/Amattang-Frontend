import React, { useContext, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from './styles';
import axios from 'axios';
import { checkListCtx } from '../../Context/CheckListByServer';
interface IProps {
  checkListSummary: any;
}
function CheckListSummaryComponenet({ checkListSummary }: IProps) {
  const checkListContext = useContext(checkListCtx);

  const [pin, setPin] = useState(checkListSummary.pinned);
  const pinCheckListHandler = () => {
    axios
      .put(`api/check-list/main`, { checkListId: checkListContext?.checkListId, pinned: !pin })
      .then(() => setPin(!pin))
      .catch((e) => console.error(e));
  };
  return (
    <>
      <View style={styles.summaryWrapper}>
        <Pressable onPress={pinCheckListHandler}>
          <Image
            style={styles.summaryPinImg}
            source={
              pin
                ? require('../../assets/images/checkList/pinnedCheckList.png')
                : require('../../assets/images/checkList/unPinnedCheckList.png')
            }
          />
          <Image
            resizeMode={'cover'}
            style={styles.summaryMainImg}
            source={
              checkListSummary.imgUri
                ? { uri: checkListSummary.imgUri }
                : require('../../assets/images/home/homeMainImg.png')
            }
          />
        </Pressable>
        <View style={styles.summaryWhiteCardWrapper}>
          <View style={[styles.summayWhiteCardContentWrapper]}>
            <DefaultText style={[styles.summaryContentText, styles.summaryContentTitle]}>
              {checkListSummary.title
                ? checkListSummary.title.length > 20
                  ? `${checkListSummary.title.slice(0, 20)}...`
                  : checkListSummary.title
                : '체크리스트 이름을 정해주세요!'}
            </DefaultText>
            <DefaultText style={[styles.summaryContentText, styles.summaryContentAddress]}>
              {checkListSummary.address
                ? checkListSummary.address.length > 20
                  ? `${checkListSummary.address.slice(0, 20)}...`
                  : checkListSummary.address
                : '해당 매물 위치를 입력해주세요!'}
            </DefaultText>
          </View>
          <View style={[styles.summayWhiteCardContentWrapper]}>
            {checkListSummary.address}
            {checkListSummary.roomType && checkListSummary.area && checkListSummary.form ? (
              <View style={styles.summaryRightContents}>
                <Image
                  style={styles.summaryContentImg}
                  source={require('../../assets/images/home/roomTypeImg.png')}
                />
                <DefaultText style={[styles.summaryContentText]}>
                  {checkListSummary.roomType} / {checkListSummary.area} / {checkListSummary.form}
                </DefaultText>
              </View>
            ) : null}
            {checkListSummary.distance ? (
              <View style={styles.summaryRightContents}>
                <Image
                  style={[styles.summaryContentImg, styles.distanceImg]}
                  source={require('../../assets/images/home/distanceImg.png')}
                />
                <DefaultText style={[styles.summaryContentText]}>
                  {checkListSummary.distance}
                </DefaultText>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </>
  );
}
export default CheckListSummaryComponenet;
