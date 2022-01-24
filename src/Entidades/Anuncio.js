export function AnuncioDoc(doc){

    let an = {};
    an.id = doc.id; //string
    an.titulo = doc.data().titulo
    an.subtitulo = doc.data().subtitulo
    an.imagen = doc.data().imagen
    an.dirige = doc.data().dirige

    return an;

}

export function AnuncioCrea(id, titulo,subtitulo,imagen,dirige){

    let rut = {};
    rut.id = id ? id : new Date().getTime() + "RUT"; //string
    rut.titulo = titulo
    rut.subtitulo = subtitulo
    rut.imagen = imagen
    rut.dirige = dirige

    return rut;

}