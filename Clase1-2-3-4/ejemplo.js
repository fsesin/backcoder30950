const fs = require("fs")

class Ejemplo {
    constructor(file){
        this.file=file
    }

async leer(){
    try {
        let informacion = await fs.promises.readFile(this.file)
        let informacionUtil = JSON.parse(informacion)
        console.log(informacionUtil)
    } catch (error) {
        console.log('error',error)
    }
}

}

let contenedor = new Ejemplo('./archivos.txt')
contenedor.leer().then(()=>console.log("hola"))

