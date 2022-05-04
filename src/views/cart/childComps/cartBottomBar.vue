<template>
  <div class="cart-bottom-bar">
    <div class="selector">
      <img
        :class="{ allchecked: allChecked }"
        class="img"
        @click="changeAllChecked"
      />
      <div>全选</div>
    </div>
    <div class="total">合计{{ totalPrice }}</div>
    <div class="settle">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
export default {
  name: "cartBottomBar",
  data() {
    return {};
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.getters.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((pre, item) => {
            return pre + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.getters.cartList.filter((item) => {
        //选中的数量
        return item.checked;
      }).length;
    },
    allChecked() {
      return this.$store.getters.cartList.every((item) => {
        //每一项都有checked且不为零，则全选
        return item.checked;
      });
    },
  },
  methods: {
    changeAllChecked() {
      if (this.allChecked) {
        this.$store.getters.cartList.map((item) => {
          return (item.checked = false);
        });
      } else {
        this.$store.getters.cartList.map((item) => {
          return (item.checked = true);
        });
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  display: flex;
}
.selector {
  position: relative;
  left: 10px;
  display: inline-block;
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
}
.img {
  content: url(../../../assets/img/cart/no.svg);
  width: 20px;
  height: 20px;
}
.allchecked {
  content: url(../../../assets/img/cart/yes.svg);
}
.total {
  line-height: 40px;
}
.settle {
  /* line-height: 40px; */
  position: absolute;
  right: 0;
  background-color: red;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  letter-spacing: 2px;
}
</style>
