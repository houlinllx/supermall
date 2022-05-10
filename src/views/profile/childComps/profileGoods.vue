<template>
  <div class="profileGoods">
    <goods-list :goods="showGoods" class="goods-list"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList";

import { getGoods } from "@/network/profile";
export default {
  name: "profileGoods",
  data() {
    return {
      sell: {
        page: 0,
        list: [],
      },
    };
  },
  components: {
    GoodsList,
  },
  computed: {
    showGoods() {
      return this.sell.list;
    },
  },
  created() {
    this.getProfileGoods();
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
  mounted() {},
};
</script>

<style scoped>
.goods-list {
  margin: 10px 5%;
}
</style>
