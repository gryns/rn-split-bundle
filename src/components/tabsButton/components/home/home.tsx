import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, StatusBar, Image } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { ApiBannerData } from '@/api/index';
import Swiper from 'react-native-swiper';

import GButton from '@/components/button';

class Home extends Component {
	props: any;
	state = {
		banners: [],
		bannerH: 150,
		network: null,
		testData: [],
	};
	componentDidMount() {
		setTimeout(() => {
			SplashScreen.hide(); // 隐藏启动屏
		}, 3000);
		SplashScreen.hide(); // 隐藏启动屏
		// 获取请求
		this.getBannerData();

		// // 网络状态
		NetInfo.fetch().then((info: any) => {
			this.setState({
				network: info.isConnected,
			});
		});

		fetch('https://reactnative.dev/movies.json', {
			method: 'GET',
		})
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				this.setState({
					testData: res.movies,
				});
			});
	}

	getBannerData = async () => {
		try {
			const data: any = await ApiBannerData({ type: 1 });
			this.setState({
				banners: data.banners,
			});
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	// 渲染banner
	renderBanner = () => {
		const { banners, bannerH } = this.state;
		return banners.map((item: any) => {
			return (
				<View key={item.targetId}>
					<Image source={{ uri: item.pic }} style={{ width: bg.width, height: bannerH }} />
				</View>
			);
		});
	};

	render() {
		const { bannerH, network } = this.state;
		return (
			<View style={styles.contain}>
				<StatusBar barStyle="default" />
				<Text>HOME1111ddd</Text>
				<View style={{ margin: 10 }}>
					<GButton title="跳转webview页面" onPress={this.handleLink} />
				</View>
				<View height={bannerH}>
					<Swiper loop={false}>{this.renderBanner()}</Swiper>
				</View>
				<View style={{ ...boxCenter }}>
					<Text>热门专区</Text>
					<Text>{`连接状态：${network}`}</Text>
				</View>
				<View>{this._renderData()}</View>
			</View>
		);
	}

	handleLink = () => {
		const { navigate } = this.props.navigation;
		navigate('Test', { name: 'gry' });
	};
	_renderData = () => {
		const { testData } = this.state;
		return testData.map((item) => {
			return <Text key={item.id}>{item.title}</Text>;
		});
	};
}

const styles = {
	contain: {
		flex: 1,
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5',
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
};

export default Home;
