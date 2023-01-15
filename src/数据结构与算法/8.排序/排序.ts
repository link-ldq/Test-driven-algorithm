
// 冒泡排序
export function bubbleSort(arr: any[]): any[] {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
  return arr;
}

// 选择排序
export function selectionSort(arr: any[]): any[] {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = min + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr;
}