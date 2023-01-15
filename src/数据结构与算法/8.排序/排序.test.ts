import { expect, assert, describe, it, test } from 'vitest';
import { bubbleSort, selectionSort } from './排序';

describe("排序算法手写实现", () => {
  it("冒泡排序", () => {
    const arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
    const sortArr = bubbleSort(arr).toString()
    expect(sortArr).toBe("0,1,2,3,4,5,6,7,8,9")
  })
  it("选择排序", () => {
    const arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
    const sortArr = selectionSort(arr).toString()
    expect(sortArr).toBe("0,1,2,3,4,5,6,7,8,9")
  })
})
