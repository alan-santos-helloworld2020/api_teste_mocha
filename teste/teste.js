let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {

    describe('GET /', () => {
        it('Espero um array de usuarios', (done) => {
            chai.request(server)
                .get('/')
                .end((req, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                })
        })
    })
    //************************************************* */
    describe('POST /',() => {
        var user = {
            username: "fulano de tal",
            password: 123
        }
        it('Espero um objeto',(done) => {
            chai.request(server)
                .post('/')
                .send(user)
                .end((req, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eql(true);
                    done();
                })

        })
    })
    //************************************************* */
    describe('GET /:index',() => {
        it('Espero um objeto',(done) => {
            chai.request(server)
                .get('/'+0)
                .end((req, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('username');
                    res.body.should.have.property('password');
                    done();
                })
        })
    })
    //************************************************* */
    describe('PUT /:index', () => {
        var user = {
            username: "juca",
            password: 321
        }
        it('Espero um objeto', (done) => {
            chai.request(server)
                .put('/'+0)
                .send(user)
                .end((req, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eql(true);
                    done();
                })

        })
    })
    //************************************************* */
    describe('DELETE /:index', () => {
        it('Espero um objeto', (done) => {
            chai.request(server)
                .delete('/' + 0)
                .end((req, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eql(true);
                    done();
                })
        })
    })

});