const client = require('./conexion.js');
const express = require('express');
const app = express();
const port = 3004;


const cors = require('cors');

app.use(cors());

app.listen(port, () => {
    console.log(`Aplicacion d ejemplo en el puerto:  ${port}`);
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/products', (req, res) => {

    client.connect((err) => {
        client.query('SELECT * FROM products', (err, dbres) => {
            console.log(err ? err.stack : res.rows)
            const db = dbres.rows;
            res.send(db);
        });
    })

});

app.get('/products/:id', (req, res) => {
    client.connect((err) => {
        client.query(`SELECT * FROM products WHERE product_id=${req.params.id}`, (err, res) => {
            console.log(err ? err.stack : res.rows) // Hello World!
            // client.end();
        })
    })
});

app.post('/products', (req, res) => {
    const newProduct = req.body;

    let insertQuery = `insert into products(product_code,product_name,product_price,product_image,product_active) 
                       values(${newProduct.product_code}, '${newProduct.product_name}', '${newProduct.product_price}', '${newProduct.product_image}','${newProduct.product_active}')`;
    client.connect((err) => {
        client.query(insertQuery, (err, res) => {
            console.log(err ? err.stack : res.send('Insertion was successful')) // Push
            // client.end();
        })
    })
});

app.put('/products/:id', (req, res) => {
    let updateProduct = req.body;
    let updateQuery = `UPDATE products
                       SET product_code = '${updateProduct.product_code}',
                       product_name = '${updateProduct.product_name}',
                       product_price = '${updateProduct.product_price}',
                       product_image = ${updateProduct.product_image},
                       product_active = ${updateProduct.product_active} 
                       WHERE product_id =${updateProduct.product_id}`;
    client.connect((err) => {
        client.query(updateQuery, (err, res) => {
            console.log(err ? err.stack : res.send('Update was successful')) // PUT
            // client.end();
        })
    })
});

app.delete('/products/:id', (req, res) => {
    let insertQuery = `DELETE FROM products WHERE product_id=${req.params.id}`

    client.connect((err) => {
        client.query(insertQuery, (err, res) => {
            console.log(err ? err.stack : res.send('Deletion was successful')) // Delete
            // client.end();
        })
    })

})
client.connect();

module.exports = app;