import { converterCidadeById } from "../services/cidades.services";
import fs from "fs";
import csv from "csv-parser";

const filePath = '/BACKUP CLIENTES/MANUS AUTO PECAS/CIDADESOLD.CSV';

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
      const totalRows = data.length;
      let remainingRows = totalRows;

      for (const row of rows) {
        console.log('- - - - - - - - - -  - - - - - - - - - - - ');
      
        const { COD_CIDADE, NOME, UF } = row;
        if (COD_CIDADE) {         
          try {
            //await insertProdutoService(REF, DESCRICAO, MARCA, NCM, GRUPO, SUBGRUPO);
            const NEW_COD_CIDADE = await converterCidadeById(COD_CIDADE);            
            console.log(`COD_CIDADE_OLD: ${COD_CIDADE}`);
            console.log(`NOME: ${NOME}`);
            console.log(`UF: ${UF}`);
            console.log(`NOVO_COD_CIDADE: ${NEW_COD_CIDADE[0].COD_CIDADE}`);
     
          } catch (error) {
            console.error('Erro ao converter Cidade', error);            
          }
        }
      }
      console.log('Importação concluída!'); // Ou qualquer outra ação que você queira realizar após a importação
      res.status(201).json({
        msg: 'Fim da importação'
      });
    });
};

export { insertFromCSV };