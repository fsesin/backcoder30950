const fs = require("fs");

// //fs.writeFileSync('./test-output-sync.txt','esto es una prueba')
// fs.writeFileSync('./test-output-sync.txt','seguimos probando')

// const data = fs.readFileSync('./test-output-sync.txt','utf-8')
// console.log(data)

// fs.appendFileSync('./test-output-sync.txt',' toda la noche')
// const data2 = fs.readFileSync('./test-output-sync.txt','utf-8')
// console.log(data2)

// fs.unlinkSync('./test-output-sync.txt')

// try{
// let horaActual = new Date()
// fs.writeFileSync('./fyh.txt',`${horaActual}`)
// const data = fs.readFileSync('./fyh.txt','utf-8')
// console.log(data)
// }catch(err){
//     console.log(err)
// }

try {
  fs.readFile("./package.json", "utf-8", (err, contenido) => {
    if (err) {
      console.log(err);
    } else {
      const info = {
        contenidoStr: JSON.stringify(contenido),
        contenidoObj: JSON.parse(contenido),
        size: fs.statSync("./package.json").size,
      };
      console.log(info);
      fs.writeFile("./info.txt", `${JSON.stringify(info)}`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Archivo creado correctamente");
        }
      });
    }
  });
} catch (error) {
  console.log(error);
}

try {
  fs.promises
    .readFile("./package.json", "utf-8")
    .then((contenido) => {
      const info = {
        contenidoStr: JSON.stringify(contenido),
        contenidoObj: JSON.parse(contenido),
        size: fs.statSync("./package.json").size,
      };
      console.log(info);
      return fs.promises.writeFile("./info.txt", `${JSON.stringify(info)}`)
        .then(() => {
          console.log("Archivo creado correctamente");
        });
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {}
