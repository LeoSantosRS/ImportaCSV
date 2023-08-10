import db from './firebird/fireBirdConnection';

async function insertFornecedorModel(COD_CIDADE, NOME, CGC, IE, ENDERECO, FONE1, FONE2, FAX, CELULAR, CONTATO, CEP,	NUMERO,	COMPLEMENTO, BAIRRO, DATA_CAD, DATA_ULT, HOME_PAGE) {
    
    const conn = await db.connect();
    const insertQuery = `INSERT INTO FORNECEDOR (COD_FOR, COD_CIDADE, NOME, CGC, IE, ENDERECO, FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, COMPLEMENTO, BAIRRO, DATA_CAD, DATA_ULT, HOME_PAGE) 
        VALUES ( GEN_ID(GEN_FORNECEDOR_ID, 1), '${COD_CIDADE}', '${NOME}', '${CGC}','${IE}', '${ENDERECO}', '${FONE1}', '${FONE2}', '${FAX}', '${CELULAR}', '${CONTATO}', '${CEP}',
        '${NUMERO}', '${COMPLEMENTO}', '${BAIRRO}', CAST('${DATA_CAD}'AS DATE), CAST('${DATA_ULT}'AS DATE), '${HOME_PAGE}');`;
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

export { insertFornecedorModel };
