const mysql = require('mysql2');
const { Client } = require('ssh2');
const sshClient = new Client();
const dbServer = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'hoon3827',
    database: 'peterpet'
}
const tunnelConfig = {
    host: '152.70.94.95',
    port: 22,
    username: 'ubuntu',
    password: 'hoon3827'
}
const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 3307,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};
const connection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
             if (err) reject(err);
             const updatedDbServer = {
                 ...dbServer,
                 stream
            };
            const connection2 =  mysql.createConnection(updatedDbServer);
           connection2.connect((error) => {
            if (error) {
                reject(error);
            }
            resolve(connection2);
            });
        });
    }).connect(tunnelConfig);
});

export {connection}