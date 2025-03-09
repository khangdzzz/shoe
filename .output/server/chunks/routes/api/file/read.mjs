import { d as defineEventHandler, g as getQuery } from '../../../nitro/nitro.mjs';
import { readData } from './fileHelper.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'fs';
import 'path';
import 'readline';

const read = defineEventHandler((event) => {
  const query = getQuery(event);
  const fileName = query.fileName ? `${query.fileName}.json` : "users.json";
  return readData(fileName);
});

export { read as default };
//# sourceMappingURL=read.mjs.map
