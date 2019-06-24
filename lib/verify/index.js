export default {
  /**
   * 验证是否为空
   * @param {*} val 需验证内容
   */
  nullContent: (val) => {
    const reg = /^\s+$/g;
    if (!val || reg.test(val)) return false;
    return true;
  },

  /**
   * 验证是否为邮箱地址
   * @param {*} val 需验证内容
   */
  emailAddress: (val) => {
    const regexp = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z-]+))@([a-zA-Z0-9-]+[.])",
      emailRegexp = new RegExp(regexp, "g");

    if (emailRegexp.test(val)) return true;
    return false;
  },

  /**
   * 验证座机
   * @param {*} val 内容
   */
  tel: (val) => {
    const reg = /^((\d{3,4}-)|\d{3.4}-)?\d{7,8}$/g,
      telRegxp = new RegExp(reg);

    if (telRegxp.test(val)) {
      telRegxp.lastIndex = 0;
      return true;
    } else {
      telRegxp.lastIndex = 0;
      return false;
    }
  },

  /**
   * 验证手机
   * @param {*} val 内容
   */
  mobile: (val) => {
    const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g,
      mobileRegxp = new RegExp(reg);

    if (mobileRegxp.test(val)) {
      mobileRegxp.lastIndex = 0;
      return true;
    } else {
      mobileRegxp.lastIndex = 0;
      return false;
    }
  },

  /**
   * 验证最小长度
   * @param {*} val 内容
   */
  minLength: (val) => {
    const len = val.length,
      flag = false;

    flag = (len < min) ? false : true;
    return flag;
  },

  /**
   * 验证最大长度
   * @param {*} val 内容
   */
  maxLength: (val) => {
    const len = val.length,
      flag = false;

    flag = (len > max) ? false : true;
    return flag;
  },

  /**
   * 验证网站地址
   * @param {*} url 内容 
   */
  website: (url) => {
    const regexp = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/g,
      websiteRegexp = new RegExp(regexp);

    if (websiteRegexp.test(url)) {
      websiteRegexp.lastIndex = 0;
      return true;
    } else {
      websiteRegexp.lastIndex = 0;
      return false;
    }
  }
};