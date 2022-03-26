<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
};
</script>

<style scoped>
  .base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: #222;
  }
  .info-title{
    margin-top: 10px;
  }
  .info-price{
    position: relative;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    padding-top: 10px;
  }
  .info-price .new-price{
    font-size: 24px;
    color: #ff5777;
  }
  .info-price .old-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .info-price .discount{
    font-size: 14px;
    position: absolute;
    top: 10px;
    padding: 3px;
    margin-left: 10px;
    color: #f2f5f8;
    background-color: #f34b6a;
    border-radius: 8px;
  }
  .info-other{
    font-size: 15px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
  }
  .info-other span{
    text-align: center;
  }
  .info-services{
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: space-between;
    line-height: 30px;
  }
  .info-services-item{
    font-size: 13px;
    height: 20px;
  }
  .info-services-item img{
    width: 13px;
    height: 13px;
  }
</style>
