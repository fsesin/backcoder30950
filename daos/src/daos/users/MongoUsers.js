import MongoClass from "../../contenedores/MongoClass.js";

export class MongoUsers extends MongoClass {
    constructor(){
        super('usuarios',{
            nombre:{type:String,required:true},
            apellido:{type:String},
            dni:{type:String}
        })
    }
}
