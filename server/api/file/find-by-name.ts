import { findRecordByNameAndStatus } from './fileHelper';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const fileName = query.fileName ? `${query.fileName}.json` : 'users.json';
  const name = query.name;

  return findRecordByNameAndStatus(fileName, name as string);
});
