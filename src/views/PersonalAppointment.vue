<template>
  <!-- 头部区域 -->
  <div class="">
    <CommonHeader title="个人预约"></CommonHeader>
    <!-- 内容区域 -->
    <div class="container">
      <div class="form">
        <!-- 入校时间 -->
        <van-field
          v-model="form.oispIntoSchoolTime"
          name="oispIntoSchoolTime"
          label="入校时间"
          readonly
          placeholder="请选择时间"
          @click="showPicker = true"
          :rules="[{ required: true, message: '入校时间不能为空' }]"
        >
          <template #right-icon>
            <van-image
              :src="require('@/assets/images/dateTime.png')"
            ></van-image>
          </template>
        </van-field>
        <van-popup v-model:show="showPicker" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            :formatter="formatter"
            type="datetime"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <!-- 离校时间 -->
        <van-field
          v-model="form.oispLeaveSchoolTime"
          name="oispLeaveSchoolTime"
          label="离校时间"
          readonly
          placeholder="请选择时间"
          @click="showPicker1 = true"
          :rules="[{ required: true, message: '离校时间不能为空' }]"
        >
          <template #right-icon>
            <van-image
              :src="require('@/assets/images/dateTime.png')"
            ></van-image>
          </template>
        </van-field>
        <van-popup v-model:show="showPicker1" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            :formatter="formatter"
            type="datetime"
            @confirm="onConfirm1"
            @cancel="showPicker1 = false"
          />
        </van-popup>
        <!-- 入校事由 -->
        <div class="form-item">
          <span>入校事由</span>
          <van-field
            v-model="form.oispIntoSchoolReason"
            rows="4"
            autosize
            type="textarea"
            placeholder="请输入入校事由"
          />
        </div>
        <!-- 入校人员 -->
        <div class="form-item">
          <div class="label-hd">
            <div class="label-title">入校人员</div>
            <div class="label-right">
              <span>添加人员</span>
              <van-icon name="add" color="#3d7be1" />
            </div>
          </div>
          <van-divider />
        </div>
        <!-- 通行校区 -->
        <div class="form-item">
          <span>通行校区</span>
          <van-checkbox-group
            v-model="form.oispCampus"
            direction="horizontal"
            style="margin-top: 15px"
          >
            <van-checkbox name="a" shape>复选框 a</van-checkbox>
            <van-checkbox name="b" shape>复选框 b</van-checkbox>
          </van-checkbox-group>
          <van-divider />
        </div>
        <!-- 通行校区 -->
        <div class="form-item">
          <span>通行校门</span>
          <van-divider />
        </div>

        <div class="form-btn">
          <van-button round type="primary">提交审核</van-button>
          <van-button round>清除</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CommonHeader from "@/components/CommonHeader";
import { ref } from "@vue/reactivity";
import moment from "moment";
// 表单数据
const form = ref({});
const showPicker = ref(false);
const showPicker1 = ref(false);
// 入校时间日期选择器确定事件
const onConfirm = (val) => {
  form.value.oispIntoSchoolTime = moment(val).format("YYYY-MM-DD HH:mm");
  showPicker.value = false;
};
// 离校时间选择器取消事件
const onConfirm1 = (val) => {
  form.value.oispLeaveSchoolTime = moment(val).format("YYYY-MM-DD HH:mm");
  showPicker1.value = false;
};
// 格式化时间
const formatter = (type, val) => {
  if (type === "year") {
    return `${val}年`;
  }
  if (type === "month") {
    return `${val}月`;
  }
  if (type === "day") {
    return `${val}日`;
  }
  if (type === "day") {
    return `${val}日`;
  }
  return val;
};
// 默认当前时间
const currentDate = ref(new Date());
</script>

<style lang="scss" scoped>
.form {
  margin-top: 1.25rem;
  .form-btn {
    position: fixed;
    width: 100%;
    bottom: 10px;
    display: flex;
    justify-content: space-around;
    :deep(.van-button):nth-child(1) {
      width: 60%;
    }
    :deep(.van-button):nth-child(2) {
      width: 27%;
    }
  }
}
.label-right {
  display: flex;
  align-items: center;
  span {
    margin-right: 0.625rem;
    color: #3d7be1;
  }
}
.form-item {
  padding: 0.625rem 1rem;
  span {
    font-size: 14px;
    color: var(--van-field-label-color);
  }
}
.label-hd {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.label-title {
  font-size: 14px;
  color: var(--van-field-label-color);
}
</style>
