import app from "./index.js"
import { PrismaClient} from "@prisma/client";
import { findAllUsers, findUser, findUserById } from "./src/PrismaQuery/find.js";
import { createUser } from "./src/PrismaQuery/create.js";
import {update} from "./src/PrismaQuery/update.js"

const prisma = new PrismaClient()


app.get('/',  (req,res) =>{
    try {
       
      
        res.status(200).json({message: "Oi, cara de boi"})
    } catch (err) {
        return res.status(500).send(err.message)
    }
    
})

app.get('/users/', async (req,res) =>{
    try {
       
        const users = await findAllUsers()
        res.status(200).json(users)
    } catch (err) {
        return res.status(500).send(err.message)
    }
    
})


app.get('/users/:id', async (req,res) =>{
    try {
        const { id } = req.params.id

        const user = await findUser(id)

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
})
app.post('/users/login', async (req,res) =>{
    try {
        const { email, senha } = req.body

        if(email.includes('admin') && (senha == 123)){
            return res.status(200).json({flagAdm: true})
        }
        const user = await findUser(email)

      
        if(!email || !senha){
            return res.status(422).json({message: "Prencha todos os campos!"})
        }

        if(!user.email){
            return res.status(404).json({message: "Email não registrado"})
        }

        if(user.senha !== senha){
            return res.status(403).json({message: "Senha inválida"})
        }

        if(!user.nome){

            res.status(200).json({user, flagAdm: "newUser"})
        }

        res.status(200).json({user, flagAdm: false})

    } catch (error) {

        console.log(error.message)
        return res.status(500).send("Internal server error")
    }
    
})

app.get('/users/logged/:id', async (req,res) =>{
    try {
        const id = req.params.id

        const user = await findUserById(id)
        console.log("User logged result", user)
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
})
app.post("/cadastro", async (req,res) =>{
   
    try {
        const { email, senha } = req.body

        const checkEmail = await findUser(email)

        if(checkEmail){
            return res.status(409).json({message: "Email já cadastrado. Tente outro."})
        }

        const user = await createUser(req.body)

        return res.status(200).json(user)
    } catch (error) {
       console.log(error.message)
        return res.status(500).send("Internal server error")
    }
    
})




app.put("/users/update/:id", async (req,res) =>{
   
    try {
        const  id  = req.params.id
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
        } = req.body
       
        const user = await update(id, req.body)
        console.log("oii", user)
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }

})



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