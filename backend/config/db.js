const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process && process.env && process.env.DB_URL;
const connectToMongodb = async()=>{
    mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log(`database is connected to ${res.connection.host}`);
    })
    .catch((error) => {
      console.log("error during database connection: ", error);
    });
}
module.exports = connectToMongodb;