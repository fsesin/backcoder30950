import mongoose from 'mongoose'
import {articulosModel} from './models/articulos.js'


async function bddMong() {
  try {

    //Conexion a la base de datos 
    mongoose.connect('mongodb://localhost:27017/empresaNode', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    mongoose.connection.on('open', () => {
      console.log('Base de datos conectada')
    })

    // const primerArticulo = {
    //     nombre:'Iphone',
    //     precio:505.5,
    //     stock:40
    // }

    //Guardando informacion en la BD
    // const modelo = new articulosModel(primerArticulo)
    // await modelo.save()

    // Leer informacion de la BD
    let articulos = await articulosModel.find({}).sort({precio:-1}).limit(1).skip(2)
    console.log(articulos)

    // Actualizar informacion en la BD
    // let articulo = await articulosModel.updateOne({nombre:'Computador'},{$set:{stock:50}})
    // console.log(articulo)

    // Borrar informacion de la BD
    // let articuloEliminado = await articulosModel.deleteOne({nombre:'Computador'})
    // console.log(articuloEliminado)

  } catch (error) {
    console.log(error)
  }
}

bddMong()
