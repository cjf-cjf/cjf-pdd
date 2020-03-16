<template>
<div class="hot">
  <!--轮播图-->
  <div class="swiper-container" v-if="homecasual.length > 0">
    <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(casual, index) in homecasual" :key="index">
          <img :src="casual.imgurl" alt="" width="100%">
        </div>
        <!--<div class="swiper-slide"><img src="./../imgs/rowing/s2.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="./../imgs/rowing/s3.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="./../imgs/rowing/s4.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="./../imgs/rowing/s5.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="./../imgs/rowing/s6.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="./../imgs/rowing/s7.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="./../imgs/rowing/s8.png" alt="" width="100%"></div>-->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
   <!--中间导航-->
   <hot-nav></hot-nav>
   <!--广告位-->
   <div class="hot-ad">
     <img src="./../imgs/hot_ad/home_ad.gif" alt="" width="100%">
   </div>
   <!--商品列表-->
   <hot-shop-list></hot-shop-list>
</div>
</template>
<script>
//引入swiper模块
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
//引入需要的模块
import hotNav  from  './hot-nav'
import HotShopList from './hot-shoplist'
//import api from 'api/ajax'

import {
  mapState
} from 'vuex'

export default {
    name:"hot",
    components:{
      hotNav,
      HotShopList
    },
    computed:{
      ...mapState(['homecasual'])
    },
    mounted(){
      //请求轮播图数据
     this.$store.dispatch('reqHomeCasual');
      //请求导航数据
      this.$store.dispatch('reqHomeNav');
      //请求首页商品列表数据
      this.$store.dispatch('reqHomeShopList');      
    },
    watch:{
      homecasual(){
         this.$nextTick(()=>{
              //创建swiper的实例
           new Swiper ('.swiper-container', {
               loop: true, // 循环模式选项
                autoplay:true,  //自动轮播
                 // 如果需要分页器
              pagination: {
                     el: '.swiper-pagination',
                }
             }); 
         });
      }
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.hot
  width 100%
  height 100%
  padding-top 46px
  background #f5f5f5
.hot-ad 
   background-color #fffff
   margin 8px 0
   padding 5px

</style>