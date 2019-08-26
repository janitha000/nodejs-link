const request = require('supertest');
const server = require('../server');
const expect = require('chai').expect;

describe('#Testcontroller testing', function()  {
    it('respond with Hello from Janitha', function(done)  {
        request(server).get('/test/')    
            .end((err, res) => {
                expect(res.status).to.equal(200);                
            })
            done();
    })

    it('respond with correct compute', (done)=> {
        request(server).get('/test/compute')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.equal(499500);
                done();
            })
    })
})


