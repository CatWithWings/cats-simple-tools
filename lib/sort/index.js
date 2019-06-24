/**
 * 快速排序
 */
export function quickSort(arr) {
  if (!Array.isArray(arr)) throw new Error("请输入数组");

  if (arr.length <= 1) return arr;

  const base = arr[0];
  const left = [];
  const right = [];

  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] > base) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return [...quickSort(left), base, ...quickSort(right)]
}

/**
 * 插入排序
 */
export function insertSort(arr) {
  if (!Array.isArray(arr)) throw new Error("请输入数组");

  for (let i = 0, len = arr.length; i < len; i++) {
    let prevIndex = i - 1;
    let current = arr[i];

    while (prevIndex >= 0 && arr[prevIndex] > current) {
      const temp = arr[prevIndex];
      arr[prevIndex] = current;
      arr[prevIndex + 1] = temp;
      prevIndex--;
    }
  }
  return arr;
}

/**
 * 冒泡排序
 */
export function bubbleSort(arr) {
  if (!Array.isArray(arr)) throw new Error("请输入数组");

  const len = arr.length;

  // len - 1 是因为 arr[j] 与 arr[j + 1 已经排序了]
  for (let i = 0; i < len - 1; i++) {
    // 排除前面已经排过序的部分
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}