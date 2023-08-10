import ftp from 'basic-ftp';
import fs from 'fs';
import path from 'path';
async function uploadFile(conn, localDir, remoteDir, fileName) {

  const fileNameOrigin = fileName
  const localFile = `${localDir}/${fileName}`
 

  // Obter a data e hora atual
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-T:]/g, '').slice(0, 14);

  const fileRename = `${path.parse(fileNameOrigin).name}-${timestamp}${path.parse(fileNameOrigin).ext}`;
  const remoteFile = `/${remoteDir}/${fileRename}`
  
  try {  
    // Realiza o upload com a opção de overwrite habilitada
    await conn.uploadFrom(localFile, remoteFile, { overwrite: true });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { uploadFile };


