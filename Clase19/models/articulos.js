import mongoose from "mongoose";

const articulosSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        default:0
    }
})

export const articulosModel = mongoose.model('Articulos',articulosSchema)

