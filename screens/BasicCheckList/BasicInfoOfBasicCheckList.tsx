import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from '../Landing/styles';
import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';
import { response } from '../../mockData/checkListOfBasicInfo';

interface IProps {
  isEdit: boolean;
}

function BasicInfoOfBasicCheckList({ isEdit }: IProps) {
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

export default BasicInfoOfBasicCheckList;
