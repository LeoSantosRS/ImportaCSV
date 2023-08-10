import { insertSubGrupoService, getSubGrupoByNameService } from "../services/subGrupo.services";
import fs from "fs";
import csv from "csv-parser";

const filePath = '/BACKUP CLIENTES/MANUS AUTO PECAS/SUBGRUPO.CSV';

const insertFromCSV = (req, res) => {
  const data = [];
    fs.createReadStream(filePath)
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      const columnNames = Object.keys(data[0]);
      const rows = data

      for (const row of rows) {
        //console.log('- - - - - - - - - -  - - - - - - - - - - - ')
        for (const COD_GRUPO of columnNames) {
          const DESCRICAO = row[COD_GRUPO];
          if (DESCRICAO) {
            //console.log(`${COD_GRUPO}: ${DESCRICAO}`);
            const insert = insertSubGrupoService(COD_GRUPO, DESCRICAO);
          }
        }
      }

      console.log('Importação concluída!'); // Ou qualquer outra ação que você queira realizar após a importação
      res.status(201).json({
        msg: 'Fim da importação'
      });
    }
  );
};

const getSubGrupoByName = async (req, res) =>{
  const { NOME } = req.body;
  const COD = await getSubGrupoByNameService(NOME);
  const CODIGO = COD[0].COD_SUB;
  return res.status(201).json(CODIGO);
}

export { insertFromCSV, getSubGrupoByName };