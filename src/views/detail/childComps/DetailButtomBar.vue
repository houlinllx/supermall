<template>
  <div class="buttom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="car" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailButtomBar",
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.buttom-bar {
  height: 49px;
  background-color: #fff;
  position: relative;
  /* bottom: 49px; */
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.text {
  font-size: 13px;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
}

.service {
  background-position: 0 54px;
}
.shop {
  background-position: 0 98px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}
.car {
  background-color: #ffe817;
  color: #333;
}
.buy {
  background-color: #f69;
}
</style>
