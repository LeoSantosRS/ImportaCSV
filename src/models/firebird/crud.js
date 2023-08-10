import { connect } from './fireBirdConnection'
// Função de criação
async function create(table, campos, valores) {
    const db = await connect();
    const sql = `INSERT INTO ${table} (${campos}) VALUES (${valores})`;    
  
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
        disconnect(db);
      });
    });
  }
  
  // Função de leitura
  async function read(table, id) {
    const db = await connect();
    const sql = `SELECT * FROM ${table} WHERE id = ${id}`;
  
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0]);
        }
        disconnect(db);
      });
    });
  }
  
  // Função de atualização
  async function update(table, campos, id ) {
    const db = await connect();
    const sql = `UPDATE ${table} SET ${campos} WHERE id = ${id}`;  
  
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
        disconnect(db);
      });
    });
  }
  
  // Função de exclusão
  async function remove(table, id) {
    const db = await connect();
    const sql = `DELETE FROM ${table} WHERE id = ${id}`;
    const params = [id];
  
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
        disconnect(db);
      });
    });
  }

  module.exports = { create, read, update, remove };