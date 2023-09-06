// Import configuration 
const config = require('./config.json'); 
// Express 
const express = require('express'); 
// Serve-Static 
const serveStatic = require('serve-static'); 
// Body-Parser 
const bodyParser = require('body-parser'); 
// Multer 
// const multer = require('multer'); 
// PostgreSQL 
const massive = require("massive"); 

let massiveInstance = massive.connectSync({connectionString : connectionString});
let db;
console.log(db);

