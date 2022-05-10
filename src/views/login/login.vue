<template>
  <div class="login">
    <nav-bar class="login-bar">
      <div slot="center">supermall</div>
    </nav-bar>
    <sign-in @toRegister="changeSign" v-if="hasAccountNumber"></sign-in>
    <register @toSignIn="changeSign" v-else></register>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import signIn from "./childComps/signIn";
import register from "./childComps/register";
export default {
  name: "login",
  data() {
    return {
      hasAccountNumber: {
        type: Boolean,
        default() {
          return true;
        },
      },
    };
  },
  components: {
    NavBar,
    signIn,
    register,
  },
  methods: {
    changeSign() {
      this.hasAccountNumber = !this.hasAccountNumber;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.login-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  /* position: fixed;//使用原生滚动时使用的
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
}
</style>
