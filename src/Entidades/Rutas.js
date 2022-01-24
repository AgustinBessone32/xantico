export function RutaDoc(doc){

    let rut = {};
    rut.id = doc.id; //string
    rut.nombre = doc.data().nombre; //string
    rut.descripcion = doc.data().descripcion
    rut.nroContacto = doc.data().nroContacto
    rut.imagen = doc.data().imagen
    rut.imagenes = doc.data().imagenes
    rut.reseñas = doc.data().reseñas
    rut.destacada = doc.data().destacada

    return rut;

}

export function RutaCrea(id, nombre, desc, nroC, imagen, imagenes , reseñas, destacada){

    let rut = {};
    rut.id = id ? id : new Date().getTime() + "RUT"; //string
    rut.nombre = nombre; //string
    rut.descripcion = desc
    rut.nroContacto = nroC
    rut.imagen = imagen
    rut.imagenes = imagenes
    rut.reseñas = reseñas
    rut.destacada = destacada;

    return rut;

}