/*
     入口Js :创建VUE实例
*/
import Vue from 'vue'
import App from './App'
import store from './store'

//引入路由器
import router from './router/index.js'
//引入Tab模块
import lytab from 'ly-tab'

Vue.use(lytab);

new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
})