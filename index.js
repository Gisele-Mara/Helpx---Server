import express from "express"
import cors from "cors"



const app = express()

app.use(express.json())
app.use(cors())

const port = 8033

app.listen(port, ()=> console.log(`Server rodando na porta ${port}`))


export default app