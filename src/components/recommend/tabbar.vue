<template>
  <div class="tabbar">
    <div
      class="box"
      v-for="(item, idx) in menuList"
      :key="idx"
      @click="selectMenu(idx)"
    >
      <span
        class="iconfont icon"
        :class="[{'active':currentIndex===idx},item.icon]"
      ></span>
      <span
        class="title"
        :class="{'active':currentIndex==idx}"
      >{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      currentIndex: 0,
      menuList: [
        { name: '发现', icon: 'icon-faxian' },
        { name: '视频', icon: 'icon-shipinbofangyingpian2' },
        { name: '我的', icon: 'icon-yinle' },
        { name: '朋友', icon: 'icon-pengyou' },
        { name: '账号', icon: 'icon-icon-test' }
      ]
    }
  },
  methods: {
    selectMenu(index) {
      this.currentIndex = index
    }
  },
}
</script>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  height: 2.8125rem;
  background: #f8f8f8;
  .box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 5rem;
    height: 2.8125rem;
    text-align: center;
    .icon {
      font-size: 1.375rem;
      color: #444444;
    }
    .title {
      //   line-height: 2.8125rem;
      font-size: 0.75rem;
      font-family: Microsoft Yahei;
      color: rgb(16, 16, 16);
    }
    .active {
      color: #e4463b;
    }
  }
}
</style>