import { insertProdutoService } from "../services/produto.services";
import fs from "fs";
import csv from "csv-parser";

const filePath = '/BACKUP CLIENTES/MANUS AUTO PECAS/PRODUTOS.CSV';

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
        //console.log('- - - - - - - - - -  - - - - - - - - - - - ');
      
        const { REF, DESCRICAO, MARCA, NCM, GRUPO, SUBGRUPO } = row;
        if (DESCRICAO) {         
          try {
            await insertProdutoService(REF, DESCRICAO, MARCA, NCM, GRUPO, SUBGRUPO);            
            /*console.log(`REF: ${REF}`);
            console.log(`DESCRICAO: ${DESCRICAO}`);
            console.log(`MARCA: ${MARCA}`);
            console.log(`NCM: ${NCM}`);
            console.log(`GRUPO: ${GRUPO}`);
            console.log(`SUBGRUPO: ${SUBGRUPO}`);*/
          } catch (error) {
            //console.error('Erro ao inserir registro:', error);
            console.log(`REF: ${REF}`);
            console.log(`DESCRICAO: ${DESCRICAO}`);
            console.log(`MARCA: ${MARCA}`);
            console.log(`NCM: ${NCM}`);
            console.log(`GRUPO: ${GRUPO}`);
            console.log(`SUBGRUPO: ${SUBGRUPO}`);
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