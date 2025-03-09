import { d as defineEventHandler, g as getQuery } from '../../../nitro/nitro.mjs';
import { findRecordByNameAndStatus } from './fileHelper.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'fs';
import 'path';
import 'readline';

const findByName = defineEventHandler((event) => {
  const query = getQuery(event);
  const fileName = query.fileName ? `${query.fileName}.json` : "users.json";
  const name = query.name;
  return findRecordByNameAndStatus(fileName, name);
});

export { findByName as default };
//# sourceMappingURL=find-by-name.mjs.map
