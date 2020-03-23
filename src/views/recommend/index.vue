<!-- 个性推荐 -->
<template>
  <div class="recommend">
    <topnav :recommendContent="placeHolderContent"></topnav>
    <div
      class="content"
      ref="content"
    >
      <swiper></swiper>
    </div>
    <div class="tbnav">
      <tabbar />
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import topnav from '@/components/recommend/topnav'
import swiper from '@/components/recommend/swiper'
import tabbar from '@/components/recommend/tabbar'
export default {
  name: 'Recommend',
  data() {
    return {
      placeHolderContent: '给你推荐  我不配做你男朋友',
      // scroll: ''
    }
  },
  components: {
    topnav,
    swiper,
    tabbar
  },
  methods: {
    // _initScroll() {
    // if (!this.$refs.content) {
    //   return
    // }
    // this.scroll = new BScroll(this.$refs.content, {
    //   click: true,
    //   scrollY: true,
    //   // hasVerticalScroll: true
    // })
    // console.log(this.scroll)
    // }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.content, {
    //     click: true
    //   });
    //   console.log(this.scroll);
    // });
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  .content {
    height: 82vh;
    overflow: auto;
    // background: yellow;
  }
  .tbnav {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>