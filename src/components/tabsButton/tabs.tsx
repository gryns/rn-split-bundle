/**
 * 图标地址
 * https://oblador.github.io/react-native-vector-icons/
 * **/

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './components/home';
import MyPage from './components/my';

const Tab = createBottomTabNavigator();
const tabConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: (naviga: any) => {
    const {navigation} = naviga;
    return {
      tabBarIcon: (tabConfig: any) => {
        const {focused, horizontal, tintColor} = tabConfig;
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (routeName === 'My') {
          iconName = focused ? 'ios-people-outline' : 'ios-people-sharp';
        }

        // You can return any component that you like here!
        return (
          <Ionicons
            name={iconName}
            size={25}
            color={tintColor}
            onPress={() => {
              const {state, navigate} = navigation;
              navigate(state.key);
              console.log('tabs');
            }}
          />
        );
      },
    };
  },
  lazy: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#00bbcc',
    inactiveTintColor: 'gray',
  },
};

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="My" component={MyPage} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
