export function UsuarioDoc(doc){

    let usu = {};
    usu.id = doc.data().id; //string
    usu.nombre = doc.data().nombre; //string
    usu.credenciales = doc.data().credenciales; //array string
    usu.activo = doc.data().activo;
    return usu;

}