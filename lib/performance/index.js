export default {

  /**
   * 防抖
   * @param {*} fn 回调函数
   * @param {*} wait 延迟时间
   * @param {*} immediate 是否立即执行 (设置立即执行，wait将失效)
   */
  debounce: (fn, wait, immediate) => {
    let timer;

    return function f() {
      let context = this;
      let args = [...arguments];

      const later = () => {
        setTimeout(() => {
          timer = null;
          fn.apply(context, args);
          context = args = null;
        }, wait);
      };

      // 计时标志为空
      if (!timer) {
        if(immediate) {
          fn.apply(context, args);
        } else {
          timer = later();
        }
      } else {
        clearTimeout(timer);
        later()
      }
    }
  },

  /**
   * 节流
   * @param {*} fn 回调函数
   * @param {*} delay 延迟时间
   */
  throttle: (fn, delay) => {
    let timer;
    let previous = Date.now();

    return function f() {
      let context = this,
        args = [...arguments],
        now = Date.now();

      // 已超出延时
      if (now - previous > delay) {
        if(timer) {
          clearTimeout(timer);
        }
        fn.apply(context, args);
        previous = now;
      } else {
        if (!timer) {
          timer = setTimeout(function() {
            timer = null;
            fn.apply(context, args);
            previous = now;
          }, delay);
        }
      }
    };
  }
};