import { insertProdutoModel } from '../models/produto.models';
import { getGrupoByNameService } from './grupo.services';
import { getMarcaByNameService } from './marca.services';
import { getSubGrupoByNameService, getCodGrupoOnSubGrupoByNameService } from './subGrupo.services';

const insertProdutoService = async (REF, DESCRICAO, MARCA, NCM, GRUPO, SUBGRUPO) =>{
   
    const COD_MARCA = await getMarcaByNameService(MARCA);
    const COD_GRUPO = await getGrupoByNameService(GRUPO);
    const COD_SUBGRUPO = await getSubGrupoByNameService(SUBGRUPO);
    var GRUPO_COD = 0;
    var SUBGRUPO_COD = 0;
    var MARCA_COD = 0;
    const COD_GRUPO_ON_SUBGRUPO = await getCodGrupoOnSubGrupoByNameService(SUBGRUPO);
    if(COD_GRUPO){
        GRUPO_COD = COD_GRUPO;        
    } else{
        GRUPO_COD=1;               
    }

    if(COD_SUBGRUPO){
        SUBGRUPO_COD = COD_SUBGRUPO;
    }else{
        SUBGRUPO_COD=1;
    }  
    
    if(COD_MARCA){
        MARCA_COD = COD_MARCA;
    }else{
        MARCA_COD=1;
    }
    //console.log(`GRUPO: ${GRUPO_COD} - GRUPO ON SUB: ${COD_GRUPO_ON_SUBGRUPO} - SUBGRUPO: ${SUBGRUPO_COD} - MARCA: ${MARCA_COD}`);
    const PRODUTO = await insertProdutoModel(REF, DESCRICAO, MARCA_COD, NCM, GRUPO_COD, SUBGRUPO_COD);
    return PRODUTO;
}

export { insertProdutoService};