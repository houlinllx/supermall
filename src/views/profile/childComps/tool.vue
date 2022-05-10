<template>
  <div class="tool">
    <div class="tool-title">
      <div class="title">我的工具</div>
      <div class="next">
        <img src="@/assets/img/profile/next.svg" alt="" />
      </div>
    </div>
    <div class="tool-info">
      <div class="sign-in">
        <img src="@/assets/img/profile/sign_in.svg" alt="" />
        <span>签到</span>
      </div>
      <div class="service">
        <img src="@/assets/img/profile/service.svg" alt="" />
        <span>客服</span>
      </div>
      <div class="address">
        <img src="@/assets/img/profile/address.svg" alt="" />
        <span>收货地址</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tool",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.tool {
  height: 90px;
  width: 90%;
  margin: 10px 5%;
  background-color: #fff;
  border-radius: 10px;
}
.tool-title {
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
.tool-title img {
  height: 15px;
  width: 15px;
}
.tool-info {
  position: relative;
  top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tool-info > div {
  text-align: center;
  width: 50px;
}
.tool-info img {
  width: 30px;
  height: 30px;
}
span {
  display: block;
  font-size: 6px;
}
</style>
