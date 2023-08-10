import db from './firebird/fireBirdConnection';

async function getRemetenteModel(){
    const conn = await db.connect();
    const sql = `SELECT * FROM REMETENTE;`;
    
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });
}

async function getRemetenteByNameModel(name){
    const conn = await db.connect();
    const sql = `SELECT * FROM REMETENTE WHERE NOME = '${name}';`;
    
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });
}

async function insertRemetenteModel(nome){
    const conn = await db.connect();
    const sql = `INSERT INTO REMETENTE (nome) VALUES ('${nome}');`;
    
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });
}

async function upadateRemetenteByIdModel (nome, id){
    const conn = await db.connect();
    const sql = `UPDATE REMETENTE SET NOME = '${nome}' WHERE ID = ${id};`;
    
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });
}

async function upadateRemetenteByNameModel (OldName, NewName){
    const conn = await db.connect();
    const sql = `UPDATE REMETENTE SET NOME = '${NewName}' WHERE NOME = '${OldName}';`;
    
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });
}


async function deleteRemetenteModel (id){
    const conn = await db.connect();
    const sql = `DELETE FROM remetente WHERE id = ${id};`;
    
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            db.disconnect(conn);
        });
    });
}

export { getRemetenteModel, getRemetenteByNameModel, insertRemetenteModel, upadateRemetenteByIdModel, upadateRemetenteByNameModel, deleteRemetenteModel };