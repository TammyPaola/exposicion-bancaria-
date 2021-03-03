const express = require ('express')
const rutas = express.Router()

const {renderagregar, rendereditar,lista, datos, rendereditar1} =require('../controladores/index')

const {rendermostrar} =require('../controladores/lista')

rutas.get('/inicio', datos)
rutas.get('/', rendermostrar)
rutas.post('/inicio',rendereditar)
rutas.get('/lista',lista )
rutas.post('/inicio1',rendereditar1)
 
module.exports=rutas