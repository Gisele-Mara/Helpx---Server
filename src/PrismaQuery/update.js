import {Prisma, PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()

export async function update(id, body){
   
    try {
        const{
            nome,
            idade,
            alergia,
            comorbidade,
            tipoSanguineo,
            doadorSangue,
            telefone,
            nomeEmergencia,
            emailEmergencia,
            telefoneEmergencia,
            cep,
            logradouro,
            nCasa,
            email,
            senha,
            doadorOrgao,
        } = body
      
    
        const userUpdate = await prisma.usuario.update({
            where: {
                cod_usuario: id
            },
            data: {
                nome: nome || undefined,
                idade: idade || undefined,
                email: email || undefined,
                senha: senha || undefined,
                tiposanguineo: tipoSanguineo || undefined,
                telefone:{
                    update: {
                    numero: telefone || undefined
                    }
                },
                endereco: {
                    update: {
                        logradouro: logradouro || undefined,
                        numerocasa: nCasa || undefined,
                        cep: cep|| undefined
                    }
                },
                doadororgao: {
                    update: {
                        doadororgao: doadorOrgao || undefined
                    }
                },
                doadorsangue: {
                    update: {
                        doadorsangue: doadorSangue || undefined
                    }
                },
                contatoemergencia: {
                    update: {
                        nomecontatoemergencia: nomeEmergencia || undefined,
                        emailcontatoemergencia: emailEmergencia || undefined,
                        telefoneemergencia: telefoneEmergencia || undefined
                    }
                },
                alergia: {
                        connectOrCreate: {
                        
                            where: {

                                alergias: alergia 
                            },
                            create: {
                                alergias: alergia 
                            }
                        }
                },
                comorbidade: {
                    connectOrCreate: {
                        where: {
                            comorbidade: comorbidade
                        },
                        create: {
                            comorbidade: comorbidade
                        }
                    }
                }
    
            }
    
    
        })
       
        return userUpdate
        
    } catch (error) {
        console.log(error)
        throw new Error ("Internal server error" + error)
    }
}

export default update