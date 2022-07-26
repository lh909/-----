// 验证手机号码
export const checkPhone=(val)=>{
   return /^1[3|4|5|6|7|8|9]\d{9}$/.test(val)
}

