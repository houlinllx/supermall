<template>
  <div class="mine">
    <div class="left">
      <img src="@/assets/img/profile/head_portrait.svg" />
      <span class="text" @click="login">点击登录</span>
    </div>
    <div class="right">
      <button class="button">会员中心</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.mine {
  position: relative;
  display: flex;
  height: 90px;
  width: 100%;
}
.left {
  flex: 4;
  display: flex;
  align-items: center;
  position: relative;
  left: 10px;
}
.left img {
  width: 70px;
  height: 70px;
}
.text {
  font-size: 18px;
  letter-spacing: 4px;
  position: relative;
  left: 10px;
  color: #666;
}
.right {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  right: 10px;
}
.button {
  border-radius: 15px;
  height: 30px;
  width: 100%;
  font-size: 14px;
  border: 0;
  background-image: linear-gradient(
    to right,
    rgb(255, 210, 70),
    rgb(250, 240, 180),
    rgb(255, 210, 70)
  );
}
</style>
