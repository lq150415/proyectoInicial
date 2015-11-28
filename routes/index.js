var express = require('express');
var router = express.Router();
var contacto = require('../controllers/contacto')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Avances en Computacion',nombre: 'Luis'});
});
router.get('/regcontacto', contacto.registro);
router.get('/respuesta', contacto.respuesta);
module.exports = router;
