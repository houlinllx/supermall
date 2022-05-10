<template>
  <div id="detail">
    <detail-nav-bar class="nav"></detail-nav-bar>
    <scroll class="content" :pull-up-load="true" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommend"></goods-list>
    </scroll>
    <detail-buttom-bar @addCart="addToCart"></detail-buttom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailButtomBar from "./childComps/DetailButtomBar.vue";

import Scroll from "@/components/content/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";
import { debounce } from "@/common/utils";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "@/network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailButtomBar,
    Scroll,
    GoodsList,
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    //根据iid请求商品数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      // console.log(data);
      //获取商品轮播图片
      this.topImages = data.itemInfo.topImages;
      //获取商品基本信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取商品详细信息和图片
      this.detailInfo = data.detailInfo;
      //获取商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //获取推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommend = res.data.list;
      // console.log(this.recommend)
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 10);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    addToCart() {
      // console.log(this.goods);
      //获取添加到购物车的商品数据
      const product = {};
      product.iid = this.iid;
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      // console.log(product);
      this.$store.dispatch("addCart", product);
    },
  },
};
</script>

<style scoped>
.nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>
