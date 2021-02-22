import request from './request';

// banber 接口 发现音乐
/**
 * type : 0:pc , 1:android , 2: iphone , 3: ipad
 * **/
export const ApiBannerData = (params: any) => request('/banner', params, 'GET');

// 最新歌曲
export const newSongData = () => request('/personalized/newsong', {}, 'GET');

