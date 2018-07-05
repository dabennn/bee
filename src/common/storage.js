import { isString, isObject } from '../type';

/**
 * 本地储存
 * @class Storage
 * @param {String} key localStorage键
 *
 *    @example
 *    const store = new Storage('store_key');
 *    store.add({ a: 1 });
 *    store.set('a', 2);
 *    let a = store.get('a'); // 2
 */
export default class Storage {
  constructor(key) {
    if (!isString(key)) {
      throw new TypeError('Storage Key must be String');
    }
    if (!key) {
      throw new Error('Empty String is not allow');
    }
    this.STORAGE_KEY = key;

    this._init();
  }

  static setItem(...args) {
    localStorage.setItem(...args);
  }

  static getItem(...args) {
    return localStorage.getItem(...args);
  }

  static removeItem(...args) {
    localStorage.removeItem(...args);
  }

  static clearAll() {
    localStorage.clear();
  }

  _init() {
    const value = localStorage[this.STORAGE_KEY];
    if (!value) {
      Storage.setItem(this.STORAGE_KEY, '');
    }
  }
  /**
   * 添加数据
   * @param {Object} obj 对象形式的数据
   * @return this
   */
  add(obj = {}) {
    if (!isObject(obj)) throw new TypeError('Invalid Object: ' + obj);
    try {
      const storage = Storage.getItem(this.STORAGE_KEY);
      if (storage) {
        obj = Object.assign(JSON.parse(storage), obj);
      }
      Storage.setItem(this.STORAGE_KEY, JSON.stringify(obj));
    } catch (e) {
      throw new Error(e);
    }
    return this;
  }
  /**
   * 根据键设置数据
   * @param {String} key 键
   * @param {Any} value 值
   */
  set(key, value) {
    const storage = this.get();
    storage[key] = value;
    Storage.setItem(this.STORAGE_KEY, JSON.stringify(storage));
    return this;
  }
  /**
   * 根据键获取数据
   * @param {String} key 键
   */
  get(key = '') {
    if (!isString(key)) return null;
    try {
      const storage = JSON.parse(Storage.getItem(this.STORAGE_KEY)) || {};
      if (!key) return storage;
      return storage[key];
    } catch (e) {
      console.warn(e);
      return {};
    }
  }
  /**
   * 根据键删除数据
   * @param {String} key 键
   */
  remove(key = '') {
    const storage = this.get();
    delete storage[key];
    Storage.setItem(this.STORAGE_KEY, JSON.stringify(storage));
    return this;
  }
  /**
   * 清除数据
   */
  clear() {
    Storage.removeItem(this.STORAGE_KEY);
  }
}
