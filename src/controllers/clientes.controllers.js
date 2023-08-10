import { insertClientService } from "../services/clientes.services";
import fs from "fs";
import csv from "csv-parser";

const filePath = '/BACKUP CLIENTES/MANUS AUTO PECAS/CLIENTES.CSV';

const insertFromCSV = async (req, res) => {
  const data = [];
  fs.createReadStream(filePath)
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', async () => {
      const columnNames = Object.keys(data[0]);
      const rows = data;

      for (const row of rows) {
        //console.log('- - - - - - - - - -  - - - - - - - - - - - ');

        const { COD_CLI, COD_CIDADE, CGC, NOME, RG, ENDERECO, FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, BAIRRO, PESSOA, DATA_NASC,
          DATA_CAD, DATA_ULT, PROFISSAO, PAI, MAE, CNPJ, IE, RAZAO_SOCIAL, CONJUGE, AVALISTA, QTDE_FILHOS, NATURALIDADE, COMPLEMENTO, UF,
          RESIDENCIA, RESPONSAVEL, REFERENCIA1, REFERENCIA2, REFERENCIA3, RENDA_CLI, RENDA_CONJ, RENDA_TOT, LIMITE, EMPRESA, EMP_ENDERECO,
          EMP_TEMPOSER, EST_CIVIL, LIMITE_USADO, LIMITE_DISP, RESP_CPF, RESP_RG } = row;
        try {
          await insertClientService(COD_CIDADE, CGC, NOME, RG, ENDERECO, FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, BAIRRO, PESSOA, DATA_NASC,
            DATA_CAD, DATA_ULT, PROFISSAO, PAI, MAE, CNPJ, IE, RAZAO_SOCIAL, CONJUGE, AVALISTA, QTDE_FILHOS, NATURALIDADE, COMPLEMENTO, UF,
            RESIDENCIA, RESPONSAVEL, REFERENCIA1, REFERENCIA2, REFERENCIA3, RENDA_CLI, RENDA_CONJ, RENDA_TOT, LIMITE, EMPRESA, EMP_ENDERECO,
            EMP_TEMPOSER, EST_CIVIL, LIMITE_USADO, LIMITE_DISP, RESP_CPF, RESP_RG);

        } catch (error) {
          //console.error('Erro ao inserir registro:', error);
          console.log(`COD_CLI: ${COD_CLI}`);
          console.log(error);
        }
      }

      console.log('Importação concluída!'); // Ou qualquer outra ação que você queira realizar após a importação
      res.status(201).json({
        msg: 'Fim da importação'
      });
    });
};

export { insertFromCSV };