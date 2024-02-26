import { PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()


const vetorUser = [
    {
        id: 1,
        nome: "João Silva",
        idade: 30,
        alergia: "Pólen",
        tipoSanguineo: "A+",
        doadorSangue: "Sim",
        telefone: "(11) 1234-5678",
        nomeEmergencia: "Maria Silva",
        telefoneEmergencia: "(11) 8765-4321",
        cep: "12345-678",
        logradouro: "Rua das Flores",
        nCasa: 123,
        email: "joao.com",
        senha: "123",
        doadorOrgao: "Não",
        emailEmergencia: "maria@example.com",
        comorbidade: "Nenhuma"
    },
    {
        id: 2,
        nome: "Andrey",
        idade: 25,
        alergia: "Amendoim",
        tipoSanguineo: "B-",
        doadorSangue: "Não",
        telefone: "(22) 9876-5432",
        nomeEmergencia: "Pedro Santos",
        telefoneEmergencia: "(22) 1234-5678",
        cep: "54321-876",
        logradouro: "Avenida Principal",
        nCasa: 567,
        email: "andrey",
        senha: "123",
        doadorOrgao: "Não",
        emailEmergencia: "pedro@example.com",
        comorbidade: "Asma"
    },
    {
        id: 3,
        nome: "Carlos Pereira",
        idade: 35,
        alergia: "Nenhum",
        tipoSanguineo: "O+",
        doadorSangue: "Sim",
        telefone: "(33) 5555-5555",
        nomeEmergencia: "Ana Pereira",
        telefoneEmergencia: "(33) 9999-9999",
        cep: "98765-432",
        logradouro: "Rua das Árvores",
        nCasa: 789,
        email: "carlos@example.com",
        senha: "senha789",
        doadorOrgao: "Sim",
        emailEmergencia: "ana@example.com",
        comorbidade: "Diabetes"
    },
    {
        id: 4,
        nome: "Ana Santos",
        idade: 28,
        alergia: "Poeira",
        tipoSanguineo: "AB+",
        doadorSangue: "Não",
        telefone: "(44) 7777-7777",
        nomeEmergencia: "José Santos",
        telefoneEmergencia: "(44) 1234-5678",
        cep: "55555-555",
        logradouro: "Avenida Central",
        nCasa: 456,
        email: "ana@example.com",
        senha: "senha101",
        doadorOrgao: "Não",
        emailEmergencia: "jose@example.com",
        comorbidade: "Hipertensão"
    },
    {
        id: 5,
        nome: "Pedro Ferreira",
        idade: 40,
        alergia: "Látex",
        tipoSanguineo: "A-",
        doadorSangue: "Sim",
        telefone: "(55) 9999-8888",
        nomeEmergencia: "Mariana Ferreira",
        telefoneEmergencia: "(55) 8888-9999",
        cep: "66666-666",
        logradouro: "Rua dos Esportes",
        nCasa: 101,
        email: "pedro@example.com",
        senha: "senha202",
        doadorOrgao: "Sim",
        emailEmergencia: "mariana@example.com",
        comorbidade: "Asma"
    },
    {
        id: 6,
        nome: "Laura Mendes",
        idade: 32,
        alergia: "Frutos do Mar",
        tipoSanguineo: "B+",
        doadorSangue: "Não",
        telefone: "(66) 1234-4321",
        nomeEmergencia: "Rodrigo Mendes",
        telefoneEmergencia: "(66) 4321-1234",
        cep: "77777-777",
        logradouro: "Avenida dos Parques",
        nCasa: 303,
        email: "laura@example.com",
        senha: "senha303",
        doadorOrgao: "Não",
        emailEmergencia: "rodrigo@example.com",
        comorbidade: "Nenhuma"
    },
    {
        id: 7,
        nome: "Paulo Oliveira",
        idade: 29,
        alergia: "Nenhum",
        tipoSanguineo: "O-",
        doadorSangue: "Sim",
        telefone: "(77) 5555-8888",
        nomeEmergencia: "Luísa Oliveira",
        telefoneEmergencia: "(77) 8888-5555",
        cep: "88888-888",
        logradouro: "Rua dos Negócios",
        nCasa: 505,
        email: "paulo@example.com",
        senha: "senha404",
        doadorOrgao: "Sim",
        emailEmergencia: "luisa@example.com",
        comorbidade: "Nenhuma"
    },
    {
        id: 8,
        nome: "Isabela Gonçalves",
        idade: 27,
        alergia: "Poluição",
        tipoSanguineo: "AB-",
        doadorSangue: "Não",
        telefone: "(88) 1111-9999",
        nomeEmergencia: "Gustavo Gonçalves",
        telefoneEmergencia: "(88) 9999-1111",
        cep: "99999-999",
        logradouro: "Avenida das Artes",
        nCasa: 707,
        email: "isabela@example.com",
        senha: "senha505",
        doadorOrgao: "Não",
        emailEmergencia: "gustavo@example.com",
        comorbidade: "Nenhuma"
    }
]


async function createMany(body){

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
    
        const user = await prisma.usuario.create({
            data: {
                nome: nome,
                idade: idade,
                email: email,
                senha: senha,
                tiposanguineo: tipoSanguineo,
                telefone:{
                    create: {
                    numero: telefone
                    }
                },
                endereco: {
                    create: {
                        logradouro: logradouro,
                        numerocasa: nCasa,
                        cep: cep
                    }
                },
                doadororgao: {
                    create: {
                        doadororgao: doadorOrgao
                    }
                },
                doadorsangue: {
                    create: {
                        doadorsangue: doadorSangue
                    }
                },
                contatoemergencia: {
                    create: {
                        nomecontatoemergencia: nomeEmergencia,
                        emailcontatoemergencia: emailEmergencia,
                        telefoneemergencia: telefoneEmergencia
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
        console.log("Usuario criado", user)
        
    } catch (error) {
        throw new Error ("Internal server error" + error)
    }

}
for(let user of vetorUser){
    createMany(user)
}
// createMany(...vetorUser)
