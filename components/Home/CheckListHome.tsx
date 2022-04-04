import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';

import { DefaultText } from '../../CustomText';
import styles from './styles';
import PinnedCheckList from './PinnedCheckList';
import UnPinnedCheckList from './UnPinnedCheckList';
import { homeScreenTypes } from '../../types/homeScreenTypes';

interface IProps {
  homeCheckList: homeScreenTypes[];
  onRefresh: any;
  refreshing: boolean;
}

function CheckListHome({ homeCheckList, refreshing, onRefresh }: IProps) {
  return (
    <View style={styles.fullScreenWrapper}>
      <DefaultText style={[styles.welcomeTitle]}>
        Find your{'\n'}
        home sweet home 🏠
      </DefaultText>
      <View style={styles.unpinnedChecklistWrapper}>
        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {homeCheckList.some((item) => item.pinned) ? (
            <DefaultText style={[styles.pinnedText]}>📌 고정된 리스트</DefaultText>
          ) : null}
          <ScrollView horizontal={true}>
            {homeCheckList
              .filter((item) => item.pinned)
              .map((pinnedCheckList) => (
                <PinnedCheckList key={pinnedCheckList.id} pinnedCheckList={pinnedCheckList} />
              ))}
          </ScrollView>
          {homeCheckList
            .filter((item) => !item.pinned)
            .map((unPinnedCheckList) => (
              <UnPinnedCheckList key={unPinnedCheckList.id} unPinnedCheckList={unPinnedCheckList} />
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default CheckListHome;
