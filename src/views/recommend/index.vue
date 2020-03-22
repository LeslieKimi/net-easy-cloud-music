<!-- 个性推荐 -->
<template>
  <div class="recommend">
    <tabbar :recommendContent="placeHolderContent"></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/recommend/tabbar'
export default {
  name: 'Recommend',
  data() {
    return {
      placeHolderContent: '给你推荐  我不配做你男朋友'
    }
  },
  components: {
    tabbar,
  },
}
</script>

<style lang="scss" scoped>
</style>