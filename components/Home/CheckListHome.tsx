import React from 'react';
import { ScrollView, View } from 'react-native';

import { DefaultText } from '../../CustomText';
import styles from './styles';
import PinnedCheckList from './PinnedCheckList';
import UnPinnedCheckList from './UnPinnedCheckList';
import { homeScreenTypes } from '../../types/homeScreenTypes';

interface IProps {
  homeCheckList: homeScreenTypes[];
}

function CheckListHome({ homeCheckList }: IProps) {
  return (
    <View style={styles.fullScreenWrapper}>
      <DefaultText style={[styles.welcomeTitle]}>
        Find your{'\n'}
        home sweet home 🏠
      </DefaultText>
      <View style={styles.unpinnedChecklistWrapper}>
        <ScrollView>
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
