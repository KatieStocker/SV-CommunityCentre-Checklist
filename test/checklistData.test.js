const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

const server = require('../server');
const ccTestData = require('./testData/communityCentreTestData.json');
const Checklist = require('../models/checklistSchema');

chai.use(chaiHttp);

describe('Server tests - checklistData test suite', () => {
    beforeEach(async () => {
        await Checklist.deleteMany()
            .then(() => console.log('Database cleared'))
            .catch(error => {
                console.log(`There was an error clearing the database: ${error}`);
                throw new Error();
            });
        await Checklist.insertMany(ccTestData)
            .then(() => console.log('Documents were inserted into the database'))
            .catch(error => {
                console.log(`There was an error inserting the data: ${error}`);
                throw new Error();
            });
    });

    it('/GET request on the "/" path returns all community centre data', async () => {
        const res = await chai.request(server)
            .get('/')
            .send();

        // console.log("res.body: " + JSON.stringify(res.body[0].CommunityCentre));

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0].CommunityCentre.length).to.be.eql(ccTestData.CommunityCentre.length);
    });
});