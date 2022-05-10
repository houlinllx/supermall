<template>
  <div class="order">
    <div class="order-title">
      <div class="title">我的订单</div>
      <div class="next">
        <img src="@/assets/img/profile/next.svg" alt="" />
      </div>
    </div>
    <div class="order-info">
      <div class="payment">
        <img src="@/assets/img/profile/payment.svg" alt="" />
        <span>待付款</span>
      </div>
      <div class="deliver">
        <img src="@/assets/img/profile/deliver.svg" alt="" />
        <span>待发货</span>
      </div>
      <div class="attention">
        <img src="@/assets/img/profile/receive.svg" alt="" />
        <span>待收货</span>
      </div>
      <div class="evaluate">
        <img src="@/assets/img/profile/evaluate.svg" alt="" />
        <span>评价</span>
      </div>
      <div class="after-sale">
        <img src="@/assets/img/profile/after_sale.svg" alt="" />
        <span>售后</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.order {
  height: 90px;
  width: 90%;
  margin: 10px 5%;
  background-color: #fff;
  border-radius: 10px;
}
.order-title {
  line-height: 30px;
  height: 30px;
  display: flex;
  border-bottom: 1px solid #ccc;
}

.title {
  font-size: 14px;
  position: relative;
  left: 10px;
  flex: 14;
  display: inline-block;
}
.next {
  flex: 1;
  display: inline-block;
}
.order-title img {
  height: 15px;
  width: 15px;
}
.order-info {
  position: relative;
  top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.order-info > div {
  text-align: center;
  width: 40px;
}
.order-info img {
  width: 30px;
  height: 30px;
}
span {
  font-size: 6px;
}
</style>
