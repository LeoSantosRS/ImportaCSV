import db from './firebird/fireBirdConnection';
async function getAgenda(){
    const conn = await db.connect();
    const sql = `SELECT * FROM AGENDABACKUP;`;
    
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

module.exports = { getAgenda };