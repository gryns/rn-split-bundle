import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '../pages/main';
import My from '../pages/my';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        tabStyle: {
          marginBottom: 4,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{tabBarLabel: '首页'}}
      />
      <Tab.Screen name="My" component={My} options={{tabBarLabel: '我的'}} />
    </Tab.Navigator>
  );
}
