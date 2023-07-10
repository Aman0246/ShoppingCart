const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const router = require('./src/routes/routes')
const multer = require('multer');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any());

mongoose.connect(process.env.MONGOCONNECT)
.then(() => {
    console.log('DB connected....')
})
.catch((err) => {
    console.log(err)
})

app.use('/', router)
app.listen(process.env.PORT,() => {
    console.log(`Express app listening on port ${process.env.PORT}...`)
})