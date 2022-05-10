<template>
  <div class="tab-content-category">
    <a
      v-for="(item, index) in subcategories"
      class="subcategory-item"
      :href="item.link"
    >
      <img :src="item.image" alt="" srcset="" />
      <div class="item-title">{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "TabContentCategory",
  data() {
    return {};
  },
  props: {
    subcategories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.tab-content-category {
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
}
.subcategory-item {
  text-align: center;
  height: 100px;
  width: 75px;
  margin: 5px;
}
img {
  margin: 5px;
  height: 50px;
  width: 50px;
}
.item-title {
  font-size: 14px;
}
</style>
