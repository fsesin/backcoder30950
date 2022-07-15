import {options} from './configDB.js'
import knex from 'knex'



(async()=>{
try {
    const productos = [
        {
            nombre:'TV',
            codigo:'abcd1',
            precio:10.5,
            stock:25
        },
        {
            nombre:'Celular',
            codigo:'abcd2',
            precio:18.5,
            stock:50
        },
        {
            nombre:'Computador',
            codigo:'abcd3',
            precio:250.8,
            stock:20
        },
        {
            nombre:'Play',
            codigo:'abcd4',
            precio:100.2,
            stock:15
        },
        {
            nombre:'Parlante',
            codigo:'abcd5',
            precio:35.5,
            stock:25
        },
    ]

   await knex(options).schema.dropTableIfExists('articulos')
   await knex(options).schema.createTable('articulos',table=>{
        table.increments('id').primary().unique()
        table.varchar('nombre',15).notNullable()
        table.varchar('codigo',10).notNullable()
        table.float('precio')
        table.integer('stock')
    })
   await knex(options)('articulos').insert(productos)
   const articulosDB = await knex(options).from('articulos').select('*')
    console.log(articulosDB)
    await knex(options).from('articulos').where('id','3').del()
    await knex(options).from('articulos').where('id','2').update({stock:0})
} catch (error) {
    throw error
}
})()








// knex(options).schema.createTable('administradores',table=>{
//     table.increments('id').primary().unique()
//     table.string('name').notNullable()
//     table.string('lastName').notNullable()
//     table.integer('edad').notNullable()
// })
// .then(()=>{
//     console.log('table created')

// })
// .catch((err)=>{
//     throw err
// })

// knex(options)('administradores').insert(usuarios)
// .then(()=>{
//     console.log('usuarios agregados con exito')
// })
// .catch((err)=>{
//         throw err
// })

