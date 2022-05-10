<template>
  <div class="sellTitle">
    <div class="line"></div>
    <img src="@/assets/img/profile/sell_title.svg" alt="" srcset="" />
    <span>精选推荐</span>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.sellTitle {
  margin: 20px 5% 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  width: 50px;
  height: 1px;
  background-color: #000;
  margin: 5px;
}
img {
  margin-bottom: 2px;
  margin-right: 5px;
  height: 20px;
  width: 20px;
}
</style>
