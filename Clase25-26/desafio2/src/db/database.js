import mongoose from "mongoose";

mongoose.connect(
    'mongodb+srv://coderhouse:coderhouse@cluster0.9hfsr3u.mongodb.net/passportMongoAtlas?retryWrites=true&w=majority'
)
.then(response=>console.log('Conectado a la base de datos'))
.catch(err=>console.log(err))