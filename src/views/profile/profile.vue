<template>
  <div class="profile">
    <nav-bar class="profile-bar">
      <div slot="center">个人中心</div>
      <div slot="right" class="set-up">
        <img src="@/assets/img/profile/set_up.svg" alt="" class="set-up-img" />
      </div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <mine class="mine"></mine>
      <hobby class="hobby"></hobby>
      <div class="double">
        <cart class="cart"></cart>
        <discount class="discount"></discount>
      </div>
      <order class="order"></order>
      <tool class="tool"></tool>
      <sell-title></sell-title>
      <goods-list :goods="showGoods" class="goods-list"></goods-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/content/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";
import mine from "./childComps/mine";
import hobby from "./childComps/hobby";
import cart from "./childComps/cart";
import discount from "./childComps/discount";
import order from "./childComps/order";
import tool from "./childComps/tool";
import sellTitle from "./childComps/sellTitle";

import { getGoods } from "@/network/profile";
import { debounce } from "@/common/utils";
export default {
  name: "profile",
  data() {
    return {
      sell: {
        page: 0,
        list: [],
      },
    };
  },
  components: {
    NavBar,
    Scroll,
    GoodsList,
    mine,
    hobby,
    cart,
    discount,
    order,
    tool,
    sellTitle,
  },
  computed: {
    showGoods() {
      return this.sell.list;
    },
  },
  created() {
    this.getProfileGoods();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 10);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    getProfileGoods() {
      //组件里定义的方法
      const page = this.sell.page + 1;
      getGoods("sell", page).then((res) => {
        //axios方法
        this.sell.list.push(...res.data.list);
        this.sell.page += 1;
      });
    },
    loadMore() {
      //上拉加载更多
      this.getProfileGoods();
      this.$refs.scroll.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
.profile {
  /* background-color: #f1f1f1; */
  background-image: repeating-linear-gradient(
    #e0ffff,
    #ffffe0 50%,
    #e0ffff 100%
  );
  height: 100vh;
  width: 100vw;
}
.profile-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  /* position: fixed;//使用原生滚动时使用的
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
}
.content {
  /* height: calc(100% - 93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.set-up-img {
  position: relative;
  top: 8px;
  width: 26px;
  height: 26px;
}
.double {
  display: flex;
}
.cart {
  flex: 1;
}
.discount {
  flex: 1;
}
.goods-list {
  margin: 10px 5%;
  padding: 10px 0px;
  border-radius: 10px;
  background-color: #fff;
}
</style>
