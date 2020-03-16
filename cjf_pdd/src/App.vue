<template>
    <div id="app">
     <router-view> </router-view>  
     <tab-bar></tab-bar>
    </div>
</template>
<script>
//引入组件
import tabBar from './components/tabbar/tabbar'

export default {
    name:"App",
    components:{  //注册组件
        tabBar
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
#app
   width 100%
   height 100%
   background-color #f5f5f5
   position relative
</style>