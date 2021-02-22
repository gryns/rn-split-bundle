// 获取名字
import React from 'react';
import {View, Text} from 'react-native';

const Test = () => {
  return (
    <View style={styles.name}>
      <Text>my name is Test!</Text>
    </View>
  );
};

export default Test;

const styles = {
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
};
