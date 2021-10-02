const mysql = require("mysql2");
var tunnel = require("tunnel-ssh");
const fs = require("fs");
const { Client } = require("ssh2");
const sshClient = new Client();
const path = require("path");

const dbServer = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "hoon3827",
  database: "peterpet",
};

const tunnelConfig = {
  host: "152.70.94.95",
  port: 22,
  username: "ubuntu",
  //password: 'hoon3827',
  privateKey: fs.readFileSync(
    path.join(__dirname, "../wallet/oracle_instance.ppk")
  ),
  passphrase: "hoon3827",
};

const forwardConfig = {
  srcHost: "127.0.0.1", // any valid address
  srcPort: 3306, // any valid port
  dstHost: dbServer.host, // destination database
  dstPort: dbServer.port, // destination port
};

var connection = "";
const SSHConnection = new Promise((resolve, reject) => {
  sshClient
    .on("ready", () => {
      sshClient.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
          if (err) reject(err);

          // create a new DB server object including stream
          const updatedDbServer = {
            ...dbServer,
            stream,
          };
          // connect to mysql
          connection = mysql.createConnection(updatedDbServer);
          // check for successful connection
          //  resolve or reject the Promise accordingly
          connection.connect((error) => {
            if (error) {
              console.log("실패");
              reject(error);
            }
            console.log("성공");
            resolve(connection);
          });
        }
      );
    })
    .connect(tunnelConfig);
});

export { connection };
