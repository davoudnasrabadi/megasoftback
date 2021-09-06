const http =require('http');
const PORT = process.env.PORT || 8080;


const server = http.createServer(async (req , res)=>{
     //@route /api/category
     //@method @GET
     //@desc GET all categories
     
     if(req.url === "/api/category" && req.method === "GET"){

     }
      //@route /api/category/:id 
      //@method GET
     //@desc GET a category
     else if(req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "GET"){

     }

     //@route /api/category
     //@method POST
     //@desc POST a category
     else if(req.url === "/api/category" && req.method === "POST"){

     }
     

     //@route /api/category/:id 
     //@method DELETE
     //DELETE a category
     else if(req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "DELETE"){
             
     }
     
     //@route /api/category/:id 
     //@method PATCH
     //Uopdate a category
     else if(req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "PATCH"){

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