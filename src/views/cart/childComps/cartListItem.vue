<template>
  <div class="shop-item">
    <div class="selector">
      <img
        :class="{ checked: product.checked }"
        alt=""
        srcset=""
        @click="changeSelector"
      />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="info-title">{{ product.title }}</div>
      <div class="info-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="info-price left">￥{{ product.price }}</div>
        <div class="info-count right">
          <button class="button" @click="changeCount(false)">-</button>
          <input
            class="input"
            type="text"
            readonly
            v-model:value="product.count"
          />
          <button class="button" @click="changeCount(true)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    changeSelector() {
      this.product.checked = !this.product.checked;
    },
    changeCount(bool) {
      if (bool) {
        this.product.count++;
      } else {
        this.product.count--;
        if (this.product.count <= 0) {
          this.$store.getters.cartList.forEach((ele, index) => {
            if (ele.iid === this.product.iid) {
              this.$store.getters.cartList.splice(index, 1);
            }
          });
        }
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.shop-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 5px solid #ddd;
}
.selector {
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.selector img {
  content: url("../../../assets/img/cart/no.svg");
  width: 20px;
  height: 20px;
}
.selector .checked {
  content: url("../../../assets/img/cart/yes.svg");
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.info-title,
.info-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.info-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  left: 10px;
  display: flex;
}
.info-price {
  flex: 7;
  color: #ff6223;
}
.info-count {
  flex: 3;
}
.button {
  width: 23px;
  height: 23px;
  display: inline-block;
  margin: 0;
  padding: 0;
}
.input {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  text-align: center;
  border: 0;
  border-top: 1.5px solid #888;
  border-bottom: 1.5px solid #888;
}
</style>
