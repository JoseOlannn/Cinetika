require('dotenv').config()

const express = require('express')
const conectarDB = require('./config/database')
const userRoutes = require('./routes/userRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/usuarios', userRoutes)

const iniciarServidor = async () => {
    await conectarDB()
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`)
    })
}

iniciarServidor()