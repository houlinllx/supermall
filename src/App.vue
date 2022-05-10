<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar class="tab-bar" v-show="isNotLogin">
      <tab-bar-item path="/home" activeColor="#fd2656">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#fd2656">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#fd2656">
        <img slot="item-icon" src="./assets/img/tabbar/shop.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shop-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path=/profile activeColor="#fd2656">
        <img slot="item-icon" src="./assets/img/tabbar/me.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/me-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/common/tabbar/TabBar";
import TabBarItem from "./components/common/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
  computed: {
    isNotLogin() {
      return this.$route.path !== "/login";
    },
  },
};
</script>

<style>
@import "./assets/css/base.css";
.tab-bar {
  z-index: 8;
}
</style>
