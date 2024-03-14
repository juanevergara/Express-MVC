let express = require('express');
let router = express.Router();
let autos = require('../db/index');
let funciones = require('../controllers/productsController');

router.get('/', funciones.lista.index);

router.get('/brand/:idMarca', funciones.lista.marca );

router.get('/color/:idColor', funciones.lista.color);

router.get('/anio/:idAnio', funciones.lista.anio)







module.exports = router;