import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  session({
    secret: 'key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl:'mongodb+srv://coderhouse:coderhouse@cluster0.9hfsr3u.mongodb.net/?retryWrites=true&w=majority'}),
    cookie: { maxAge: 60000 },
  })
)

const getNombreSession = (req) =>
  req.session.nombre ? req.session.nombre : 'invitado'

app.get('/', (req, res) => {
  if (req.session.contador) {
    req.session.contador++
    res.send(
      `${getNombreSession(req)} visitaste la página ${
        req.session.contador
      } veces.`
    )
  } else {
    req.session.nombre = req.query.nombre
    req.session.contador = 1
    res.send(`Te damos la bienvenida ${getNombreSession(req)}`)
  }
})

app.get('/olvidar', (req, res) => {
  const nombre = getNombreSession(req)
  req.session.destroy((err) => {
    if (err) {
      res.json({ error: 'olvidar', body: err })
    } else {
      res.send(`Hasta luego ${nombre}`)
    }
  })
})

const PORT = 8081
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => console.log(`Error en servidor: ${error}`))
