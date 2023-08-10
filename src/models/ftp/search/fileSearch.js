import fs from 'fs';

async function listDir(conn, folderName) {
  const folderPath = folderName ? `/${folderName}` : '';
  try {
    const list = await conn.list(folderPath);
    return list;
  } catch(err) {
    console.error(`Erro ao listar diretório ${folderName}: `, err);
    throw err;
  }
}

function findFileByName(files, fileName) {
  for (let i = 0; i < files.length; i++) {
    if (files[i].name === fileName) {
      return true;
    }
  }
  return false;
}

async function fileExists(conn, folderName, fileName) {
  const files = await listDir(conn, folderName);
  return findFileByName(files, fileName);
}

function checkLocalFileExists(filePath) {
  return fs.promises.access(filePath, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}

export { listDir, fileExists, checkLocalFileExists };
