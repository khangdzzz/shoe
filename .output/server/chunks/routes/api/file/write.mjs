import { d as defineEventHandler, r as readBody, g as getQuery } from '../../../nitro/nitro.mjs';
import { appendData } from './fileHelper.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'fs';
import 'path';
import 'readline';

const write = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const query = getQuery(event);
  const fileName = query.fileName ? `${query.fileName}.json` : "users.json";
  const parsedBody = typeof body === "string" ? JSON.parse(body) : body;
  appendData(fileName, parsedBody);
  return { success: true, message: "D\u1EEF li\u1EC7u \u0111\xE3 \u0111\u01B0\u1EE3c ghi v\xE0o file!" };
});

export { write as default };
//# sourceMappingURL=write.mjs.map
