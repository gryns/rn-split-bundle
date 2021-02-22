import React from 'react';
import {Button, Text, View, TouchableHighlight} from 'react-native';

function ButtonG(props: any) {
  const {title = '测试', onPress} = props;
  return (
    <View>
      <TouchableHighlight onPress={onPress} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
const styles = {
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    padding: 8,
    color: 'white',
    fontSize: 14,
  },
};
export default ButtonG;
