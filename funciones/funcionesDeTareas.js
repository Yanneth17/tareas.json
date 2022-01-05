function leerDatos(archivoTareas){
    archivoTareas.array.forEach(function(element) {
        console.log(element);
    });
}

module.exports = {leerDatos}