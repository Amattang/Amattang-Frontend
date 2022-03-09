import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { response } from '../../mockData/checkListOfOutside';
import styles from '../Landing/styles';
import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';

interface IProps {
  isEdit: boolean;
}

function OutsideOfBasicCheckList({ isEdit }: IProps) {
  const [checkLists, setCheckLists] = useState(response);
  return (
    <>
      <View style={styles.onBoardingFullScreen}>
        <ScrollView style={styles.checkListCards}>
          <CheckListComponent
            isEdit={isEdit}
            checkLists={checkLists}
            setCheckLists={setCheckLists}
          />
        </ScrollView>
      </View>
    </>
  );
}

export default OutsideOfBasicCheckList;
