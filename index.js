import express from "express"

const app = express()

app.use(express.json())

const port = 8040

app.listen(port, ()=> console.log("Server rodando na porta" + port))


export default app