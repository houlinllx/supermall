<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(item,index) in paramInfo.sizes" :key="index" class="info-size">
      <tr v-for="(tr,indey) in item" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item,index) in paramInfo.infos">
        <td class="info-key">{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-image" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
};
</script>

<style scoped>
  .param-info{
    padding: 20px 25px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param-info table{
    width: 100%;
    border-collapse: collapse;
  }
  .param-info table tr{
    height: 42px;
  }
  .param-info table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-key{
    width: 95px;
  }
  .info-value{
    color: #eb4868;
  }
  .info-image{
    width: 100%;
  }
</style>
