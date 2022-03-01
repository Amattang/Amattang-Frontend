import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';

import Home from '../../screens/bottomTab/Home';
import Map from '../../screens/bottomTab/Map';
import { BottomTabParams, NestedProps } from '../navigationTypes';
import { mainBlue, mainGray } from '../../color';

const Tab = createBottomTabNavigator<BottomTabParams>();

function BottomNavigation() {
  const navigation = useNavigation<NestedProps>();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={'home'}
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <View>
              {focused ? (
                <Text style={[styles.title, styles.activeColor]}> ALL</Text>
              ) : (
                <Text style={[styles.title, styles.inactiveColor]}> ALL</Text>
              )}
            </View>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={require('../../assets/images/home/activeAll.png')} />
            ) : (
              <Image source={require('../../assets/images/home/inactiveAll.png')} />
            ),
        }}
      />
      <Tab.Screen
        name={'checkList'}
        children={() => null}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('stack', { screen: 'basicCheckList' });
          },
        })}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View style={[styles.btnWrapper]}>
              <Text style={styles.BtnText}>+</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'map'}
        component={Map}
        options={{
          tabBarLabel: ({ focused }) => (
            <View>
              {focused ? (
                <Text style={[styles.title, styles.activeColor]}>지도</Text>
              ) : (
                <Text style={[styles.title, styles.inactiveColor]}>지도</Text>
              )}
            </View>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={require('../../assets/images/home/activeMap.png')} />
            ) : (
              <Image source={require('../../assets/images/home/inactiveMap.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  activeColor: { color: mainBlue },
  inactiveColor: { color: mainGray },
  title: { fontSize: 12, fontWeight: 'normal' },
  btnWrapper: {
    position: 'absolute',
    width: 55,
    height: 55,
    backgroundColor: mainBlue,
    borderRadius: 50,
    marginHorizontal: 170,
    bottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
    paddingBottom: 2.5,
    paddingLeft: 2.5,
  },
});

export default BottomNavigation;
