<template>
    <div class="hot-shoplist" v-if="homeshoplist.length>0">
       <ul class="shop-list">
           <li class="shop-list-item" v-for="(shoplist,index) in homeshoplist" :key="index">
               <img :src="shoplist.image_url" alt="" width="100%">
               <h4 class="list-item-title">{{shoplist.goods_name}}</h4>
               <div class="list-item-bottom">
                   <span class="item-price">￥{{shoplist.normal_price /100}}</span>
                   <span class="item-counter">{{shoplist.sales_tip}}</span>
                   <span class="item-user">
                       <img :src="user.avatar" alt="" v-for="(user,index1) in shoplist.bubble" :key="index1">
                   </span>
                   <span class="item-btn">
                       <button>去拼单 > </button>
                   </span>
               </div>
           </li>
           <!--<li class="shop-list-item">
               <img src="./../imgs/shop_list/shop_item.png" alt="" width="100%">
               <h4 class="list-item-title">【唐幂】整条民族风围巾女披肩保暖</h4>
               <div class="list-item-bottom">
                   <span class="item-price">￥26.9</span>
                   <span class="item-counter">已拼546件</span>
                   <span class="item-user">
                       <img src="./../imgs/shop_list/user1.jpg" alt="" >
                       <img src="./../imgs/shop_list/user2.jpg" alt="" >
                   </span>
                   <span class="item-btn">
                       <button>去拼单 > </button>
                   </span>
               </div>
           </li>
           <li class="shop-list-item">
               <img src="./../imgs/shop_list/shop_item.png" alt="" width="100%">
               <h4 class="list-item-title">【唐幂】整条民族风围巾女披肩保暖</h4>
               <div class="list-item-bottom">
                   <span class="item-price">￥26.9</span>
                   <span class="item-counter">已拼546件</span>
                   <span class="item-user">
                       <img src="./../imgs/shop_list/user1.jpg" alt="" >
                       <img src="./../imgs/shop_list/user2.jpg" alt="" >
                   </span>
                   <span class="item-btn">
                       <button>去拼单 > </button>
                   </span>
               </div>
           </li>
           <li class="shop-list-item">
               <img src="./../imgs/shop_list/shop_item.png" alt="" width="100%">
               <h4 class="list-item-title">【唐幂】整条民族风围巾女披肩保暖</h4>
               <div class="list-item-bottom">
                   <span class="item-price">￥26.9</span>
                   <span class="item-counter">已拼546件</span>
                   <span class="item-user">
                       <img src="./../imgs/shop_list/user1.jpg" alt="" >
                       <img src="./../imgs/shop_list/user2.jpg" alt="" >
                   </span>
                   <span class="item-btn">
                       <button>去拼单 > </button>
                   </span>
               </div>
           </li>-->
       </ul>
    </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
    name:"hot-shoplist",
    computed:{
        ...mapState(['homeshoplist'])
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.hot-shoplist
   margin-bottom 50px
   background #f5f5f5
   .shop-list
      margin 0 
      padding 0
     .shop-list-item
       margin-bottom 10px
       background-color #fff
       display flex
       flex-direction column
       .list-item-title
          line-height 22px
          width 94%
          margin-left 3%
          height 44px
          overflow hidden
        .list-item-bottom
          margin 10px 0
          display flex
          flex-direction row
          justify-content space-around
          align-items center
          .item-price
             font-size 18px
             text-align center
             font-weight bolder
             color red
             flex 1
          .item-counter
             flex 2
             font-size 12px
             color #cccccc
           .item-user
             flex 1
             display flex
             justify-content center
             align-items center
             img 
               width 30px
               border-radius 50%
               img:nth-child(2)
                 margin-left -6px
            .item-btn
              flex 2
              button  
                 width 80%
                 height 34px
                 border none
                 font-size 15px
                 color #fff
                 display flex
                 justify-content center
                 align-items center
                 margin-left 10px
                 background-color red
                 border-radius 8px

</style>