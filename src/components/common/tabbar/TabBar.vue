<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
    };
  },
  methods: {
},
  mounted(){
},
};
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background: #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
