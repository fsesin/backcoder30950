const express = require("express");
const app = express();
const morgan = require("morgan");
const multer = require('multer')
const routesDesafio = require("./clase7/routesDesafio.js");
const routesMascotas = require("./clase8/routesMascotas.js")
const routesPersonas = require("./clase8/routesPersonas.js")
const fs = require('fs')
const handlebars = require("express-handlebars")
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"))
app.use('/api',routesDesafio)
//app.use(verificarEdad)
app.use('/mascotas',routesMascotas)
// app.use('/personas',routesPersonas)
app.set('views','./views')
app.set('view engine','ejs')

const personas = []

app.get('/',(req,res)=>{
  res.render('raiz',{personas})
})

app.post('/personas',(req,res)=>{
  const persona = req.body
  personas.push(persona)
  res.redirect('/')
})

// app.get('/datos',(req,res)=>{
//   const {min,nivel,max,titulo} = req.query
//   res.render('meter.pug',{min,nivel,max,titulo})
// })

// app.get('/',(req,res)=>{
//   res.render('index',{
//     title:"Ejemplo EJS"
//   })
// })












const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+"/public/uploads")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+"-"+file.originalname)
  }
})

app.use(multer({
  storage
}).single("myFile"))



//ruta ejemplo multer
app.post('/uploadfile',(req,res)=>{
  console.log(req.file)
  res.json({mensaje:"Archivo subido exitosamente"})
})

//empezando servidor
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
