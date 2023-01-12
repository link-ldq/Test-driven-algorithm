// export interface Dictionay {
//   items: any
// }
export class Dictionay {
  public items: any = {};
  // 字典属性
  constructor() {
    // this.items = {};
  }

  // 字典操作方法
  // 在字典中添加键值对
  set(key: any, value: any) {
    this.items[key] = value;
  };
  // 判断字典中是否有某个key
  has(key: any) {
    return this.items.hasOwnProperty(key);
  };
  // 从字典中移除元素
  remove(key: any) {
    // 1.判断字典中是否有这个key
    if (!this.has(key)) return false;
    // 2.从字典中删除key
    delete this.items[key];
    return true;
  };

  //根据key去获取value
  get(key: any) {
    return this.has(key) ? this.items[key] : undefined;
  };
  // 获取所有keys
  keys() {
    return Object.keys(this.items);
  };
  // 获取所有values
  values() {
    return Object.values(this.items);
  };
  // size方法
  size() {
    return this.keys().length;
  };
  // clear 方法
  clear() {
    this.items = {};
  };
}
