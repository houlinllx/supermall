<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar class="tab-bar">
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/fenlei.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/fenlei-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/shop.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shop-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path=/profile activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/me.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/me-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/common/tabbar/TabBar';
  import TabBarItem from './components/common/tabbar/TabBarItem';
  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
  .tab-bar{
    z-index: 8;
  }
</style>
