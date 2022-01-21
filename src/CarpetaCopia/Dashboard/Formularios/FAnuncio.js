/*************************************************
 * nombre:       FArtista
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {React, useEffect, useState} from "react";
import {Button, Collapse, Grid, MenuItem, TextField, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import fire from "../../fire";
import {ANUNCIOS, ARTISTAS, CPaises, CTipoAnuncio, GALERIA3D, OBRASDEFINITIVAS, OBRASPREVIAS} from "../../Constantes";
import {ArtistaCrea, ArtistaDoc} from "../../Entidades/Artista";
import {EscogedorImg} from "./EscogedoresImg/EscogedoresImg";
import CardObra from "../Cards/CardObra/CardObra";
import {ObraDoc} from "../../Entidades/Obra";
import {AnuncioCrea, AnuncioDoc} from "../../Entidades/Anuncio";

const FAnuncio = () => {
    const {id} = useParams();
    const [titulo, setTitulo] = useState("Ingresando Nuevo Artista")
    const [lugares,setLugares] = useState([]);
    ////////////////////////////////////////////////
    const [idAnuncio,setIdAnuncio] = useState('');
    const [img, setImg] = useState('');
    const [nombre, setNombre] = useState('');
    const [nomEng,setNomEng] = useState('')
    const [descripcion, setDescripcion] = useState('');
    const [desEng,setDesEng] = useState('');
    const [autor,setAutor] = useState('');
    const [tipo,setTipo] =useState('');
    const [lleva,setLleva] = useState('');



    const guardar = () => {
        if (img === '' || nombre === '' || nomEng === '' || desEng === '' || descripcion === '' || autor === ''
        || lleva === '' ) {
            alert("Todos los campos son obligatorios")
        } else {


            let llev = "";
            for (let i = 0; i < lugares.length; i++){
                if (lleva === lugares[i].nombre){
                    llev = lugares[i].id;
                }
            }

            let anu = new AnuncioCrea(idAnuncio, nombre, nomEng, descripcion, desEng, img, autor, tipo, llev, lleva);

            fire.firestore().collection(ANUNCIOS).doc(anu.id).set(anu).then((dox) => {
                alert("Cambios realizados con exito");
                setIdAnuncio(anu.id)
            }).catch((err) => {
                alert(err)
            })
        }




    }

    const llenarAnuncio = (art) => {

        setIdAnuncio(art.id)
        setImg(art.img);
        setNombre(art.titulo)
        setDescripcion(art.contenido)
        setNomEng(art.titeng);
        setDesEng(art.coneng);
        setAutor(art.autor);
        setTipo(art.tipo);
        setLleva(art.llevaNom);

    }


    useEffect(() => {
        if (id === "null") {


        } else {
            fire.firestore().collection(ANUNCIOS).doc(id).get().then((doc) => {
                if (doc.data().id !== undefined) {
                    let art = new AnuncioDoc(doc);
                    setTitulo("Detalle de Anuncio")
                    llenarAnuncio(art);
                }

            })
        }
    }, [])


    useEffect(() =>{
        if (tipo !== ''){
            let collecion = OBRASDEFINITIVAS
            switch (tipo){
                case "Obra Definitiva":
                    collecion = OBRASDEFINITIVAS
                    break;
                case "Obra Previa":
                    collecion = OBRASPREVIAS
                    break;
                case "Artista":
                    collecion = ARTISTAS
                    break;
                case "Galeria 3D":
                    collecion = GALERIA3D
                    break;

            }



            fire.firestore().collection(collecion).get().then((snap) =>{
                setLugares([]);
                snap.forEach((doc) =>{
                    let lug = {
                        nombre: doc.data().nombre,
                        id: doc.data().id
                    }
                    setLugares((array) => array.concat(lug))
                })


            })
        }
    },[tipo])



    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{padding: 4}}
        >
            <Grid item container sx={{justifyContent: "space-between", marginBottom: 8}}>

                <Grid item>
                    <Typography
                        sx={{fontSize: 20, fontWeight: 700, color: "#232323"}}>
                        {titulo}
                    </Typography>
                </Grid>

                <Grid item>

                    <Button variant={"contained"} color={"secondary"} size={"small"}
                            onClick={() => guardar()}
                    >Guardar Cambios</Button>

                </Grid>

            </Grid>




            <Grid item container sx={{marginTop: 4}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={4}
                >

                    <Grid item lg={4} sm={12} xs={12}>
                        <EscogedorImg  calidad={1} carpeta={"Anuncios"} valor={img} setValor={setImg}
                                      x={340} y={220}
                                      xc={5} yc={3}
                        />
                    </Grid>


                    <Grid item lg={4} sm={12} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={4}
                        >

                            <Grid item container>
                                <TextField label={"Nombre"}
                                           value={nombre}
                                           onChange={(e) => setNombre(e.target.value)}
                                />
                            </Grid>

                            <Grid item container>
                                <TextField label={"Descripcion"} rows={6} multiline
                                           value={descripcion}
                                           onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </Grid>

                        </Grid>

                    </Grid>


                    <Grid item lg={4} sm={12} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={4}
                        >

                            <Grid item container>
                                <TextField label={"Nombre (ENG)"}
                                           value={nomEng}
                                           onChange={(e) => setNomEng(e.target.value)}
                                />
                            </Grid>

                            <Grid item container>
                                <TextField label={"Descripcion (ENG) "} rows={6} multiline
                                           value={desEng}
                                           onChange={(e) => setDesEng(e.target.value)}
                                />
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>


           <Grid item container sx={{marginTop: 4}} spacing={4} >
             <Grid item lg={4} sm={12} xs={12} >
                 <TextField label={"Autor"}
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                 />
             </Grid>

               <Grid item lg={4} sm={12} xs={12} >
                   <TextField
                       id="outlined-select-currency"
                       select
                       label="Tipo"
                       value={tipo}
                       onChange={(e) => setTipo(e.target.value)}
                   >
                       {CTipoAnuncio.map((option) => (
                           <MenuItem key={option} value={option}>
                               {option}
                           </MenuItem>
                       ))}
                   </TextField>
               </Grid>

               <Grid item lg={4} sm={12} xs={12} >
                   <TextField
                       id="outlined-select-currency"
                       select
                       label="Leva a"
                       value={lleva}
                       onChange={(e) => setLleva(e.target.value)}
                   >
                       {lugares.map((option) => (
                           <MenuItem key={option.id} value={option.nombre}>
                               {option.nombre}
                           </MenuItem>
                       ))}
                   </TextField>
               </Grid>
           </Grid>


        </Grid>
    );
};
export default FAnuncio;

