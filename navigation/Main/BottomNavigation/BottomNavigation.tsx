import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';

import Home from '../../../screens/bottomTab/Home';
import BottomMap from '../../../screens/bottomTab/BottomMap';
import { BottomTabParams, NestedProps } from '../../../types/navigationTypes';
import styles from './styles';
import { checkListCtx } from '../../../Context/CheckListByServer';
import axios from 'axios';

const Tab = createBottomTabNavigator<BottomTabParams>();

function BottomNavigation() {
  const navigation = useNavigation<NestedProps>();
  const checkListContext = useContext(checkListCtx);

  const goCheckListHandler = async () => {
    try {
      const response = await axios.get('/api/check-list/init');
      await checkListContext?.setCheckListId(response.data.data.checkListId);
      navigation.navigate('stack', { screen: 'basicCheckList' });
    } catch (error) {
      console.error(error);
    }
  };

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
            goCheckListHandler();
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
        name={'bottomMap'}
        component={BottomMap}
        options={{
          headerTransparent: true,
          title: '',
          tabBarLabel: ({ focused }) => (
            <View>
              {focused ? (
                <Text style={[styles.title, styles.activeColor]}>??????</Text>
              ) : (
                <Text style={[styles.title, styles.inactiveColor]}>??????</Text>
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
