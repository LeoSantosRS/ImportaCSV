import db from './firebird/fireBirdConnection';

async function insertClientModel(COD_CIDADE, NOME, CGC, RG, ENDERECO,	FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, BAIRRO, PESSOA, DATA_NASC,	
    DATA_CAD, DATA_ULT,	PROFISSAO, PAI, MAE, CNPJ, IE, RAZAO_SOCIAL, CONJUGE, AVALISTA, QTDE_FILHOS, NATURALIDADE, COMPLEMENTO, UF,
    RESIDENCIA, RESPONSAVEL, REFERENCIA1, REFERENCIA2, REFERENCIA3,	RENDA_CLI, RENDA_CONJ, RENDA_TOT, LIMITE, EMPRESA, EMP_ENDERECO,
    EMP_TEMPOSER, EST_CIVIL, LIMITE_USADO, LIMITE_DISP, RESP_CPF, RESP_RG ) {
    
    const conn = await db.connect();
    const insertQuery = `INSERT INTO CLIENTES (COD_CLI, COD_CIDADE, NOME, CGC, RG, ENDERECO,	FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, BAIRRO, PESSOA, DATA_NASC,	
        DATA_CAD, DATA_ULT,	PROFISSAO, PAI, MAE, CNPJ, IE, RAZAO_SOCIAL, CONJUGE, AVALISTA, QTDE_FILHOS, NATURALIDADE, COMPLEMENTO, UF,
    	RESIDENCIA, RESPONSAVEL, REFERENCIA1, REFERENCIA2, REFERENCIA3,	RENDA_CLI, RENDA_CONJ, RENDA_TOT, LIMITE, EMPRESA, EMP_ENDERECO,
        EMP_TEMPOSER, EST_CIVIL, LIMITE_USADO, LIMITE_DISP, RESP_CPF, RESP_RG) 
        VALUES ( GEN_ID(GEN_CLIENTES_ID, 1), '${COD_CIDADE}', '${NOME}', '${CGC}', '${RG}', '${ENDERECO}', '${FONE1}', '${FONE2}', '${FAX}', '${CELULAR}', '${CONTATO}', '${CEP}',
        '${NUMERO}', '${BAIRRO}', '${PESSOA}', CAST('${DATA_NASC}' AS DATE), CAST('${DATA_CAD}'AS DATE), CAST('${DATA_ULT}'AS DATE), '${PROFISSAO}', '${PAI}', '${MAE}', '${CNPJ}', '${IE}', '${RAZAO_SOCIAL}',
        '${CONJUGE}', '${AVALISTA}', '${QTDE_FILHOS}', '${NATURALIDADE}', '${COMPLEMENTO}', '${UF}', '${RESIDENCIA}', '${RESPONSAVEL}', '${REFERENCIA1}', '${REFERENCIA2}',
        '${REFERENCIA3}', '${RENDA_CLI}', '${RENDA_CONJ}', '${RENDA_TOT}', '${LIMITE}', '${EMPRESA}', '${EMP_ENDERECO}', '${EMP_TEMPOSER}', '${EST_CIVIL}', '${LIMITE_USADO}',
        '${LIMITE_DISP}', '${RESP_CPF}', '${RESP_RG}');`;
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

export { insertClientModel };
