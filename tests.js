var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


/* 
testing https://jsonplaceholder.typicode.com
JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.
You can refer to the website for the API documentation and examples.
*/

// test example for GET	/posts
testCase('/GET posts', function () {
    it('it should GET all the posts', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
    it('it should GET the posts/1', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('id');
                res.body.should.have.property('title');
                res.body.should.have.property('userId');
                done();
            });
    });
    it('it should GET the posts/35', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/35')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('id');
                res.body.should.have.property('title');
                res.body.should.have.property('userId');
                done();
            });
    });
    it('it should GET the /posts?userId=1', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('userId');
                res.body[1].should.have.property('id');
                res.body[2].should.have.property('title');
                res.body[0].userId.should.equal(1);
                done();
            });
    });
    it('it should GET the posts/101', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/101')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});