<template>
  <div class="discount">
    <div class="voucher">
      <div class="text">卡券红包</div>
      <div class="next">
        <img src="@/assets/img/profile/next.svg" alt="" />
      </div>
    </div>
    <div class="subsidy">
      <div class="text">补贴保障</div>
      <div class="next">
        <img src="@/assets/img/profile/next.svg" alt="" />
      </div>
    </div>
    <div class="wallet">
      <div class="text">我的钱包</div>
      <div class="next">
        <img src="@/assets/img/profile/next.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "discount",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.discount {
  background-color: #fff;
  height: 120px;
  width: 40%;
  margin: 10px 5% 0px 2.5%;
  border-radius: 10px;
}
.voucher,
.subsidy,
.wallet {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33%;
}
.subsidy {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.text {
  font-size: 14px;
  position: relative;
  left: 10px;
  flex: 6;
  display: inline-block;
}
.next {
  flex: 1;
  display: inline-block;
}
img {
  height: 15px;
  width: 15px;
}
</style>
