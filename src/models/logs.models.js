import db from './firebird/fireBirdConnection';

async function getLogs() {
    const conn = await db.connect();
    const sql = `SELECT * FROM LOGS_DE_ENVIO;`;
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          // Percorre o array de resultados e converte as datas e horas
          const logs = result.map((log) => {
            return {
              REMETENTE: log.REMETENTE,
              STATUS: log.STATUS,
              DATA: log.DATA,
              HORA: log.HORA
            };
          });
          resolve(logs);
        }
        db.disconnect(conn);
      });
    });
}

/*async function getLogs(){
    const conn = await db.connect();
    const sql = `SELECT * FROM LOGS_DE_ENVIO;`;
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });    
}*/
async function getLogByData(data) {
    const conn = await db.connect();
    const sql = `SELECT * FROM LOGS_DE_ENVIO WHERE DATA = '${data}';`;
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });
}

async function insertLogs(rementente, status){
    const conn = await db.connect();
const sql = `INSERT INTO LOGS_DE_ENVIO (ID, REMETENTE, STATUS ) VALUES (GEN_ID(gen_logs_de_envio_id, 1),'${rementente}', '${status}');`;
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });
}

export { insertLogs, getLogs, getLogByData };