import { expect, assert, describe, it, test } from 'vitest';
// import { bubblesort } from './冒泡排序';


describe("冒泡排序", () => {
  it("283.移动零", () => {
    // https://leetcode.cn/problems/move-zeroes/
    const moveZeroes = function (nums: number[]): number[] {
      let len = nums.length
      for (let i = 0; i < len; i++) {
        for (let j = 1; j < len - i; j++) {
          if (nums[j - 1] == 0 && nums[j] != 0) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
          }
        }
      }
      return nums
    };
    expect(moveZeroes([0]).toString()).toBe("0")
    expect(moveZeroes([0, 1, 0, 3, 12]).toString()).toBe("1,3,12,0,0")
  })
  it("45. 把数组排成最小的数", () => {
    // https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
    const moveZeroes = function (nums: number[]): number[] {
      let len = nums.length
      for (let i = 0; i < len; i++) {
        for (let j = 1; j < len - i; j++) {
          let s1 = nums[j - 1].toString()
          let s2 = nums[j].toString()
          if (s1 + s2 > s2 + s1) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
          }
        }
      }
      return nums
    };
    expect(moveZeroes([10, 2]).join("")).toBe("102")
    expect(moveZeroes([3, 30, 34, 5, 9]).join("")).toBe("3033459")
  })

})
