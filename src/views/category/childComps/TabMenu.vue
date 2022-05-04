<template>
  <scroll id="tab-menu" :pull-up-load="true">
    <div class="menu-list">
      <div class="menu-list-item"
           :class="{active: index === currentIndex}"
           v-for="(item, index) in categories"
           :key="index"
           @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/content/scroll/Scroll'
export default {
  name: 'TabMenu',
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    categories:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Scroll
  },
  methods:{
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  }
};
</script>

<style scoped>
  #tab-menu {
    background-color: #fff0f0;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
  }
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .menu-list-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>
