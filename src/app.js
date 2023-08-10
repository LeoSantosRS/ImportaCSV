import express from 'express';
import routes from './routes/index';
import cors from 'cors';
import remetente from './routes/remetente';
import lista from './routes/lista';
import logs from './routes/logs';
import backup from './routes/backup';
import grupo from './routes/grupo';
import subGrupo from './routes/subGrupo';
import marca from './routes/marcas';
import produto from './routes/produtos';
import cidades from './routes/cidades';
import clientes from './routes/clientes';
import fornecedor from './routes/fornecedor';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();        
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }));     

    }
   
    routes() {
        this.server.use(routes);
        this.server.use(remetente);  
        this.server.use(lista); 
        this.server.use(logs);
        this.server.use(backup);
        this.server.use(grupo);
        this.server.use(subGrupo);
        this.server.use(marca);
        this.server.use(produto);
        this.server.use(cidades);
        this.server.use(clientes);
        this.server.use(fornecedor);
    }

}

export default new App().server;