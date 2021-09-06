import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
export async function seed() {

    const data = await prisma.category.createMany({
        data:[
            {latitude:3 , longitude:1 , category:'77',counter:250},
            {latitude:3 , longitude:1 , category:'76',counter:160},
            {latitude:3 , longitude:1 , category:'75',counter:200}
        ]
    });

}

console.log('Intial seed inserted');

seed()
.catch(e=>{
    console.error(e);
    process.exit(1)
})
