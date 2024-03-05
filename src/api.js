import express from "express"
import cors from "cors"

const serverless = require ("serverless-http")



export const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors())

router.get('/',  () =>{
    try {
       
      
        res.status(200).json({message: "Oi, cara de boi"})
    } catch (err) {
        return res.status(500).send(err.message)
    }
    
})
app.use("/netlify/functions/api", router)


// const port = 8033

// app.listen(port, ()=> console.log(`Server rodando na porta ${port}`))





module.exports.handler = serverless(app)