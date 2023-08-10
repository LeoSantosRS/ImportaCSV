import db from './firebird/fireBirdConnection';
async function getListModel(){
    
    const conn = await db.connect();
    const sql = `SELECT * FROM LISTA;`;
    
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


async function insertListModel(pasta, arquivo, remetente){
    const conn = await db.connect();
    const insertQuery = `INSERT INTO LISTA (ID, PASTA, ARQUIVO, REMETENTE ) VALUES (GEN_ID(GEN_LISTA_ID, 1),'${pasta}', '${arquivo}', '${remetente}');`;
    const selectQuery = `SELECT * FROM LISTA;`;

    return new Promise((resolve, reject) => {
        conn.query(insertQuery, (err, result) => {
            if (err) {
                reject(err);
            } else {
                conn.query(selectQuery, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                    db.disconnect(conn);
                });
            }
        });
    });
}

module.exports = { getListModel, insertListModel };
