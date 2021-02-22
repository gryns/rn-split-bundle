import {Dimensions, Platform, StatusBar, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const OS = Platform.OS;
const ios = OS == 'ios';
const android = OS == 'android';
const isIPhoneX = ios && height == 812 && width == 375;
const statusBarHeight = ios ? (isIPhoneX ? 44 : 20) : StatusBar.currentHeight;

global.gScreen = {
  screen_width: width,
  screen_height: height,
  statusBarHeight: statusBarHeight,
  onePixelRatio: 1 / PixelRatio.get(),
  backgroundColor: '#f5f5f5',
};

// 设备
global.gDevice = {
  ios: ios,
  android: android,
  isIPhoneX: isIPhoneX,
};

// 背景
global.bg = {
  width,
  height,
  backgroundColor: '#FFFFFF',
};

// 水平垂直居中
global.boxCenter = {
  width,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
