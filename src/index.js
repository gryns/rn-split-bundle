import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from 'react-native-splash-screen';

import Routers from './navigation';
const Stack = createStackNavigator();
function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide(); // 隐藏启动屏
    });
  }, []);

  return (
    <NavigationContainer>
		<Stack.Navigator
			headerMode="none"
		>
			<Stack.Screen name="MainTabs" component={Routers} />
		</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
