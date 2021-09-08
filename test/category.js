const chai = require('chai');
const should = require('should');
const url = "http://localhost:8080/";
const request = require('supertest')(url);

describe('Category api', () => {
     
    //get all categories
    describe('Test GET route',()=>{
        it('It should return all categories',(done)=>{
            request.get('localhost:8080')
            .send({
                query:`
                query{
                allCategories {
                    id,
                    latitude,
                    longitude,
                    category,
                    counter
                  }
                }
                `
            })
            .end((err,res)=>{
                if(err) done(err);
                res.status.should.be.equal(200);
                res.body.should.be.a.Object();
            })
        });
    
    });
     
});
