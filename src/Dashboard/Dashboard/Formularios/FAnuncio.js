/*************************************************
 * nombre:       FAnuncio
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { ANUNCIOS, CDirige } from "../../../Constantes";
import { EscogedorImg } from "./EscogedoresImg/EscogedoresImg";
import { Trash } from "iconsax-react";
import { fire } from "../../../fire";
import { AnuncioCrea, AnuncioDoc } from '../../../Entidades/Anuncio'


const FAnuncio = () => {
    const { id } = useParams();
    const [idAnuncio, setIdAnuncio] = useState(null)
    const [tituloPub, setTituloPub] = useState("Ingreso de Anuncio")
    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [dirige, setDirige] = useState('')
    ////////////////////////////////////////////
    const [res, setRes] = useState([]);


    const llenarCampos = (oba) => {
        setIdAnuncio(oba.id);
        setImagen(oba.imagen)
        setTitulo(oba.titulo);
        setSubtitulo(oba.subtitulo);
        setDirige(oba.dirige);


    }

    const guardar = () => {


        if (titulo === ''
            || subtitulo === ''
            || dirige === ''
            || imagen === ''
        ) {
            alert("Los campos con * son obligatorios")
        } else {
            let anuncio = new AnuncioCrea(idAnuncio, titulo, subtitulo, imagen, dirige);

            fire.firestore().collection(ANUNCIOS)
                .doc(anuncio.id).set(anuncio).then((dox) => {
                    alert("Cambios guardados con exito")
                    setIdAnuncio(anuncio.id)
                }).catch((err) => {
                    alert(err)
                })

        }


    }

    useEffect(() => {
        if (id !== "null" && id !== undefined) {


            fire.firestore().collection(ANUNCIOS).doc(id).get().then((doc) => {

                if (doc.data() !== undefined) {
                    let oba = new AnuncioDoc(doc);
                    setTituloPub("Detalle Anuncio " + oba.titulo);
                    llenarCampos(oba)
                }

            })
        }
    }, [id])


    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ padding: 4 }}
        >
            <Grid item container sx={{ justifyContent: "space-between", marginBottom: 8 }}>

                <Grid item>
                    <Typography
                        sx={{ fontSize: 20, fontWeight: 700, color: "#232323" }}>
                        {tituloPub}
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

                    <Grid item lg={12} sm={12} xs={12}>
                        <EscogedorImg
                            x={600} y={300} yc={4} xc={10}
                            carpeta={"imagenesAnucnios"} valor={imagen} setValor={setImagen} />
                    </Grid>

                    <Grid item lg={9} sm={12} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                            sx={{ mt: 2 }}
                        >


                            <Grid item lg={4} sm={12} xs={12}>
                                <TextField label={"Titulo"}
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </Grid>
                            <Grid item container lg={4}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="LLeva a"
                                    value={dirige}
                                    onChange={(e) => setDirige(e.target.value)}
                                >
                                    {CDirige.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item lg={12} sm={12} xs={12}>
                                <TextField label={"Subtitulo"} rows={9} multiline
                                    value={subtitulo}
                                    onChange={(e) => setSubtitulo(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    );
};
export default FAnuncio;





