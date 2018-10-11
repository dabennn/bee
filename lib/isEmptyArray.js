import isArray from './isArray.js';
import isEmptyObjectLike from './isEmptyObjectLike.js';

/**
 * 是否是空数组
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   arr The value to check.
 * @return   {Boolean}             'true' if the value is emptyArray, else 'false'.
 */
export default function isEmptyArray(arr) {
  return isArray(arr) && isEmptyObjectLike(arr);
};
