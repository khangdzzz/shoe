import { appendData } from './fileHelper';

export default defineEventHandler(async (event) => {
  const body: any = await readBody(event);
  const query = getQuery(event);
  const fileName = query.fileName ? `${query.fileName}.json` : 'users.json';

  await appendData(fileName, body);

  return { success: true, message: 'Dữ liệu đã được ghi vào file!' };
});
