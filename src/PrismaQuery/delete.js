import { PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()

export async function deleteUser(id){
    const id = id

    const deletedUser = await prisma.usuario.delete({
        where: {
            id: id
        }
    })
    return deletedUser
}