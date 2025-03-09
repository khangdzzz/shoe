import { readData } from './fileHelper';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const fileName = query.fileName ? `${query.fileName}.json` : 'users.json';

  return readData(fileName);
});
