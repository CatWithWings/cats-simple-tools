"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default={/**
   * 防抖
   * @param {*} fn 回调函数
   * @param {*} wait 延迟时间
   * @param {*} immediate 是否立即执行 (设置立即执行，wait将失效)
   */debounce:function debounce(a,b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments),g=function(){setTimeout(function(){d=null,a.apply(e,f),e=f=null},b)};d?(clearTimeout(d),g()):c?a.apply(e,f):d=g()}},/**
   * 节流
   * @param {*} fn 回调函数
   * @param {*} delay 延迟时间
   */throttle:function throttle(a,b){var c,d=Date.now();return function(){var e=this,f=Array.prototype.slice.call(arguments),g=Date.now();// 已超出延时
g-d>b?(c&&clearTimeout(c),a.apply(e,f),d=g):!c&&(c=setTimeout(function(){c=null,a.apply(e,f),d=g},b))}}};exports["default"]=_default;