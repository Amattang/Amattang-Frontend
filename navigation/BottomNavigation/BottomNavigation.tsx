import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/bottomTab/Home';
import Map from '../../screens/bottomTab/Map';
import CheckListBtn from '../../components/CheckListBtn';
import { BottomTabParams } from '../navigationTypes';
import { Image, StyleSheet, Text, View } from 'react-native';
import { mainBlue, mainGray } from '../../color';

const Tab = createBottomTabNavigator<BottomTabParams>();

function BottomNavigation() {
  return (
    <>
      <CheckListBtn />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={'home'}
          component={Home}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={styles.all}>
                {focused ? (
                  <Text style={[styles.title, styles.activeColor]}> ALL</Text>
                ) : (
                  <Text style={[styles.title, styles.inactiveColor]}> ALL</Text>
                )}
              </View>
            ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={[styles.tabBarIcon, styles.all]}
                  source={require('../../assets/images/home/activeAll.png')}
                />
              ) : (
                <Image
                  style={[styles.tabBarIcon, styles.all]}
                  source={require('../../assets/images/home/inactiveAll.png')}
                />
              ),
          }}
        />
        <Tab.Screen
          name={'map'}
          component={Map}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={styles.map}>
                {focused ? (
                  <Text style={[styles.title, styles.activeColor]}>지도</Text>
                ) : (
                  <Text style={[styles.title, styles.inactiveColor]}>지도</Text>
                )}
              </View>
            ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={[styles.tabBarIcon, styles.map]}
                  source={require('../../assets/images/home/activeMap.png')}
                />
              ) : (
                <Image
                  style={[styles.tabBarIcon, styles.map]}
                  source={require('../../assets/images/home/inactiveMap.png')}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {},
  activeColor: { color: mainBlue },
  inactiveColor: { color: mainGray },
  title: { fontSize: 12, fontWeight: 'normal' },
  all: { marginRight: 30 },
  map: { marginLeft: 30 },
});

export default BottomNavigation;
