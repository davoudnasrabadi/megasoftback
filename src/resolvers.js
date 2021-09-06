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
          return categories.find({})
        },
        category: (parent, args) => {
          return categories.find((category) => category.id === Number(args.id))
        },
      },
      Mutation:{
        increaseCounter:(parent, args)=>{  
            const categoryToInc = categories.find((category) => category.id === Number(args.id))
            categoryToInc.counter = categoryToInc.counter +1
            return categoryToInc
        },
        decreaseCounter:(parent, args)=>{  
            const categoryToInc = categories.find((category) => category.id === Number(args.id))
            categoryToInc.counter = categoryToInc.counter -1
            return categoryToInc
        },
      },
}

module.exports = {
    resolvers,
}