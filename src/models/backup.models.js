import { connectFtp } from  './ftp/connection/connection';
import folderSearch from  './ftp/search/folderSearch';
import insertFile from  './ftp/Insert/fileInsert';
import insertFolder from  './ftp/Insert/folderInsert';
import { getListModel } from  './lista.models';
import { getRemetenteModel } from  './remetente.models';
const backupModels = async () =>{
    const listaDeEnvio = await getListModel();
    const remetente = await getRemetenteModel();
    for( let i = 0; i < listaDeEnvio.length; i++){
      const localDir = listaDeEnvio[i].PASTA;
      const localFileName = listaDeEnvio[i].ARQUIVO;
      const remoteDir = remetente[0].NOME;
      const conn = await connectFtp();       
     const remoteFolderExists = await folderSearch.folderExists(conn,remoteDir)  
      if(remoteFolderExists){
        const fileUpload = await insertFile.uploadFile(conn,localDir,remoteDir,localFileName)    
      }else{    
        const createFolder = await insertFolder.insertFolder(conn,remoteDir);
        const fileUpload = await insertFile.uploadFile(conn,localDir,remoteDir,localFileName)
      }      
    }    
    return true;
}

export { backupModels };