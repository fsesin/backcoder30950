export class ApiClass {
  constructor() {
    this.array = []
  }

  guardar(obj) {
    let id = this.array.length === 0 ? 1 : this.array[this.array.length-1].id+1
    const nuevoObj = {...obj,id}
    this.array.push(nuevoObj)
    return nuevoObj
  }

  mostrarTodos(){
    return this.array
  }
}
