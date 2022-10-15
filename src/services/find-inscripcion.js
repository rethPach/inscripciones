module.exports = function(request, response) {
    response.send("estoy buscando la insccripcion con id: " +request.params.id);
}