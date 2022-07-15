"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//const express = require("express")
// import express from "express"
// const app = express()
var numAlCuadrado = function numAlCuadrado(array) {
  array.forEach(function (element) {
    return element * 2;
  });
}; // app.use('/',(req,res)=>{
//     res.json({"respuesta":numAlCuadrado([1,2,3,4])})
// })


var obtenerNumero = function obtenerNumero() {
  return Math.floor(Math.random() * 255);
};

var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, [{
    key: "get",
    value: function get() {
      var colorAleatorio = "rgb(".concat(obtenerNumero(), ",").concat(obtenerNumero(), ",").concat(obtenerNumero(), ")");
    }
  }]);

  return Color;
}();

var nuevoColor = new Color();
console.log(nuevoColor);
