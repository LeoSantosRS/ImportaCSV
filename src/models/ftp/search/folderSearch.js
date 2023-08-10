async function folderExists(conn, folderName) {
    try {
      await conn.cd(folderName);
      return true;
    } catch (err) {
      //console.error(err);
      return false;
    }
  }
  
module.exports = {  folderExists };
  

