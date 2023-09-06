const client = require('../conexion.js');

module.exports = {
    getUsers: (req, res) => {
        client.connect((err) => {
            client.query('SELECT * FROM products', (err, res) => {
              console.log(err ? err.stack : res.rows) // Hello World!
              client.end()
            })
         })
    },
    getOneUsers: (req, res) => { },
    createUser: (req, res) => { },
    putUser: (req, res) => { },
    udapteUser: (req, res) => { },
    deleteUser: (req, res) => { },
};

client.connect();