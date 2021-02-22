import * as React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import img from './test.jpg';
class My extends Component {
  state = {
    width: bg.width,
    height: 0,
  };

  componentDidMount() {
    this.setImage();
  }

  // 设置图片大小
  setImage = () => {
    const {height, width} = Image.resolveAssetSource(img);
    this.setState({
      height: (bg.width * height) / width,
    });
  };

  render() {
    const {width, height} = this.state;
    return (
      <View style={styles.my}>
        <Text>我的tm</Text>
        <ScrollView>
          <FastImage
            source={img}
            style={{width, height}}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  my: {
    fontSize: 14,
    flex: 1,
  },
});

export default My;
