import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';

import Home from '../../../screens/bottomTab/Home';
import Map from '../../../screens/bottomTab/Map';
import { BottomTabParams, NestedProps } from '../../../types/navigationTypes';
import styles from './styles';
const Tab = createBottomTabNavigator<BottomTabParams>();

function BottomNavigation() {
  const navigation = useNavigation<NestedProps>();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'home'}
        component={Home}
        options={{
          headerTransparent: true,
          title: '',
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('stack', { screen: 'profileSetting' });
              }}
            >
              <Image
                style={styles.setting}
                source={require('../../../assets/images/home/setting.png')}
              />
            </Pressable>
          ),
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
              <Text style={styles.btnText}>+</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'map'}
        component={Map}
        options={{
          headerTransparent: true,
          title: '',
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
