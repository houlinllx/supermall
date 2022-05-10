<template>
  <scroll class="content-scroll" :pull-up-load="true" ref="scroll">
    <div class="tab-content">
      <tab-content-category
        :subcategories="subcategories"
      ></tab-content-category>
      <tab-content-detail :categoryDetail="categoryDetail"></tab-content-detail>
    </div>
  </scroll>
</template>

<script>
import TabContentCategory from "./TabContentCategory";
import TabContentDetail from "./TabContentDetail";
import Scroll from "@/components/content/scroll/Scroll";

import { debounce } from "@/common/utils";
export default {
  name: "TabContent",
  data() {
    return {};
  },
  components: {
    Scroll,
    TabContentCategory,
    TabContentDetail,
  },
  props: {
    subcategories: {
      type: Array,
      default() {
        return [];
      },
    },
    categoryDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 10);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
};
</script>

<style scoped>
</style>