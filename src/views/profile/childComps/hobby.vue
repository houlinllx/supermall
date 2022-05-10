<template>
  <div class="hobby">
    <div class="information">
      <img src="@/assets/img/profile/information.svg" alt="" />
      <span>消息</span>
    </div>
    <div class="collection">
      <img src="@/assets/img/profile/collection.svg" alt="" />
      <span>收藏</span>
    </div>
    <div class="attention">
      <img src="@/assets/img/profile/attention.svg" alt="" />
      <span>关注</span>
    </div>
    <div class="footmark">
      <img src="@/assets/img/profile/footmark.svg" alt="" />
      <span>足迹</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hobby",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.hobby {
  height: 70px;
  width: 90%;
  margin: 0 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
}
.hobby > div {
  width: 35px;
}
img {
  width: 30px;
  height: 30px;
}
</style>
