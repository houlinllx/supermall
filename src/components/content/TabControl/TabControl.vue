<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
        class="tab-control-item"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style scoped>
.tab-control{
  height: 35px;
  display: flex;
  line-height: 35px;
  text-align: center;
  font-size: 16px;
  background-color: #f0f0f0;
}
.tab-control-item{
  flex: 1;
}
span{
  padding: 5px;
}
.active{
  color: var(--color-heit-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
