<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">首页</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" 
      @tabClick="tabClick" ref="tabControl1" v-show="istabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3"
      @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners = "banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends = "recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import GoodsList from '@/components/content/goods/GoodsList'
import TabControl from '@/components/content/TabControl/TabControl'
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/content/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'

import {getHomeMultidata,getGoods} from '../../network/home'
import {debounce} from '../../common/utils'

export default {
  name: 'home',
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{
          page:0,
          list:[]
        },
        'new':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        }
      },
      currentType:'pop',
      isShow:false,
      tabOffsetTop:0,
      istabFixed:false
    };
  },
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created(){
    //获取首页数据
    this.getHomeMultidata()
    //获取商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    //监听item里图片加载事件
    const refresh = debounce(this.$refs.scroll.refresh,10)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
    
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    /**
     * 事件监听相关方法
     */
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index

    },
    backClick(){//返回顶部
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0,0,500)//scrollTo(x坐标，y坐标，时间)
    },
    contentScroll(position){
      //是否显示置顶图标
      this.isShow = (-position.y) > 1000
      //是否显示fixed的tabcontrol
      this.istabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore(){//上拉加载更多
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.finishPullUp()
    },
    
    //图片加载完成之后获取tabControl的offsetTot
    //所有组件都有一个$el属性
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /** 
    *网络请求相关方法
    **/
    getHomeMultidata(){//组件里定义的方法
      getHomeMultidata().then(res => {//axios方法
        // console.log(res.data.banner.list);
        // console.log(res.data.recommend.list);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){//组件里定义的方法
      const page = this.goods[type].page + 1
      getGoods(type,page).then(res => {//axios方法
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
};
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-bar{
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;//使用原生滚动时使用的
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }
  .tab-control{
    position:relative;
    z-index: 9;
  }
  .content{
    /* height: calc(100% - 93px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
