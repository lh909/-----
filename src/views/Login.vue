<template>
  <div class="login-hd">
    <div class="logo">
      <van-image
        width="100"
        height="100"
        :src="require('@/assets/images/logo.png')"
      />
    </div>
    <p>出入管理预约系统</p>
  </div>
  <!-- 登录表单区域 -->
  <div class="login-form">
    <!-- 通知公告区域 -->
    <van-notice-bar
      color="#999"
      background="#fff"
      left-icon="volume-o"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    >
      <template #left-icon>
        <van-image
          :src="require('@/assets/images/notice.png')"
          width="16px"
          height="16px"
        />
      </template>
    </van-notice-bar>
    <!-- 表单区域 -->
    <div class="form">
      <p>欢迎登录</p>
      <div class="my-form">
        <van-form ref="formRef">
          <div class="form-item">
            <p>手机号</p>
            <van-field
              name="phone"
              :rules="[
                {
                  validator: checkPhone,
                  trigger: 'onBlur',
                  message: '手机号不正确',
                },
              ]"
              v-model="phone"
              placeholder="请输入账号"
              label-width="60px"
            />
          </div>
          <div class="form-item">
            <p>图形验证</p>
            <van-field
              :rules="[
                { required: true, message: '请输入验证码', trigger: 'onBlur' },
              ]"
              show-error
              name="code"
              v-model="code"
              placeholder="请输入验证码"
              label-width="60px"
            >
              <template #extra>
                <van-image
                  width="94"
                  height="40"
                  :src="codeImg"
                  @click="getImgCode"
                />
              </template>
            </van-field>
          </div>
          <div class="form-item">
            <p>手机验证码</p>
            <van-field
              name="phoneCode"
              v-model="phoneCode"
              placeholder="请输入验证码"
              label-width="60px"
              :rules="[
                {
                  required: true,
                  message: '请输入短信验证码',
                  trigger: 'onBlur',
                },
              ]"
            >
              <template #button>
                <van-button
                  :disabled="time === 0 ? false : true"
                  size="small"
                  type="primary"
                  @click="getCode"
                  >{{ timeStatus ? timeTitle : "发送验证码" }}</van-button
                >
              </template>
            </van-field>
          </div>
        </van-form>
      </div>
    </div>
    <!-- 登录按钮区域 -->
    <div class="login-btn">
      <van-button
        type="primary"
        block
        round
        color="#5B93FF"
        style="opacity: 0.35"
        @click="login"
        >登录</van-button
      >
      <van-button
        @click="authLogin"
        plain
        block
        round
        style="opacity: 0.35; margin-top: 20px"
        >统一认证号登录</van-button
      >
    </div>
  </div>
</template>

<script setup>
const { ref } = require("@vue/reactivity");
import { checkPhone } from "@/utils/validate";
import { phoneNumber, imgCode, phoneLogin } from "@/api/login";
import { Toast } from "vant";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
const phone = ref("");
// 验证码
const code = ref("");
const phoneCode = ref("");
// 图形验证码
const codeImg = ref("");
const formRef = ref();
// 倒计时状态
const timeStatus = ref(false);
const timeTitle = ref("发送验证码");
const time = ref(0);
const router = useRouter();
// 发送短信验证码
const getCode = () => {
  // 判断手机号码是否输入
  if (!phone.value) {
    Toast("请输入手机号码再试");
    return;
  }
  if (!code.value) {
    Toast("请输入图形验证码再试");
    return;
  }
  phoneNumber(phone.value, code.value).then((res) => {
    if (res.code === 200) {
      timeStatus.value = true;
      time.value = 60;
      const timer = setInterval(() => {
        time.value--;
        timeTitle.value = `${time.value}s后再重试`;
        if (time.value === 0) {
          timeTitle.value = "发送验证码";
          clearInterval(timer);
        }
      }, 1000);
    } else {
      Toast(res.msg);
      setTimeout(() => {
        getImgCode();
      }, 1000);
    }
  });
};
const login = () => {
  formRef.value
    .validate()
    .then(() => {
      phoneLogin({
        code: phoneCode.value,
        phoneNumber: phone.value,
      }).then((res) => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        if (res.code === 200) {
          router.push("/home");
        } else {
          Toast(res.msg);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
// 获取图形验证码
const getImgCode = () => {
  imgCode().then((res) => {
    let blob = new Blob([res]);
    let url = window.URL.createObjectURL(blob);
    codeImg.value = url;
  });
};
// 统一认证号登录
const authLogin = () => {
  window.location.href = "http://reserve.cqu.edu.cn";
};
onMounted(() => {
  getImgCode();
});
</script>

<style lang="scss" scoped>
.login-hd {
  height: 25.875rem;
  width: 100%;
  background: url("@/assets/images/login_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.875rem;
    color: #ffffff;
    font-weight: 500;
    font-family: PingFang SC;
  }
}
.login-form {
  background: #ffffff;
  position: relative;
  top: -80px;
  border-radius: 0px 50px 0 0;
  padding: 1.5625rem 1.9375rem;
  left: 0;
}

.form {
  font-size: 1.625rem;
  .my-form {
    font-size: 0.875rem;
    color: #8f8f8f;
  }
}
::v-deep {
  .van-cell {
    padding: 0;
  }
  .van-field__body {
    font-size: 1.125rem;
  }
  .van-notice-bar {
    padding: 0;
  }
}
.login-btn {
  margin-top: 2.5rem;
}
</style>
