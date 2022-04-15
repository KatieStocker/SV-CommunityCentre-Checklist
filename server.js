require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const checklist = require('./routes/home');

const port = process.env.PORT;
const host = process.env.HOST;
const databaseURI = process.env.DB_URI;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const main = async () => {
    console.log(`Connecting to: ${databaseURI}`);
    await mongoose.connect(databaseURI);
}

main().then(console.log('Connected to database')).catch(error => console.log(error));

app.use('/', checklist);

const server = app.listen(port, host, () => {
    const serverHost = server.address().address;
    const serverPort = server.address().port;
    console.log(`Server is listening on http://${serverHost}:${serverPort}`);
});

module.exports = server;