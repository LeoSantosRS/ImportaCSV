import { insertFornecedorService } from "../services/fornecedor.services";
import fs from "fs";
import csv from "csv-parser";

const filePath = '/BACKUP CLIENTES/MANUS AUTO PECAS/FORNECEDOR.CSV';

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

        const { COD_FOR, COD_CIDADE, NOME, CGC, IE, ENDERECO, FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, COMPLEMENTO, BAIRRO, DATA_CAD, DATA_ULT, HOME_PAGE} = row;
        try {
          await insertFornecedorService(COD_CIDADE, NOME, CGC, IE, ENDERECO, FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, COMPLEMENTO, BAIRRO, DATA_CAD, DATA_ULT, HOME_PAGE);

        } catch (error) {
          //console.error('Erro ao inserir registro:', error);
          console.log(`COD_CLI: ${COD_FOR}`);
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