const http =require('http');
const PORT = process.env.PORT || 8080;

const {getAll,getWithId,deleteWithId,UpdateWithId,create} = require('./Controllers.js');
const {getReqData} = require('./utils.js');

const server = http.createServer(async (req , res)=>{
     //@route /api/category
     //@method @GET
     //@desc GET all categories
     
     if(req.url === "/api/category" && req.method === "GET"){
         await getAll(res);
          
     }
      //@route /api/category/:id 
      //@method GET
     //@desc GET a category
     else if(req.url.match(/\/api\/category\/([0-9]+)/) && req.method === "GET"){
         // get id from url
         const id = req.url.split("/")[3];
         await getWithId(id,res);
     }

     //@route /api/category
     //@method POST
     //@desc POST a category
     else if(req.url === "/api/category" && req.method === "POST"){
           
        let category_data = await getReqData(req);
        await create(JSON.parse(category_data),res);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(category_data));
     }
     

     //@route /api/category/:id 
     //@method DELETE
     //DELETE a category
     else if(req.url.match(/\/api\/category\/([0-9]+)/) && req.method === "DELETE"){
             
     }
     
     //@route /api/category/:id 
     //@method PATCH
     //Uopdate a category
     else if(req.url.match(/\/api\/category\/([0-9]+)/) && req.method === "PATCH"){

     }


     //No route 
     else{
         res.writeHead(404,{'Content-Type':'application/json'});
         res.end(JSON.stringify({message:'Bad request, route not found'}));
     }
})


server.listen(PORT , ()=>{
    console.log(`Server started on port:${PORT}`);

})