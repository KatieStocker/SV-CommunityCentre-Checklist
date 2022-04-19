require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const communityCentreData = require('./test/testData/communityCentreTestData.json');
const Checklist = require('./models/checklistSchema');

const checklist = require('./routes/home');

const port = process.env.PORT;
const host = process.env.HOST;
const databaseURI = process.env.DB_URI;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

function initial() {
    Checklist.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Checklist(communityCentreData).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added data to the checklist collection");
            });
        }
    });
}

initial();

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