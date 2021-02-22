// 获取名字
import React, {useEffect} from 'react';
import {View, Text, AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {name as appName} from './app.json';

const GetName = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide(); // 隐藏启动屏
    }, 2000);
  }, []);
  return (
    <View style={styles.name}>
      <Text>my name is gry!</Text>
    </View>
  );
};

export default GetName;

const styles = {
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
};
