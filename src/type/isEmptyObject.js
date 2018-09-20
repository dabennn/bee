import { isObject } from 'type';
import isEmptyObjectLike from './isEmptyObjectLike';

/**
 * 是否是空对象
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is emptyObject, else 'false'.
 */
function isEmptyObject(obj) {
  return isObject(obj) && isEmptyObjectLike(obj);
};

export default isEmptyObject;
