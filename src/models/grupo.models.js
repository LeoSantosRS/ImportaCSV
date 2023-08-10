import db from './firebird/fireBirdConnection';



async function insertGrupoModel(DESCRICAO) {
    const conn = await db.connect();
    const insertQuery = `INSERT INTO GRUPO (COD_GRUPO, DESCRICAO, COMISSAO, DESCONTO ) VALUES (GEN_ID(GEN_GRUPO_ID, 1),'${DESCRICAO}', NULL, NULL);`;

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

async function getGrupoByNameModel(DESCRICAO) {
    const conn = await db.connect();
    const selectQuery = `SELECT COD_GRUPO FROM GRUPO WHERE DESCRICAO = '${DESCRICAO}';`;  
    return new Promise((resolve, reject) => {
        conn.query(selectQuery, (err, result) => {
            if (err) {
                reject(err);
            } else {
                if (result.length === 0) {
                    resolve(1);
                } else {
                    resolve(result[0].COD_GRUPO);
                }
                
            }
            db.disconnect(conn);
        });
    }) 
}

export { insertGrupoModel, getGrupoByNameModel };
