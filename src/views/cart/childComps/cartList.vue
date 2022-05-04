<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :product="item"
      :key="index"
    ></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cartListItem from "./cartListItem";
export default {
  name: "cartList",
  data() {
    return {};
  },
  components: {
    cartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
</style>
