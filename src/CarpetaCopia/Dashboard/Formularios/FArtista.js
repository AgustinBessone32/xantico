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
import {ARTISTAS, CPaises, OBRASDEFINITIVAS} from "../../Constantes";
import {ArtistaCrea, ArtistaDoc} from "../../Entidades/Artista";
import {EscogedorImg} from "./EscogedoresImg/EscogedoresImg";
import CardObra from "../Cards/CardObra/CardObra";
import {ObraDoc} from "../../Entidades/Obra";

const FArtista = () => {
    const {id} = useParams();
    const [titulo, setTitulo] = useState("Ingresando Nuevo Artista")
    const [open, setOpen] = useState(false);
    const [obrasDefinitivas, setObrasDefinitivas] = useState([]);
    ////////////////////////////////////////////////
    const [idArtista, setIdArtista] = useState('');
    const [imgPerfil, setImgPerfil] = useState('');
    const [imgDetalle, setImgDetalle] = useState('');
    const [nombre, setNombre] = useState('');
    const [pais, setPais] = useState('');
    const [descripcion, setDecripcion] = useState('');
    const [engDes, setEngDes] = useState('')


    const guardar = () => {
        if (imgPerfil === '' || imgDetalle === '' || nombre === '' || pais === '' || descripcion === '' || engDes === '') {
            alert("Todos los campos son obligatorios")
        } else {

            let art = new ArtistaCrea(imgPerfil, nombre, descripcion, pais, imgDetalle, idArtista, engDes);

            fire.firestore().collection(ARTISTAS).doc(art.id).set(art).then((dox) => {
                alert("Cambios realizados con exito");
            }).catch((err) => {
                alert(err)
            })
        }
    }

    const llenarArtista = (art) => {
        setIdArtista(art.id);
        setNombre(art.nombre);
        setPais(art.pais);
        setDecripcion(art.descripcion);
        setEngDes(art.deseng);
        setImgPerfil(art.imgPerfil);
        setImgDetalle(art.img)
    }


    useEffect(() => {
        if (id === "null") {


        } else {
            fire.firestore().collection(ARTISTAS).doc(id).get().then((doc) => {
                if (doc.data().id !== undefined) {
                    let art = new ArtistaDoc(doc);
                    setTitulo("Detalle de Artista")
                    llenarArtista(art);
                }

            })
        }
    }, [])

    useEffect(() => {
        if (open && obrasDefinitivas.length <= 0 && idArtista !== undefined) {
            fire.firestore().collection(OBRASDEFINITIVAS).where("idArtista", "==", idArtista)
                .onSnapshot((snap) => {

                    if (snap.size <= 0) {
                        alert("Este artista no tiene obras publicadas en APRIORI GALERIA")
                    } else {
                        setObrasDefinitivas([]);
                        snap.forEach((doc) => {
                            let obr = new ObraDoc(doc);
                            setObrasDefinitivas((array) => array.concat(obr));
                        })
                    }


                })
        }

    }, [open])

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


            <Grid item container>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >

                    <Grid item lg={3} sm={12} xs={12}>
                        <EscogedorImg
                            carpeta={"perfilArtista"} valor={imgPerfil} setValor={setImgPerfil}/>
                    </Grid>

                    <Grid item lg={4} sm={12} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >

                            <Grid item container>
                                <TextField label={"Nombre"}
                                           value={nombre}
                                           onChange={(e) => setNombre(e.target.value)}
                                />
                            </Grid>

                            <Grid item container>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Pais"
                                    value={pais}
                                    onChange={(e) => setPais(e.target.value)}
                                >
                                    {CPaises.map((option) => (
                                        <MenuItem key={option.id} value={option.name}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

            <Grid item container sx={{marginTop: 6}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >

                    <Grid item lg={4} sm={12} xs={12}>
                        <EscogedorImg carpeta={"perfilArtista"} valor={imgDetalle} setValor={setImgDetalle}
                                      x={300} y={380}
                                      xc={3} yc={4}
                        />
                    </Grid>


                    <Grid item lg={8} sm={12} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={4}
                        >

                            <Grid item container>
                                <TextField label={"Descripcion"} rows={6} multiline
                                           value={descripcion}
                                           onChange={(e) => setDecripcion(e.target.value)}
                                />
                            </Grid>

                            <Grid item container>
                                <TextField label={"Descripcion (Ingles) "} rows={6} multiline
                                           value={engDes}
                                           onChange={(e) => setEngDes(e.target.value)}
                                />
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>


            {idArtista !== '' && <>


            <Grid item container
                  sx={{justifyContent: "space-between", marginBottom: 8, borderTop: 1, paddingTop: 4, marginTop: 8}}>

                <Grid item>
                    <Typography
                        sx={{fontSize: 18, fontWeight: 700, color: "#232323"}}>
                        Obras del Artista
                    </Typography>
                </Grid>

                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >

                        <Grid item sx={{marginRight: 2}}>
                            <Button variant={"outlined"} color={"secondary"} size={"small"}
                                    onClick={() => setOpen(!open)}
                            >Cargar Obras</Button>
                        </Grid>

                        <Grid item>
                            <Link to={"/admin/detalleobra/" + null} style={{textDecoration: "none"}}>
                                <Button color={"secondary"} size={"small"}
                                >Ingresar Nueva obra </Button>
                            </Link>
                        </Grid>

                    </Grid>


                </Grid>

            </Grid>


            <Collapse in={open} sx={{width: "100%"}}>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >

                    {obrasDefinitivas.map((item, index) => {
                        return (
                            <Grid item container key={index}>
                                <CardObra item={item}/>
                            </Grid>
                        )
                    })}


                </Grid>


            </Collapse>

            </>}


        </Grid>
    );
};
export default FArtista;

