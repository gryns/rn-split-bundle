import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import WebView from 'react-native-webview';
import img from '../test.jpg';
class My extends Component {
	state = {
		width: 360,
		height: 500,
	};

	componentDidMount() {
		this.setImage();
	}

	// 设置图片大小
	setImage = () => {
		const { height, width } = Image.resolveAssetSource(img);
		this.setState({
			height: (375 * height) / width,
		});
	};
	render() {
		const { width, height } = this.state;
		return (
			<View style={styles.my}>
				<Text>我的tm</Text>
				<ScrollView>
					{/* <WebView
						originWhitelist={['*']}
						source={{
							html: `<img width='100%' src='http://sccs.ejyshop.com/x-site/public/images/jifen.jpg' alt='图片' />`,
						}}
						// source={{ uri: 'http://60.191.15.90:3002/points-rule' }}
						style={{ width: 375, height }}
					/> */}
					<Image
            source={{ uri: 'http://sccs.ejyshop.com/x-site/public/images/jifen.jpg' }}
            source={img}
            style={{ width, height }}
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
