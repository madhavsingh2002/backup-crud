const express = require('express');
const app = express()
const cors  =require('cors')
require('dotenv').config();

const connectToMongodb = require('./config/db.js');

// config the Database.
connectToMongodb()

// Middleware...
app.use(cors());
app.use(express.json());

// User-Auth-Routes.
app.use(require('./routes/auth'))

// Employee-Routes
app.use(require('./routes/employee'))
// server
app.listen(8000,()=>{
    console.log('server is running on the port 8000');
})
