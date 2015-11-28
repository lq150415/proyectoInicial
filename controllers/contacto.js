exports.registro = function(req, res){
res.render('registro',{Titulo:'Registro de contacto'});
}
exports.respuesta =function(req, res){
res.render('respuesta', {mensaje:'Se registro el contacto'});


}
