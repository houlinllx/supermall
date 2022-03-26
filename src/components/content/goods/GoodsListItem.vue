<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImages" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showImages(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit("itemImageLoad")
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
};
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position: relative;
    width: 45%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    right: 0;
    left: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 30px;
  }
  .goods-info .cfav{
    position: relative;
    margin-right: 20px;
  }
  .goods-info .cfav::before{
    content: '';
    position: absolute;
    top: -1px;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/cfav.svg") 0 0/14px 14px;
  }
</style>
