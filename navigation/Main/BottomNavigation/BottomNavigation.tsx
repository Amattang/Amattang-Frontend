import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';

import Home from '../../../screens/bottomTab/Home';
import Map from '../../../screens/bottomTab/Map';
import { BottomTabParams, NestedProps } from '../../../types/navigationTypes';
import styles from './styles';
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
              <Image source={require('../../../assets/images/home/activeAll.png')} />
            ) : (
              <Image source={require('../../../assets/images/home/inactiveAll.png')} />
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
              <Image source={require('../../../assets/images/home/activeMap.png')} />
            ) : (
              <Image source={require('../../../assets/images/home/inactiveMap.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
