function suma(a,b){
    return a+b
}

setTimeout(()=>{
    process.send(suma(5,12))
},5000)


