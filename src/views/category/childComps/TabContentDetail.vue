<template>
  <div class="tab-content-detail">
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList";
import TabControl from "@/components/content/TabControl/TabControl";
export default {
  name: "TabContentDetail",
  data() {
    return {
      currentType: "pop",
    };
  },
  props: {
    categoryDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    GoodsList,
    TabControl,
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index;
    },
  },
  computed: {
    showGoods() {
      return this.categoryDetail[this.currentType];
    },
  },
  created() {},
};
</script>

<style scoped>
</style>
