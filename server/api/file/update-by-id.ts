import { updateDataByNameAndStatus } from './fileHelper';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const fileName = query.fileName ? `${query.fileName}.json` : 'users.json';
  const id = query.id;

  return updateDataByNameAndStatus(fileName, id as number);
});
