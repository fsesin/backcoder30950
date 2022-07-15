import express from 'express'
//import usersDao from './daos/users/MongoUsers.js'
import { usersDao as api } from './daos/index.js'
const app = express()
app.use(express.json())
const PORT = 8080
//const api = new usersDao()
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})

app.get('/users', async (req, res) => {
  try {
    // async
    // const api = await usersDao()
    const allUsers = await api.getAll()
    res.json(allUsers)
  } catch (error) {
    console.log(error)
  }
})

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await api.getById(id)
    res.json(user)
  } catch (error) {
    console.log(error)
  }
})

app.post('/users', async (req, res) => {
  try {
    const newUser = await api.createUser(req.body)
    res.json(newUser)
  } catch (error) {
    console.log(error)
  }
})

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateUser = await api.updateUser(id, req.body)
    res.json(updateUser)
  } catch (error) {
    console.log(error)
  }
})

app.delete('/users/:id', async (req, res) => {
try {
    const { id } = req.params
    const deleteUser = await api.deleteById(id)
    res.json(deleteUser)
} catch (error) {
    console.log(error)
}


})
