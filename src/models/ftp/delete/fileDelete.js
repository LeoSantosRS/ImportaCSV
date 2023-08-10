async function deleteFile(conn, folderName, fileName) {
  const filePath = folderName ? `/${folderName}/${fileName}` : `/${fileName}`;
  try {
    await conn.remove(filePath);   
    return true;
  } catch(err) {    
    return false;
  }
}

module.exports = { deleteFile };

  