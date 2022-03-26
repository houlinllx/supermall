<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.recommend{
  display: flex;
  flex: 1;
  text-align: center;
  font-size: 14px;
  padding: 10px 0 10px;
  border-bottom: 8px solid #ddd;
}
.recommend-item img{
  width: 80%;
  padding-bottom: 5px;
}
</style>
