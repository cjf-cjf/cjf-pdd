//引入需要的模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../pages/Home/Home'
import chat from './../pages/chat/chat'
import me from './../pages/me/me'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'

import hot from './../pages/Home/Children/hot/hot'
import box from './../pages/Home/Children/box'
import dress from './../pages/Home/Children/dress'
import ele from './../pages/Home/Children/ele'
import food from './../pages/Home/Children/food'
import general from './../pages/Home/Children/general'
import man from './../pages/Home/Children/man'
import mbay from './../pages/Home/Children/mbay'
import woman from './../pages/Home/Children/woman'
import shirt from './../pages/Home/Children/shirt'

//声明使用
Vue.use(VueRouter);

//输出路由对象
export default new VueRouter({
    //配置一级路由
    routes:[
        {
            path:'/home',
            component:Home,
            children:[  // 配置二级路由
                {path:'hot',component:hot},
                {path:'box',component:box},
                {path:'dress',component:dress},
                {path:'ele',component:ele},
                {path:'food',component:food},
                {path:'general',component:general},
                {path:'man',component:man},
                {path:'woman',component:woman},
                {path:'shirt',component:shirt},
                {path:'mbay',component:mbay},
                {path:'/home',redirect:'/home/hot'}
            ]
        },
        {
            path:'/recommend',
            component:Recommend
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/chat',
            component:chat
        },
        {
            path:'/me',
            component:me
        },
        {
            path:'/',
            redirect:'/home'
        },
    ]
});