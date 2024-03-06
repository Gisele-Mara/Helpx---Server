import { PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()

export async function findUser(body){
  
    let email = body

    const user = await prisma.usuario.findUnique({
        where: {
            email: email
        },
        include: {
            alergia: true,
            comorbidade: true,
            contatoemergencia: true,
            doadororgao: true,
            doadorsangue: true,
            endereco: true,
            telefone: true,
            tratamento: true 
        }
    })
    console.log("user prisma", user)
    
    return user
}

export const findAllUsers = async()=>{

    const users = await prisma.usuario.findMany()
    return users
}


