<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null,
    };
  },
  mounted(){
    //创建better-scroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //监听滚动事件
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    // //监听上拉到底部事件
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  }
};
</script>

<style scoped>

</style>
