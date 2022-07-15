import express from 'express'
import usuariosRoutes from './routes/usuarios.js'
const app = express()




app.use(express.json())
app.use('/api/usuarios',usuariosRoutes)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})