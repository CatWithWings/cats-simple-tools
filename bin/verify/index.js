"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _readOnlyError(a){throw new Error("\""+a+"\" is read-only")}var _default={/**
   * 验证是否为空
   * @param {*} val 需验证内容
   */nullContent:function nullContent(a){var b=/^\s+$/g;return a&&!b.test(a)},/**
   * 验证是否为邮箱地址
   * @param {*} val 需验证内容
   */emailAddress:function emailAddress(a){var b=/^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z-]+))@([a-zA-Z0-9-]+[.])/g;return!!b.test(a)},/**
   * 验证座机
   * @param {*} val 内容
   */tel:function tel(a){var b=/^((\d{3,4}-)|\d{3.4}-)?\d{7,8}$/g,c=new RegExp(b);return c.test(a)?(c.lastIndex=0,!0):(c.lastIndex=0,!1)},/**
   * 验证手机
   * @param {*} val 内容
   */mobile:function mobile(a){var b=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g,c=new RegExp(b);return c.test(a)?(c.lastIndex=0,!0):(c.lastIndex=0,!1)},/**
   * 验证最小长度
   * @param {*} val 内容
   */minLength:function minLength(a){var b=a.length,c=!1;return c=(_readOnlyError("flag"),!(b<min)),c},/**
   * 验证最大长度
   * @param {*} val 内容
   */maxLength:function maxLength(a){var b=a.length,c=!1;return c=(_readOnlyError("flag"),!(b>max)),c},/**
   * 验证网站地址
   * @param {*} url 内容 
   */website:function website(a){var b=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/g,c=new RegExp(b);return c.test(a)?(c.lastIndex=0,!0):(c.lastIndex=0,!1)}};exports["default"]=_default;