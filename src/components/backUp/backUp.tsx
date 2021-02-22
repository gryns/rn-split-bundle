import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AntdIcon from 'react-native-vector-icons/AntDesign';
class BackUp extends Component {
  // 返回上一步
  handleBack = () => {
    const {goBack} = this.props;
    goBack();
  };

  render() {
    const {title = '暂无标题'} = this.props;
    return (
      <View style={styles.backUp}>
        <Text onPress={this.handleBack} style={[styles.backIcon, styles.head]}>
          <AntdIcon name="left" size={18} />
        </Text>
        <Text style={[styles.title, styles.head]}>{title}</Text>
        <Text style={[styles.right, styles.head]}>111</Text>
      </View>
    );
  }
}
const styles = {
  backUp: {
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffffe',
  },
  head: {
    lineHeight: 45,
    textAlign: 'center',
  },
  backIcon: {
    width: 45,
  },
  title: {
    flexGrow: 3,
  },
  right: {
    width: 45,
  },
};
export default BackUp;
