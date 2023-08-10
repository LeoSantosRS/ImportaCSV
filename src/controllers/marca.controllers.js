import { insertMarcasService, getMarcaByNameService } from "../services/marca.services";
import fs from "fs";
import csv from "csv-parser";

const filePath = '/BACKUP CLIENTES/MANUS AUTO PECAS/MARCAS.CSV';

const insertFromCSV = (req, res) => {
    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (row) =>{
        const NOME = row.MARCA;
        try{
            console.log(NOME);
            const insert = await insertMarcasService(NOME);
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

const getMarcaByName = async (req, res) =>{
    const { NOME } = req.body;
    const COD = await getMarcaByNameService(NOME);
    const CODIGO = COD[0].CODIGO;
    return res.status(201).json(CODIGO);
}

export { insertFromCSV, getMarcaByName };