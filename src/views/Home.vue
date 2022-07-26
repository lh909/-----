<template>
  <!-- 自定义顶部 -->
  <van-nav-bar title="出入管理预约系统" safe-area-inset-top placeholder>
    <template #left>
      <div class="hd-left">
        <van-icon name="cross" color="#fff" />
        <span style="margin-left: 10px">关闭</span>
      </div>
    </template>
    <template #right>
      <van-icon name="ellipsis" color="#fff" />
    </template>
  </van-nav-bar>
  <div class="container">
    <!-- 轮播图区域 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerImg" :key="item.id">
        <van-image :src="item.img" width="100%" height="147px" />
      </van-swipe-item>
    </van-swipe>
    <!-- 通知公告区域 -->
    <div class="notice">
      <van-notice-bar
        background="#fff"
        left-icon="volume-o"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <!-- 功能应用区域 -->
    <div class="yy">
      <div class="title">
        <p>应用功能</p>
      </div>
      <div class="content">
        <div
          class="content-item"
          v-for="item in gnyyList"
          :key="item.id"
          @click="toPage(item.path)"
        >
          <van-image :src="item.img" width="68px" height="68px" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
    <!-- 车辆 -->
    <div class="car-content">
      <p class="title">车辆</p>
      <div class="content">
        <div class="content-left">
          <van-image :src="require('@/assets/images/car.png')"></van-image>
          <p>固定通行</p>
        </div>
        <div class="content-left">
          <van-image
            :src="require('@/assets/images/car-right.png')"
          ></van-image>
        </div>
      </div>
    </div>
    <!-- 预约记录 -->
    <div class="car-content">
      <p class="title">预约记录</p>
      <div class="content">
        <div class="content-left">
          <van-image :src="require('@/assets/images/yyjl.png')"></van-image>
          <p>预约记录</p>
        </div>
        <div class="content-left">
          <van-image
            :src="require('@/assets/images/yyjl-right.png')"
          ></van-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { ref } = require("@vue/reactivity");
import { useRouter } from "vue-router";

// 轮播图数据
const bannerImg = ref([
  {
    id: 1,
    img: require("@/assets/images/banner1.png"),
  },
]);
// 功能应用数据
const gnyyList = ref([
  {
    id: 1,
    img: require("@/assets/images/tzgg.png"),
    label: "通知公告",
  },
  {
    id: 2,
    img: require("@/assets/images/gryy.png"),
    label: "个人预约",
    path: "/PersonalAppointment",
  },
  {
    id: 3,
    img: require("@/assets/images/dwyy.png"),
    label: "单位预约",
  },
  {
    id: 4,
    img: require("@/assets/images/yysh.png"),
    label: "预约审核",
  },
]);
// 跳转页面
const router = useRouter();
const toPage = (val) => {
  router.push(val);
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
}
.hd-left {
  span {
    color: #fff;
  }
}
.container {
  padding: 1.125rem 1.25rem;
  .notice {
    margin: 1.25rem 0;
  }
  .yy {
    width: 100%;
    height: 10.0625rem;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
    background: #ffffff;
    .title {
      height: 2.8125rem;
      line-height: 2.8125rem;
      border-bottom: 1px solid #f4f4f4;
      p {
        margin-left: 0.75rem;
        font-weight: bold;
        color: #333333;
      }
    }
    .content {
      margin-top: 0.625rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .content-item {
        display: flex;
        flex-direction: column;
        font-size: 0.875rem;
        align-items: center;
      }
    }
  }
  .car-content {
    .title {
      font-weight: bold;
      font-size: 16px;
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 5.3125rem;
      padding: 1.125rem;
      background: #ffffff;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
      .content-left {
        display: flex;
        align-items: center;
        p {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
