import db from './firebird/fireBirdConnection';

async function getCidadesOldByIdModel(ID) {
    const conn = await db.connect();
    const selectQuery = `SELECT * FROM CIDADESOLD WHERE COD_CIDADE ='${ID}';`;  
    return new Promise((resolve, reject) => {
        conn.query(selectQuery, (err, result) => {
            if (err) {
                reject(err);
                console.log(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    }) 
}

async function getCidadesByNameModel(NAME, UF) {
    const conn = await db.connect();
    const selectQuery = `SELECT * FROM CIDADES WHERE NOME = '${NAME}' AND UF = '${UF}';`;  
    return new Promise((resolve, reject) => {
        conn.query(selectQuery, (err, result) => {
            if (err) {
                reject(err);
                console.log(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    })    
}

export { getCidadesOldByIdModel, getCidadesByNameModel };
