import React from 'react';
import { Image, View } from 'react-native';
import { DefaultText } from '../../../CustomText';
import styles from '../styles';

function BlankedMyItem() {
  return (
    <View style={[styles.myItem, styles.blankedMyItem]}>
      <Image source={require('../../../assets/images/checkList/myItemBlankedImg.png')} />
      <DefaultText style={[styles.checkListMainTitle, styles.blueText, styles.myItemMainTitle]}>
        내 항목이 없어요!
      </DefaultText>
      <DefaultText style={[styles.checkListSubTitle, styles.blueText, styles.myItemSubTitle]}>
        체크할 항목을 직접 만들어보세요
      </DefaultText>
    </View>
  );
}

export default BlankedMyItem;
