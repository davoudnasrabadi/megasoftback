const {prisma} = require('./database.ts');
const resolvers = {
    Category: {
        id: (parent, args, context, info) => parent.id,
        latitude: (parent) => parent.latitude,
        longitude: (parent) => parent.longitude,
        category: (parent) => parent.category,
        counter: (parent) => parent.counter,
      },
      Query: {
        allCategories: (parent, args) => {
          return prisma.category.findMany()
        },
        category: (parent, args) => {
          return prisma.category.findUnique({
            where: { id: Number(args.id) },
          });
        },
      },
      Mutation:{
        increaseCounter:(parent, args)=>{  
            return prisma.category.update({
                where:{
                    id: Number(args.id)
                },
                data:{
                   counter:{
                       increment:1
                   }
                }
            })
        },
        decreaseCounter:(parent, args)=>{  
            return prisma.category.update({
                where:{
                    id: Number(args.id)
                },
                data:{
                   counter:{
                       decrement:1
                   }
                }
            })
        },
        addCategory:(parent, args)=>{  
           return prisma.category.create({
               data:{
                   latitude: args.latitude,
                   longitude: args.longitude,
                   category: args.category,
                   counter: args.counter
               }
           })
        },
        deleteCategory:(parent, args)=>{  
            return prisma.category.delete({
                where:{
                   id: Number(args.id)
                }
            })
        },
      },
      
}

module.exports = {
    resolvers,
}