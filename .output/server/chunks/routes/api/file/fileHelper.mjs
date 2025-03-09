import fs from 'fs';
import path from 'path';
import readline from 'readline';

const getFilePath = (fileName) => {
  return path.join(process.cwd(), "server/data", fileName);
};
const ensureFileExists = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "", "utf-8");
  }
};
const appendData = (fileName, newItem) => {
  const filePath = getFilePath(fileName);
  ensureFileExists(filePath);
  const dataString = JSON.stringify(newItem) + "\n";
  fs.appendFileSync(filePath, dataString, "utf-8");
};
const readData = (fileName) => {
  const filePath = getFilePath(fileName);
  ensureFileExists(filePath);
  const lines = fs.readFileSync(filePath, "utf-8").split("\n").filter((line) => line.trim());
  return lines.map((line) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      console.error(`L\u1ED7i parse JSON trong file ${fileName}:`, error);
      return null;
    }
  }).filter((item) => item !== null);
};
const updateDataByNameAndStatus = (fileName, id) => {
  const filePath = getFilePath(fileName);
  ensureFileExists(filePath);
  let data = readData(fileName);
  let updated = false;
  data = data.map((item) => {
    if (item.id == id) {
      updated = true;
      return { ...item, status: "success" };
    }
    return item;
  });
  if (updated) {
    const newDataString = data.map((item) => JSON.stringify(item)).join("\n") + "\n";
    fs.writeFileSync(filePath, newDataString, "utf-8");
  }
  return updated;
};
const findRecordByNameAndStatus = async (fileName, name) => {
  const filePath = getFilePath(fileName);
  ensureFileExists(filePath);
  const fileStream = fs.createReadStream(filePath, "utf-8");
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const record = JSON.parse(line);
      if (record.name === name && record.status === "pending") {
        rl.close();
        return record;
      }
    } catch (error) {
      console.error(`L\u1ED7i parse JSON trong file ${fileName}:`, error);
    }
  }
  return null;
};

export { appendData, findRecordByNameAndStatus, readData, updateDataByNameAndStatus };
//# sourceMappingURL=fileHelper.mjs.map
