import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const usuarioSchema = new mongoose.Schema({
    nombre:String,
    contrasena:String,
    correo:String
})
usuarioSchema.methods.encriptar= (contrasena)=>{

usuarioSchema.methods.comparar = (contrasena)=>{
    return bcrypt.compareSync()
}
 }
export default mongoose.model('usuarios',usuarioSchema)