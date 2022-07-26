<template>
  <!-- 自定义顶部导航栏 -->
  <van-nav-bar safe-area-inset-top placeholder>
    <template #left>
      <div class="hd-left">
        <van-icon name="cross" color="#fff" />
        <span>关闭</span>
      </div>
    </template>
    <template #right>
      <div class="hd-right">
        <van-icon name="ellipsis" color="#fff" />
      </div>
    </template>
  </van-nav-bar>
  <!-- 通知公告内容区域 -->
  <div class="notcie-content">
    <div class="notice-title">通知公告</div>
    <div class="content">
      系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正在维护中升级中，暂不开放平台，请耐心等待系统正升级中，暂不开放平台，请耐心等待系统正在维护中升级中，
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
::v-deep {
  .van-nav-bar__content {
    height: 3rem;
    background-color: #3d7be1;
  }
  .van-nav-bar__title {
    height: 3rem;
    line-height: 3rem;
    color: #fff;
  }
}
.hd-left {
  display: flex;
  align-items: center;
  color: #fff;
  margin-left: 0.625rem;
  span {
    margin-left: 20px;
  }
}
.hd-right {
  margin-right: 0.625rem;
}
.notcie-content {
  padding: 1.5rem 1.25rem;
  .notice-title {
    text-align: center;
    font-size: 1.5rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: #dc2424;
    margin-bottom: 1.5rem;
  }
}
</style>
