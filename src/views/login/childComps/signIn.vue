<template>
  <div class="sign-in">
    <div class="sign-in-title">登录</div>
    <div class="sign-in-input">
      <div class="name">
        <span class="text">用户名</span><span class="icon">:</span>
        <input type="text" />
      </div>
      <div class="password">
        <span class="text">密码</span><span class="icon">:</span>
        <input type="password" name="password" id="sign-in-password" />
      </div>
      <div class="tips">
        <span @click="register">注册账号</span>
        <span>忘记密码</span>
      </div>
    </div>
    <div class="button">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "signIn",
  data() {
    return {};
  },
  methods: {
    register() {
      this.$emit("toRegister");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.sign-in {
  position: relative;
  background-image: url("@/assets/img/login/background.png");
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
}
.sign-in-title {
  height: 20%;
  line-height: 200px;
  text-align: center;
  font-size: 30px;
}
.sign-in-input {
  position: relative;
  height: 20%;
  text-align: center;
}
input {
  width: 170px;
}
.name,
.password {
  width: 100%;
  margin: 10px 0 10px 0;
  padding: 10px 0 10px 0;
}
.text {
  display: inline-block;
  width: 70px;
  text-align: justify;
  text-align-last: justify;
}
.icon {
  display: inline-block;
  width: 10px;
  text-align: left;
  margin: 0;
  padding: 0;
}
.tips {
  display: flex;
}
.tips span {
  color: #07f;
  flex: 1;
  justify-content: space-around;
}
.button {
  display: flex;
  height: 10%;
  justify-content: center;
  align-items: center;
}
button {
  border: 1px solid rgb(255, 125, 255);
  border-radius: 20px;
  height: 40px;
  width: 150px;
  background-image: radial-gradient(rgb(100, 200, 255), rgb(255, 125, 255));
  box-shadow: 0 4px #999;
}
</style>
