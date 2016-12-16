global.DATABASE_URL = 'mongodb://emantes:1234@ds023458.mlab.com:23458/logroom'

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var Item = require('../models/item');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Log Room', function() {
	before(function(done) {
        server.runServer(function() {
            Item.create({name: 'Broad beans'}, function() {
                done();
            });
        });
    });

    it('should recieve data back', function(done) {
        chai.request(app)
            .get('/home')
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(200);
                done();
            });
    });
});