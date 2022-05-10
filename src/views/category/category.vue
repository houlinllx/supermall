<template>
  <div id="category">
    <nav-bar class="category-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
    </div>
    <div class="tab-content">
      <tab-content
        :subcategories="subcategories"
        :categoryDetail="categoryDetail"
      ></tab-content>
    </div>
  </div>
</template>

<script>
import TabMenu from "./childComps/TabMenu";
import TabContent from "./childComps/TabContent";
import NavBar from "@/components/common/navbar/NavBar";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "../../network/category";

export default {
  name: "categroy",
  data() {
    return {
      categories: [],
      subcategories: [],
      categoryDetail: {
        pop: [],
        new: [],
        sell: [],
      },
    };
  },
  components: {
    NavBar,
    TabMenu,
    TabContent,
  },
  created() {
    this.getCategory(); //请求分类数据
    this.selectItem(0, "3627", "10062603");
  },
  computed: {},
  methods: {
    getCategory() {
      //组件里定义的方法
      getCategory().then((res) => {
        //axios方法
        this.categories = res.data.category.list;
      });
    },
    selectItem(imdex, maitKey, miniWallkey) {
      getSubcategory(maitKey).then((res) => {
        this.subcategories = res.data.list;
      });
      getCategoryDetail(miniWallkey, "pop").then((res) => {
        this.categoryDetail["pop"] = res;
      });
      getCategoryDetail(miniWallkey, "sell").then((res) => {
        this.categoryDetail["sell"] = res;
      });
      getCategoryDetail(miniWallkey, "new").then((res) => {
        this.categoryDetail["new"] = res;
      });
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.category-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.tab-content {
  overflow: hidden;
  position: absolute;
  width: 70%;
  left: 110px;
  top: 44px;
  bottom: 49px;
  display: flex;
}
</style>
