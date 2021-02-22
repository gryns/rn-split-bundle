// 获取名字
import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const GetName = () => {
  return (
    <>
      <StatusBar translucent={true} animated={true} />
      <View style={styles.name}>
        <Text>my name is gry!</Text>
      </View>
    </>
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
