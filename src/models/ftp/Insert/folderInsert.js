const insertFolder = async (conn, remoteDir) => {
  const newDir = `/${remoteDir}`; // adiciona a barra para criar a pasta na raiz do diretório
  try {
    await conn.ensureDir(newDir);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { insertFolder };

