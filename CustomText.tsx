import React from 'react';
import { StyleSheet, Text } from 'react-native';

export function DefaultText(props: any) {
  return <Text style={[styles.defaultFontText, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  defaultFontText: {
    color: 'black',
    fontFamily: 'AppleSDGothicNeoM00',
  },
});
