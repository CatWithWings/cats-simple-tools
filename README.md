## cats-simple-tools
里面有一些比较简单的工具函数，是我的一次练习也是积累

## npm (Recommended)
```
$ npm install cats-simple-tools
```

## Using the tool
```
  import { verify, preformance, sort } from "cats-simple-tools"

  verify.nullContent("123");
  
  window.addEventListener("scroll", throttle(fn, delay));
```

## Methods
  - verify
    - nullContent(val) 验证是否为空
    - emailAddress(val) 验证是否为邮箱地址
    - tel(val) 验证座机
    - mobile(val) 验证手机
    - minLength(val) 验证最小长度
    - maxLength(val) 验证最大长度
    - website(url) 验证网站地址

  - preformance
    - debounce(fn, wait, immediate) 防抖
    - throttle(fn, delay) 节流

  - sort
    - quickSort(arr) 快速排序
    - insertSort(arr) 插入排序
    - bubbleSort(arr) 冒泡排序