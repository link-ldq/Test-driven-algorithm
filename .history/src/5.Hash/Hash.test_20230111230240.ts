import { HashFn, HashCl } from "./Hash";

import { expect, describe, it, test } from '@jest/globals';;
describe('Hash Function 哈希', () => {
  it('HashFn', () => {
    expect(HashFn('link', 10)).toBe(6)
  })
})

describe('Hash Class 哈希', () => {
  const hash = new HashCl()
  it('HashCl', () => {
    expect(hash.hashFunc('link', 10)).toBe(6)
  })
})