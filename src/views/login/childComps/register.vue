<template>
  <div class="register">
    <div class="register-title">注册</div>
    <div class="register-input">
      <div class="name">
        <span class="text">用户名</span><span class="icon">:</span>
        <input type="text" />
      </div>
      <div class="password">
        <span class="text">密码</span><span class="icon">:</span>
        <input type="password" name="password" id="register-password" />
      </div>
      <div class="password">
        <span class="text">确认密码</span><span class="icon">:</span>
        <input type="password" name="password" id="repeat-password" />
      </div>
      <div class="phone">
        <span class="text">电话</span><span class="icon">:</span>
        <input type="tel" name="" id="phone" />
      </div>
      <div class="identify">
        <span class="text">验证码</span><span class="icon">:</span>
        <input type="text" name="" id="identify" />
      </div>
      <div class="tips">
        <span @click="signIn">已有账号</span>
        <span>联系客服</span>
      </div>
    </div>
    <div class="button">
      <button>注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {};
  },
  methods: {
    signIn() {
      this.$emit("toSignIn");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.register {
  position: relative;
  background-image: url("@/assets/img/login/background.png");
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
}
.register-title {
  height: 20%;
  line-height: 200px;
  text-align: center;
  font-size: 30px;
}
.register-input {
  position: relative;
  height: 45%;
  text-align: center;
}
input {
  width: 170px;
}
.name,
.password,
.phone,
.identify {
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
