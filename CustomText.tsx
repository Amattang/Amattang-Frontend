import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { mainBlack } from './color';

export function DefaultText(props: any) {
  return <Text style={[styles.defaultFontText, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  defaultFontText: {
    color: mainBlack,
    fontFamily: 'AppleSDGothicNeoM00',
  },
});
