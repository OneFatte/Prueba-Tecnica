const client = require('./conexion.js');

module.exports = {
    getProducts: (req, res) => {
        client.query(`Select * from products`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
        client.end();
    },
    createProducts: (req, res) => { },
    putProducts: (req, res) => { },
    udapteProducts: (req, res) => { },
    deleteProducts: (req, res) => { },
};
client.connect();