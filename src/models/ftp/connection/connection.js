const ftp = require('basic-ftp');
const config = require('../config');

async function connectFtp() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      secure: config.secure,
    });
    console.log('sucess connection');
    return client;
  } catch (err) {
    console.log(err);
    client.close();
    return null;
  }
}

module.exports = {
  connectFtp: connectFtp,
};

