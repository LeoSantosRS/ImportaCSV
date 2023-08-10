import { insertGrupoService, getGrupoByNameService } from "../services/grupo.services";
import fs from "fs";
import csv from "csv-parser";

const filePath = '/BACKUP CLIENTES/MANUS AUTO PECAS/GRUPOS.CSV';

const insertFromCSV = (req, res) => {
    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (row) =>{
        const descricao = row.DESCRICAO;
        try{
            console.log(descricao);
            const insert = await insertGrupoService(descricao);
        }catch(err){
            console.log(err);
        }
    }).on('end', async () =>{
        console.log('Fim da importação');
        return res.status(201).json({
            msg: 'Fim da importação'
        })
    })
}

const getGrupoByName = async (req, res) =>{
    const { NOME } = req.body;
    const COD = await getGrupoByNameService(NOME);
    const CODIGO = COD[0].COD_GRUPO;
    return res.status(201).json(CODIGO);
}

export { insertFromCSV, getGrupoByName };