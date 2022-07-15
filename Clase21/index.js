import express from 'express'
import { faker } from '@faker-js/faker/locale/es';
const app = express()

// const nombres = ['Luis', 'Lucia', 'Juan', 'Augusto', 'Ana']
// const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

app.use(express.json())

app.get('/test', (req, res) => {
    const {cant} = req.query
  let array = []
  let max = cant || 10
  for (let i = 1; i <= max; i++) {
    // const numNom = Math.floor(Math.random() * 4)
    // const numApel = Math.floor(Math.random() * 4)
    // const numCol = Math.floor(Math.random() * 4)

    array.push({
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      color: faker.color.human(),
      id:i
    })
  }
  res.json(array)
})

app.get('/',(req,res)=>{
    let array = []
    for(let i=0;i<40;i++){
        const obj = {
            city: faker.address.city(),
            country:faker.address.country(),
            latitude: faker.address.latitude(),
            company:faker.company.companyName()
        }
        array.push(obj)
    }
    res.json(array)
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
