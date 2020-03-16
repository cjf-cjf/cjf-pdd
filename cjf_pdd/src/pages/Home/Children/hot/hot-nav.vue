<template>
    <div class="hot-nav">
        <!--滚动区域-->
        <div class="hot-nav-content" v-if="homenav.length>0">
             <div class="nav-content-inner">
                 <a class="inner-item" v-for="(nav,index) in homenav" :key="index">
                     <img :src="nav.iconurl" alt="">
                     <span>{{nav.icontitle}}</span>
                 </a>
                  <!--<a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt="">
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt="">
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt="">
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt="">
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt="">
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt="">
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt="">
                     <span>限时秒杀</span>
                 </a>
                 <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt="">
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt=""/>
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt=""/>
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt=""/>
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt=""/>
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt=""/>
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt=""/>
                     <span>限时秒杀</span>
                 </a>
                  <a class="inner-item">
                     <img src="./../imgs/nav/nav_icon01.png" alt=""/>
                     <span>限时秒杀</span>
                 </a>-->
             </div>
        </div>
        <!--进度条-->
        <div class="hot-nav-bottom">
            <div  class="hot-nav-bottom-inner" :style="innerstyle"></div>
        </div>
    </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
    name:"hot-nav",
    data(){
        return{
            screenW:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,//屏幕宽度
            scroolContentW:720,// 滚动内容宽度
            bgbarW:90,  //滚动条背景长度
            barXwidth:0, //滚动条的长度
            startX:0,//起点
            endFlag:0,  //记录结束点
            barmoveWidth:0  //移动的距离
        }
    },
    computed:{
        innerstyle(){
            return{
                width:`${this.barXwidth}px`,
                left:`${this.barmoveWidth}px`
            }
        },
        ...mapState(['homenav'])
    },
    mounted(){
       this.getbottombarwidth();
       this.bindEvent();
    },
    methods:{
        getbottombarwidth(){  //获取滚动条的长度
           this.barXwidth = this.bgbarW * (this.screenW / this.scroolContentW);
        },
        bindEvent(){   //移动端事件监听
            this.$el.addEventListener('touchstart',this.handTouchStart,false);
            this.$el.addEventListener('touchmove',this.handTouchMove,false);
            this.$el.addEventListener('touchend',this.handTouchEnd,false);
        },
        handTouchStart(event){//开始触摸
            let touch = event.touches[0]; //获取第一个触摸点
            this.startX = Number(touch.pageX);//求出起始点
        },
        handTouchMove(){//开始移动
            let touch = event.touches[0]; //获取第一个触点
            let movewidth = Number(touch.pageX)-this.startX;//求出移动的距离
            this.barmoveWidth = -((this.bgbarW/this.scroolContentW)*movewidth-this.endFlag) ; //求出滚动条走的距离
            if(this.barmoveWidth <= 0){  //左边界值处理
                this.barmoveWidth = 0;
            }else if(this.barmoveWidth >= this.bgbarW - this.barXwidth){  //右边
                this.barmoveWidth = this.bgbarW - this.barXwidth;
            }
        },
        handTouchEnd(){//结束触摸
            this.endFlag = this.barmoveWidth;//求出移动的
        }
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.hot-nav
  width 100%
  height 180px
  position relative
  background-color #fff
  padding-bottom 10px
  .hot-nav-content
      width 100%
      overflow-x scroll
      .nav-content-inner
         width 720px
         height 180px
         display flex
         flex-wrap wrap
         .inner-item
             width 90px
             height 90px
             display flex
             flex-direction column 
             justify-content center
             align-items center 
             font-size 14px
             color #6666
             img 
               width 50%
               margin-bottom 5px
    .hot-nav-content::-webkit-scrollbar
      display none
    .hot-nav-bottom
       width 90px
       height 2px
       background-color #cccccc
       position absolute
       left 50%
       margin-left -50px
       bottom 8px
       .hot-nav-bottom-inner
          position absolute
          left 0
          height 100%
          background-color red
          width 0px


</style>