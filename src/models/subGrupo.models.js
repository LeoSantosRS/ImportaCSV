import db from './firebird/fireBirdConnection';



async function insertSubGrupoModel(COD_GRUPO, DESCRICAO) {
    const conn = await db.connect();
    const insertQuery = `INSERT INTO SUBGRUPO (COD_GRUPO, COD_SUB, DESCRICAO ) VALUES ( '${COD_GRUPO}', GEN_ID(GEN_SUBGRUPO_ID, 1),'${DESCRICAO}');`;
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

async function getSubGrupoByNameModel(NOME) {
    const conn = await db.connect();
    const selectQuery = `SELECT COD_SUB FROM SUBGRUPO WHERE DESCRICAO = '${NOME}';`;  
    return new Promise((resolve, reject) => {
        conn.query(selectQuery, (err, result) => {
            if (err) {
                reject(err);
            } else {
                if (result.length === 0) {
                    resolve(1);
                } else {
                    resolve(result[0].COD_SUB);
                }
                
            }
            db.disconnect(conn);
        });
    }) 
}

async function getCodGrupoOnSubGrupoByNameModel(NOME) {
    const conn = await db.connect();
    const selectQuery = `SELECT COD_GRUPO FROM SUBGRUPO WHERE DESCRICAO = '${NOME}';`;  
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

export { insertSubGrupoModel, getSubGrupoByNameModel, getCodGrupoOnSubGrupoByNameModel };
