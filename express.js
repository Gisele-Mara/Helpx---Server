import app from ".";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()


app.get('/users/', async (req,res) =>{
    try {
        const users = await prisma.usuario.findMany()
        res.status(200).json(users)
    } catch (err) {
        return res.status(500).send(err.message)
    }
    
})


app.get('/users/:id', async (req,res) =>{
    try {
        const { id } = req.params.id

        const user = await prisma.usuario.findUnique({where: { cod_usuario: (id)}})
        // const user = await prisma.cliente.findMany()
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
})


//Criando registro (novo cliente)
app.post('/users/sign', async (req,res) =>{
    try{
        // const { user } = await prisma.cliente.create(req.body)
        // res.status(201).json(user);
    const { nomeusuario, tiposanguineo, idadeusuairo,emailusuario,senhausuario
        ,alergias,logradourousuario,numerocasausuario,ncepusuario,
        nomecontatoemergencia,emailcontatoemergencia,telefoneemergencia,
        doadorsangue,doadororgao,comorbidade,telefoneusuario } = req.body

      const result = await prisma.usuario.create({
//       data: {
//         nomeusuario,
//         tiposanguineo,
//         idadeusuairo,
//         emailusuario,
//         senhausuario,

//         possuialergias:{
//             create:{
//                 alergias: {
//                     connect: {
//                         alergias
//                             }
             
//                         }
//                 }
//          },
//         enderecousuario:{
//             create:{
//                 logradourousuario,
//                 numerocasausuario,
//                 ncepusuario

//             }
//         },
//         contatoemergencia:{
//             create:{
//                 nomecontatoemergencia,
//                 emailcontatoemergencia   ,         
//                 telefoneemergencia
//             }
//         },
//         doadorsangue: {
//             create: {
//              doadorsangue
// }
//         },
//         doadororgao: {
//             create: {
//                 doadororgao
//             }
//         },
//         comorbidade:{
//             create:{
//                 comorbidade
//             }
//         },
//         telusuario: {
//             create: {
//                 telefoneusuario
//             }
//         }

    
//     },
        data:req.body
      
    })
    // res.json(result)
    res.status(201).json(result);

    } catch (error){
        res.status(500).send(error.message)
    }

})

//Atualização parcial, ainda não consegui
app.put('users/:id', async (req,res) =>{
 try {
    const {id} = req.params
    const { cpf } = req.body

    const user = await prisma.usuario.update({
        where: {id : (id)},
        data: {    
            cpf
        }
    })

    res.status(200).json(user);
 } catch (error) {
    res.status(500).send(error.message)
 }

})
// Deletar usuario
app.delete(`/users/delete/:id`, async (req, res) => {
    try{

    
    const { id } = req.params
    const result = await prisma.usuario.delete({
      where: {
        cod_usuario: (id),
      },
    
    })
    res.status(200).json(result);
}catch (error) {
    res.status(500).send(error.message)
 }
   
  })

