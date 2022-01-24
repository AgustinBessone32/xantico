export function RutaDoc(doc){

    let rut = {};
    rut.id = doc.id; //string
    rut.nombre = doc.data().nombre; //string
    rut.descripcion = doc.data().descripcion
    rut.nroContacto = doc.data().nroContacto
    rut.imagen = doc.data().imagen
    rut.imagenes = doc.data().imagenes
    rut.reseñas = doc.data().reseñas

    return rut;

}

export function RutaCrea(id, nombre, desc, nroC, imagen, imagenes , reseñas){

    let rut = {};
    rut.id = id; //string
    rut.nombre = nombre; //string
    rut.descripcion = desc
    rut.nroContacto = nroC
    rut.imagen = imagen
    rut.imagenes = imagenes
    rut.reseñas = reseñas

    return rut;

}