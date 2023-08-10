import configDB from './dataConfig';
import firebird from 'node-firebird';

// Função de conexão
async function connect() {
  return new Promise((resolve, reject) => {  
    firebird.attach(configDB.sysbackup, (err, db) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });
}

// Função de desconexão
async function disconnect(db) {
  return new Promise((resolve, reject) => {
    db.detach((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = { connect, disconnect };

//DELL 34' S3422DWG