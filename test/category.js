const chai = require('chai');
const server = require('../server.js');
const chaiHttp = require('chai-http');
const should = require('should');
chai.use(chaiHttp);

describe('Category api', () => {
     
    //get all categories
    describe('Test GET route /api/category',()=>{
        it('It should return all categories',(done)=>{
            chai.request(server)
            .get('/api/category')
            .end((err,res)=>{
                res.status.should.be.equal(200);
                res.body.should.be.a.Object();
            done();
            });
        });
    
    });
     //POST a category
     describe('Test POST route /api/category',()=>{
        it('It should post a category',(done)=>{
            let cat={
                latitude:4,
                longitude:5,
                category:"cate",
                counter:340
              }
            chai.request(server)
            .post('/api/category')
            .send(cat)
            .end((err,res)=>{
                res.status.should.be.equal(200);
                res.body.should.be.a.Object();
            done();
            });
        });
    
    });
     //DELETE a category
     describe('Test DELETE route /api/category/:id',()=>{
         let cat={
            id:455,
            latitude:4,
            longitude:5,
            category:"catt",
            counter:340
          }
         before(()=>{  
            chai.request(server)
            .post('/api/category')
            .send(cat)
            .end((err,res)=>{
               if(err){
                   console.log(err);
               }
            })
         })
        it('It should DELETE a category',(done)=>{
            chai.request(server)
            .delete('/api/category/'+cat.id)
            .end((err,res)=>{
                res.status.should.be.equal(200);
                res.body.should.be.a.Object();
            })
            done();
        });
    
    });

    //Update a category
    describe('Test update route /api/category/:id',()=>{
       
       it('It should Update a category',(done)=>{
           let data={
               counter:600
           }
           chai.request(server)
           .patch('/api/category/'+30002)
           .send(data)
           .end((err,res)=>{
               if(err){
                   console.log("Err "+err);
               }
               res.status.should.be.equal(200);
               res.body.should.be.a.Object();
           })
           done();
       });

   
   });
});
