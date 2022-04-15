const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

const server = require('../server');
const ccTestData = require('./testData/communityCentreTestData.json');

chai.use(chaiHttp);

describe('Server tests - checklistData test suite', () => {
    beforeEach(async () => {

    });

    it('/GET request on the "/" path returns all community centre data', async () => {
        const res = await chai.request(server)
            .get('/')
            .send();

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.eql(ccTestData.length);
    });
});