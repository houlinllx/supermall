<template>
  <div>
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content" :pull-up-load="true" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar class="bar" v-show="cartLength"> </cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/content/scroll/Scroll";
import cartList from "./childComps/cartList";
import cartBottomBar from "./childComps/cartBottomBar";
import { mapGetters } from "vuex";
export default {
  name: "cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    Scroll,
    cartList,
    cartBottomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.cart-bar {
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
  bottom: 89px;
  left: 0;
  right: 0;
}
.bar {
  height: 40px;
  position: relative;
  background-color: #ffeeee;
  top: 534px;
}
</style>
