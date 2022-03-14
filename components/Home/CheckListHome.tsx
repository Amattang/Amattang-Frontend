import React from 'react';
import { ScrollView, View } from 'react-native';

import { response } from '../../mockData/homeMockUpData';
import { DefaultText } from '../../CustomText';
import styles from './styles';
import PinnedCheckList from './PinnedCheckList';
import UnPinnedCheckList from './UnPinnedCheckList';

function CheckListHome() {
  return (
    <View style={styles.fullScreenWrapper}>
      <DefaultText style={[styles.welcomeTitle]}>
        Find your{'\n'}
        home sweet home 🏠
      </DefaultText>
      <View style={styles.unpinnedChecklistWrapper}>
        <ScrollView>
          <DefaultText style={[styles.pinnedText]}>📌 고정된 리스트</DefaultText>
          <View style={styles.pinnedChecklistWrapper}>
            <ScrollView horizontal={true}>
              <PinnedCheckList response={response} />
            </ScrollView>
          </View>

          <UnPinnedCheckList response={response} />
        </ScrollView>
      </View>
    </View>
  );
}

export default CheckListHome;
