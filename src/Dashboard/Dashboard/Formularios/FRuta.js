/*************************************************
 * nombre:       FRuta
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {useEffect, useState} from "react";
import {
    Button,
    Checkbox,
    Collapse,
    FormControlLabel,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";
import {useParams} from "react-router-dom";
import {RUTAS} from "../../../Constantes";
import {EscogedorImg} from "./EscogedoresImg/EscogedoresImg";
import {Trash} from "iconsax-react";
import {fire} from "../../../fire";
import {RutaDoc, RutaCrea} from '../../../Entidades/Rutas'


const FRuta = () => {
    const {id} = useParams();
    const [idRuta, setIdRuta] = useState(null)
    const [titulo, setTitulo] = useState("Ingreso de Ruta")
    const [imgPrincipal, setImgPrincipal] = useState('');
    const [destacada, setDestacada] = useState(false);
    const [nombre, setNombre] = useState('')
    const [nroContacto, setNroContacto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imgUno, setImgUno] = useState('');
    const [imgDos, setImgDos] = useState('');
    const [imgTres, setImgTres] = useState('');
    const [imgCuatro, setImgCuatro] = useState('');
    const [imgCinco, setImgCinco] = useState('');
    const [tituloReseña, setTituloReseña] = useState('')
    const [autorReseña, setAutorReseña] = useState('')
    const [descripcionReseña, setDescripcionReseña] = useState('')
    ////////////////////////////////////////////
    const [res, setRes] = useState([]);


    const llenarCampos = (oba) => {
        setIdRuta(oba.id);
        setImgPrincipal(oba.imagen)
        setNombre(oba.nombre);
        setNroContacto(oba.nroContacto);
        setDescripcion(oba.descripcion);
        setRes(oba.reseñas)
        setDestacada(oba.destacada)


        for (let i = 0; i < oba.imagenes.length; i++) {
            switch (i) {
                case 0:
                    setImgUno(oba.imagenes[0]);
                    break;
                case 1:
                    setImgDos(oba.imagenes[1]);
                    break;
                case 2:
                    setImgTres(oba.imagenes[2]);
                    break;
                case 3:
                    setImgCuatro(oba.imagenes[3]);
                    break;
                case 4:
                    setImgCinco(oba.imagenes[4]);
                    break;
            }
        }
    }

    const guardar = () => {


        if (nombre === ''
            || descripcion === ''
            || nroContacto === ''
        ) {
            alert("Los campos con * son obligatorios")
        } else {

            let aar = [];

            if (imgUno !== '') {
                aar.push(imgUno)
            }

            if (imgDos !== '') {
                aar.push(imgDos)
            }

            if (imgTres !== '') {
                aar.push(imgTres)
            }

            if (imgCuatro !== '') {
                aar.push(imgCuatro)
            }

            if (imgCinco !== '') {
                aar.push(imgCinco)
            }


            let ruta = new RutaCrea(idRuta, nombre, descripcion, nroContacto, imgPrincipal, aar, res, destacada);

            fire.firestore().collection(RUTAS)
                .doc(ruta.id).set(ruta).then((dox) => {
                alert("Cambios guardados con exito")
                setIdRuta(ruta.id)
            }).catch((err) => {
                alert(err)
            })

        }


    }

    useEffect(() => {
        if (id !== "null" && id !== undefined) {


            fire.firestore().collection(RUTAS).doc(id).get().then((doc) => {

                if (doc.data() !== undefined) {
                    let oba = new RutaDoc(doc);
                    setTitulo("Detalle Ruta " + oba.nombre);
                    llenarCampos(oba)
                }

            })
        }
    }, [id])


    const addRes = () => {
        if (tituloReseña !== '' && descripcionReseña !== '' && autorReseña !== '') {
            const newRes = {
                autorReseña,
                descripcionReseña,
                tituloReseña
            }
            setRes([...res, newRes])
            setAutorReseña('')
            setDescripcionReseña('')
            setTituloReseña('')

        } else {
            alert("Debe completar todos los campos")
        }

    }

    const deleteRes = (tit) => {
        setRes(res.filter(r => r.tituloReseña !== tit))

    }

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
                            x={250} y={300} yc={4} xc={3}
                            carpeta={"imagenesRutas"} valor={imgPrincipal} setValor={setImgPrincipal}/>
                    </Grid>

                    <Grid item lg={9} sm={12} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >


                            <Grid item lg={4} sm={12} xs={12}>
                                <FormControlLabel
                                    control={<Checkbox checked={destacada} onChange={() => setDestacada(!destacada)}/>}
                                    label={"Destacada"}/>
                            </Grid>
                            <Grid item lg={4} sm={12} xs={12}>
                                <TextField label={"Nombre"}
                                           value={nombre}
                                           onChange={(e) => setNombre(e.target.value)}
                                />
                            </Grid>
                            <Grid item lg={4} sm={12} xs={12}>
                                <TextField label={"Numero Contacto"}
                                           value={nroContacto}
                                           onChange={(e) => setNroContacto(e.target.value)}
                                />
                            </Grid>
                            <Grid item lg={12} sm={12} xs={12}>
                                <TextField label={"Descripcion"} rows={9} multiline
                                           value={descripcion}
                                           onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item container sx={{marginTop: 8}}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start"
                        >

                            <Grid item lg={2} sm={12} xs={12}>
                                <EscogedorImg
                                    x={150} y={200} yc={4} xc={3}
                                    carpeta={"imagenesRutas"} valor={imgUno} setValor={setImgUno}/>
                            </Grid>

                            <Grid item lg={2} sm={12} xs={12}>
                                <EscogedorImg
                                    x={150} y={200} yc={4} xc={3}
                                    carpeta={"imagenesRutas"} valor={imgDos} setValor={setImgDos}/>
                            </Grid>

                            <Grid item lg={2} sm={12} xs={12}>
                                <EscogedorImg
                                    x={150} y={200} yc={4} xc={3}
                                    carpeta={"imagenesRutas"} valor={imgTres} setValor={setImgTres}/>
                            </Grid>

                            <Grid item lg={2} sm={12} xs={12}>
                                <EscogedorImg
                                    x={150} y={200} yc={4} xc={3}
                                    carpeta={"imagenesRutas"} valor={imgCuatro} setValor={setImgCuatro}/>
                            </Grid>

                            <Grid item lg={2} sm={12} xs={12}>
                                <EscogedorImg
                                    x={150} y={200} yc={4} xc={3}
                                    carpeta={"imagenesRutas"} valor={imgCinco} setValor={setImgCinco}/>
                            </Grid>


                        </Grid>
                    </Grid>

                    <Grid item container sx={{borderTop: 1, marginTop: 4, paddingX: 2}}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                            sx={{my: 4}}
                        >


                            <Grid item lg={4} sm={12} xs={12}>
                                <TextField label={"Titulo"}
                                           value={tituloReseña}
                                           onChange={(e) => setTituloReseña(e.target.value)}
                                />
                            </Grid>

                            <Grid item lg={4} sm={12} xs={12}>
                                <TextField label={"Autor"}
                                           value={autorReseña}
                                           onChange={(e) => setAutorReseña(e.target.value)}
                                />
                            </Grid>

                            <Grid item lg={8} sm={12} xs={12}>
                                <TextField label={"Descripcion"} rows={6} multiline
                                           value={descripcionReseña}
                                           onChange={(e) => setDescripcionReseña(e.target.value)}
                                />
                            </Grid>
                            <Grid item container sx={{alignItems: 'flex-end'}} lg={2} sx={{mt: 15}}>
                                <Button onClick={() => addRes()}>Adiciar testimonio</Button>
                            </Grid>
                        </Grid>


                    </Grid>

                    <Grid item container sx={{borderTop: 1, marginTop: 4, paddingX: 2}}>
                        <Grid item container sx={{marginTop: 6}}>
                            {res.map((item, index) => {
                                return (
                                    <Grid key={index} item container sx={{
                                        paddingY: 1,
                                        paddingX: 2,
                                    }}
                                          lg={6}
                                    >
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"

                                        >

                                            <Grid item container lg={12} sm={12} xs={12}
                                                  sx={{justifyContent: 'space-between'}}>
                                                <Typography sx={{fontWeight: 600}}>{item.tituloReseña}</Typography>
                                                <IconButton onClick={() => deleteRes(item.tituloReseña)}>
                                                    <Trash color={"#000"} variant={"Bold"} size={20}/>
                                                </IconButton>
                                            </Grid>
                                            <Grid item lg={12} sm={12} xs={12}>
                                                <Typography>{item.descripcionReseña}</Typography>
                                            </Grid>
                                            <Grid item container lg={12} sm={12} xs={12} justifyContent='flex-end'>
                                                <Typography>{item.autorReseña}</Typography>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FRuta;





