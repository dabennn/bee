import { isArray } from './type';
import { isEmptyArray } from './isEmptyArray';
import { random } from './random';

/**
 * 随机返回数组中的一项
 * @author   daben<dabennn07@gmail.com>
 * @param    {Array}                   arr  an array
 * @return   {*}                            random item of array
 */
export function randomItem(arr = []) {
  if (!isArray(arr)) {
    throw new TypeError('Expected an Array');
  }
  if (isEmptyArray(arr)) {
    return undefined;
  }
  return arr[random(arr.length - 1, true)];
};
