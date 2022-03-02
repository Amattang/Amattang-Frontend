import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

function OnBoarding() {
  return (
    <>
      <View style={styles.fullScreen}>
        <View style={styles.upperElement}>
          <Text style={styles.mainText}>우리집을 체크하며 아맞땅을{'\n'}미리 경험해보세요</Text>
        </View>
      </View>
    </>
  );
}

export default OnBoarding;
