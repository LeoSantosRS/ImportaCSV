import db from './firebird/fireBirdConnection';

async function insertProdutoModel(REF, DESCRICAO, COD_MARCA, NCM, COD_GRUPO, COD_SUBGRUPO ) {
    
    const conn = await db.connect();
    const insertQuery = `INSERT INTO PRODUTOS (COD_PRO, COD_FOR, COD_GRUPO, COD_SUB, NOME, UNIDADE, REF, COD_MARCA, NFE_NCM, ATIVO, TIPO ) VALUES ( GEN_ID(GEN_PRODUTOS_ID, 1), '1', '${COD_GRUPO}', '${COD_SUBGRUPO}', '${DESCRICAO}', 'UN', '${REF}', '${COD_MARCA}', '${NCM}', 'S', 'P' );`;
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

export { insertProdutoModel };
