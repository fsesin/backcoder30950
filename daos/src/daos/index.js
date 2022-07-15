import dotenv from 'dotenv'
dotenv.config()


let usersDao
switch (process.env.DB_NAME) {
  case 'mongoDB':
    import('./users/MongoUsers.js').then(({ MongoUsers }) => {
      usersDao =  new MongoUsers()

      //})
    })
  break
  default:
    console.log("Se fue a default")
    break
}
export { usersDao }

// export let usersDao = async function(){
//   switch (process.env.DB_NAME) {
//     case 'mongoDB':
//       //const {default:MongoUsers} = await import('./users/MongoUsers.js')

//       //return new MongoUsers()
//    default:
//       const {MongoUsers} = await import('./users/MongoUsers.js')
//       await import('./users/MongoUsers.js')
//       // .then(({MongoUsers})=>{

//         return new MongoUsers()

//       //})

//   }
// }
