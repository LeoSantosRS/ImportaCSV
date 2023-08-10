const sysbackup = {
    host: '127.0.0.1',
    port: 3050,
    database: 'C:\\BACKUP CLIENTES\\MANUS AUTO PECAS\\novo\\DADOS.FDB',
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: false, // Necessário para que as colunas retornem seus nomes corretos  
    role: null,
    pageSize: 4096
};

module.exports = { sysbackup };

