import dotenv from 'dotenv'
dotenv.config()

let usersDao 

    switch (process.env.DB_NAME) {
        case 'mongoDB':
        import('./users/MongoDBUsers.js').then(({MongoDBUsers})=>{
            usersDao = new MongoDBUsers()
        })
        break
        default:
            console.log('Esta en default')
            break;
    }


export {usersDao}
