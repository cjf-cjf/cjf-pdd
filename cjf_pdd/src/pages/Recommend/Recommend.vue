<template>
    <div class="recommend-container" v-if="recommendshoplist.length>0">
        <ul class="recommend">
            <shop-list 
            v-for="(item,index) in recommendshoplist"
            :item=item
            :key="index" />
            <!--<shop-list></shop-list>
            <shop-list></shop-list>
            <shop-list></shop-list>
            <shop-list></shop-list>-->
        </ul>
    </div>
</template>
<script>
//引入组件模块
import ShopList from './../../components/shoplist/shoplist'
import {mapState} from 'vuex'
export default {
    name:"Recommend",
    mounted(){
        this.$store.dispatch('reqRecommendShopList');
    },
    computed:{
        ...mapState(['recommendshoplist'])
    },
    components:{
        ShopList
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-container 
   background #f5f5f5
   width 100%
   height 100%
   .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #F5F5F5
      margin-bottom 50px
      margin 0 
      padding 0
</style>