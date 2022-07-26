import request from "@/utils/request";
// 根据手机号获取验证码
export function phoneNumber(phoneNumber, imgCode) {
  return request({
    url: `/api/phoneLogin/getCode/${phoneNumber}/${imgCode}`,
    method: "get",
  });
}

// 获取图形验证码
export function imgCode() {
  return request({
    url: `/api/phoneLogin/getKaptcha`,
    method: "get",
    responseType: "blob",
  });
}

// 手机号登录
export function phoneLogin(data) {
  return request({
    url: `/api/phoneLogin/login`,
    method: "post",
    data,
  });
}
