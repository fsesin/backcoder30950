import mongoose from 'mongoose'
import config from '../config.js'

mongoose.connect(config.mongo.URL, config.mongo.options)

class MongoClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema)
  }

  async getAll() {
    try {
      const allUsers = await this.collection.find({}, { __v: 0 })
      return allUsers
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async getById(id) {
    try {
      const user = await this.collection.find({ _id: id }, { __v: 0 })
      return user
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async createUser(userInfo) {
    try {
      const newUser = await this.collection.create(userInfo)
      return newUser
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async updateUser(id, userInfo) {
    try {
      const updateUser = await this.collection.updateOne(
        { _id: id },
        { $set: userInfo }
      )
      return updateUser
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async deleteById(id){
    try {
      const deleteUser = await this.collection.deleteOne({_id:id})
      return deleteUser
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }
}

export default MongoClass
