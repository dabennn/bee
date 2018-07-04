import * as module from './module/index';
import * as type from './type/index';
import * as common from './common/index';

export * from './module/index';
export * from './type/index';
export * from './common/index';

const Z = {};
const addDefault = (o) => {
  Object.keys(o).forEach((v) => {
    Z[v] = o[v];
  });
};

addDefault(module);
addDefault(type);
addDefault(common);

export default Z;
