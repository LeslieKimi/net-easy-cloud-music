<template>
  <div class="topnav">
    <div class="wrapper">
      <span class="voice iconfont icon-maikefeng"></span>
      <div class="search">
        <span class="search-icon iconfont icon-sousuo"></span>
        <input
          class="search-ip"
          type="text"
          :placeholder="recommendContent"
        >
      </div>
      <span class="undetermined"></span>
    </div>
    <div class="select-bar">
      <div
        class="item"
        v-for="(item, index) in selectList"
        :key="index"
        @click="selectBar(index)"
      >
        <span
          class="title"
          :class="[[currentIdx===index?'active':''],item.className]"
        >{{item.name}}</span>
        <div
          v-show="currentIdx===index"
          class="bttip"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topnav',
  props: {
    recommendContent: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      selectList: [
        { name: '个性推荐', className: 'personality' },
        { name: '主播电台', className: '' }
      ],
      currentIdx: 0,
    }
  },
  methods: {
    selectBar(idx) {
      this.currentIdx = idx
    }
  },
}
</script>

<style lang="scss" scoped>
.topnav {
  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.8125rem;
    background: rgba(228, 70, 59, 1);
    font-size: 0;
    .voice {
      display: inline-block;
      width: 1.875rem;
      height: 1.875rem;
      margin: 0 0.4375rem 0 0.6875rem;
      font-size: 1.875rem;
      color: #fff;
    }
    .search {
      position: relative;
      .search-icon {
        position: absolute;
        margin: 0.375rem 15.5rem 0.375rem 0.875rem;
        display: inline-block;
        width: 1.125rem;
        height: 1.125rem;
        font-size: 1.25rem;
        color: #dbd5db;
        font-weight: 600;
      }
      .search-ip {
        width: 17.5rem;
        height: 1.875rem;
        padding: 0 2.5rem;
        box-sizing: border-box;
        line-height: 1.25rem;
        border-radius: 6.25rem;
        background: rgba(228, 104, 96, 1);
        color: rgba(219, 213, 219, 1);
        outline: none;
        border: 1px solid rgb(234, 100, 89);
        font-size: 0.875rem;
        text-align: left;
        font-family: Arial;
        &::placeholder {
          color: rgba(219, 213, 219, 1);
        }
      }
    }
    .undetermined {
      display: inline-block;
      width: 1.875rem;
      height: 1.875rem;
      margin-left: 0.5rem;
      background: rgb(255, 255, 255);
    }
  }
  .select-bar {
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    background: rgba(228, 70, 59, 1);
    .item {
      display: inline-block;
      position: relative;
      .title {
        display: inline-block;
        width: 3.5625rem;
        height: 1.4375rem;
        line-height: 1.4375rem;
        font-size: 0.875rem;
        color: #eeeeee;
        font-family: PingFangSC-regular;
        text-align: center;
        // border-radius: 0.3125rem;
      }
      .active {
        color: rgba(255, 255, 255, 1);
      }
      .bttip {
        position: absolute;
        top: 2.0625rem;
        left: 0.875rem;
        width: 1.875rem;
        height: 1.5px;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 0.3125rem;
      }
    }
    .personality {
      margin-right: 5.125rem;
    }
  }
}
</style>