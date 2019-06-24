"use strict";var _this=void 0;Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}var _default={/**
   * 快速排序
   */quickSort:function quickSort(a){if(!Array.isArray(a))throw new Error("\u8BF7\u8F93\u5165\u6570\u7EC4");if(1>=a.length)return a;for(var b=a[0],c=[],d=[],e=1,f=a.length;e<f;e++)a[e]>b?d.push(a[e]):c.push(a[e]);return[].concat(_toConsumableArray(_this.quickSort(c)),[b],_toConsumableArray(_this.quickSort(d)))},/**
   * 插入排序
   */insertSort:function insertSort(a){if(!Array.isArray(a))throw new Error("\u8BF7\u8F93\u5165\u6570\u7EC4");for(var e=0,f=a.length;e<f;e++)for(var b,c=e-1,d=a[e];0<=c&&a[c]>d;)b=a[c],a[c]=d,a[c+1]=b,c--;return a},/**
   * 冒泡排序
   */bubbleSort:function bubbleSort(a){if(!Array.isArray(a))throw new Error("\u8BF7\u8F93\u5165\u6570\u7EC4");// len - 1 是因为 arr[j] 与 arr[j + 1 已经排序了]
for(var b=a.length,c=0;c<b-1;c++)// 排除前面已经排过序的部分
for(var d=0;d<b-1-c;d++)if(a[d]>a[d+1]){var e=a[d];a[d]=a[d+1],a[d+1]=e}return a}};exports["default"]=_default;