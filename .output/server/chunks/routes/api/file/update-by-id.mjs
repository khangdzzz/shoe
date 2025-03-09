import { d as defineEventHandler, g as getQuery } from '../../../nitro/nitro.mjs';
import { updateDataByNameAndStatus } from './fileHelper.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'fs';
import 'path';
import 'readline';

const updateById = defineEventHandler((event) => {
  const query = getQuery(event);
  const fileName = query.fileName ? `${query.fileName}.json` : "users.json";
  const id = query.id;
  return updateDataByNameAndStatus(fileName, id);
});

export { updateById as default };
//# sourceMappingURL=update-by-id.mjs.map
