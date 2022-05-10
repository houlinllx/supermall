<template>
  <div class="cart">
    <img src="@/assets/img/profile/cart.svg" alt="" srcset="" />
    <span>购物车</span>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.cart {
  margin: 10px 2.5% 0px 5%;
  height: 120px;
  width: 40%;
  background-color: #fff;
  border-radius: 10px;
}
img {
  height: 100px;
  width: 100px;
}
</style>
