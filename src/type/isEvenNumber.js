import isNumber from './isNumber';

/**
 * 是否是偶数
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   num  The value to check.
 * @return   {Boolean}             'true' if the value is evenNumber, else 'false'.
 */
export default function isEvenNumber(num) {
  return isNumber(num) && !(num % 2);
};
