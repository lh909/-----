<template>
  <van-nav-bar
    :title="title"
    left-arrow
    placeholder
    safe-area-inset-top
    @click-left="onClickLeft"
  >
    <template #left>
      <div class="hd-left">
        <van-icon name="arrow-left" color="#fff" />
        <span>返回</span>
      </div>
    </template>
    <template #right>
      <van-icon name="ellipsis" color="#fff" />
    </template>
  </van-nav-bar>
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
  title: {
    type: String,
    default: "测试",
  },
});
// 返回
const router = useRouter();
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
:deep {
  .van-nav-bar__content {
    background: #3d7be1;
  }
  .van-nav-bar__title {
    color: #fff;
  }
  .van-nav-bar__text {
    color: #fff;
  }
  .van-nav-bar .van-icon {
    color: #fff;
  }
}
.hd-left {
  span {
    color: #fff;
    margin-left: 0.5rem;
  }
}
</style>
