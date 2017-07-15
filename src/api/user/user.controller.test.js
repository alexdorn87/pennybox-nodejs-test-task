var should = require('should');
var request = require('supertest');
var app = require('../../../app.js');

describe('GET /users', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('amount');
        res.body.should.have.property('total');
        //res.body.amount.should.be('10');
        done();
      });
  });
});

