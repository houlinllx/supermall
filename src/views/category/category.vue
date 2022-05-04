<template>
  <div id="category">
    <nav-bar class="category-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories"></tab-menu>
    </div>
  </div>
</template>

<script>
import TabMenu from './childComps/TabMenu.vue'

import NavBar from '@/components/common/navbar/NavBar'

import { getCategory,getSubcategory } from '../../network/category'

export default {
  name: 'categroy',
  data() {
    return {
      categories:[],
    };
  },
  components:{
    NavBar,
    TabMenu,
  },
  created(){
    this.getCategory()//请求分类数据
  },
  computed:{
    showSubcategory() {
		  if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
  },
  methods:{
    getCategory(){//组件里定义的方法
      getCategory().then(res => {//axios方法
        this.categories = res.data.category.list
      })
    },
  }
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
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }
</style>
