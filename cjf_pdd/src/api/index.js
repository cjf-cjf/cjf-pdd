import ajax from './ajax'

//  基础路径
const BASE_URL = 'http://127.0.0.1:3000';

//  请求方法

//  请求首页的轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');

//  请求首页的导航
export const getHomeNav = ()=>ajax(BASE_URL + '/api/homenav');

//  请求首页的商品数据
export const getHomeShopList = ()=>ajax(BASE_URL + '/api/homeshoplist');

//  请求推荐的商品数据
export const getRecommendShopList = ()=>ajax(BASE_URL + '/api/recommendshoplist');

//  请求搜索的列表数据
export const getSearchGoods = ()=>ajax(BASE_URL + '/api/searchgoods');





