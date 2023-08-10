import db from './firebird/fireBirdConnection';



async function insertMarcaModel(NOME) {
    const conn = await db.connect();
    const insertQuery = `INSERT INTO MARCAS (CODIGO, NOME ) VALUES (GEN_ID(GEN_MARCAS_ID, 1),'${NOME}');`;

    return new Promise((resolve, reject) => {
        conn.query(insertQuery, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(true); // Inserção bem-sucedida, retorna true
            }
            db.disconnect(conn);
        });
    });
}

async function getMarcaByNameModel(NOME) {
    const conn = await db.connect();
    const selectQuery = `SELECT CODIGO FROM MARCAS WHERE NOME = '${NOME}';`;  
    return new Promise((resolve, reject) => {
        conn.query(selectQuery, (err, result) => {
            if (err) {
                reject(err);
            } else {
                if (result.length === 0) {
                    resolve(1);
                } else {
                    resolve(result[0].CODIGO);
                }
            }
            db.disconnect(conn);
        });
    }) 
}

export { insertMarcaModel, getMarcaByNameModel };
