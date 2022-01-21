/*************************************************
 * nombre:       FObra
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
import {EscogedorImg} from "./EscogedoresImg/EscogedoresImg";
import {ARTISTAS, CCategorias, CTIPO, OBRASDEFINITIVAS, OBRASPREVIAS} from "../../Constantes";
import {Trash} from "iconsax-react";
import CardObra from "../Cards/CardObra/CardObra";
import fire from "../../fire";
import {ArtistaDoc} from "../../Entidades/Artista";
import {ObraCrea, ObraDoc} from "../../Entidades/Obra";
import Sumador from "./Sumador/Sumador";
import {useParams} from "react-router-dom";

const FObra = () => {
    const {id} = useParams();
    const [titulo, setTitulo] = useState("Ingreso de Obra")
    const [comercial, setComercial] = useState(false);
    const [tecnica, setTecnica] = useState(false);
    const [previas, setPrevias] = useState(false);
    const [definitivas, setDefinivas] = useState([])
    const [artistas, setArtistas] = useState([]);
    const [ver, setVer] = useState(false);
    const [obras, setObras] = useState([]);
    //////////////////////////////////////////////////////////////
    const [idObra, setIdObra] = useState(null);
    const [imgPrincipal, setImgPrincipal] = useState('');
    const [imgUno, setImgUno] = useState('');
    const [imgDos, setImgDos] = useState('');
    const [imgTres, setImgTres] = useState('');
    const [destacada, setDestacada] = useState(false);
    const [nombre, setNombre] = useState('')
    const [nomEng, setNomEng] = useState('');
    const [categoria, setCategoria] = useState('');
    const [artista, setArtista] = useState('');
    const [idArtista, setIdArtista] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [tipo, setTipo] = useState('Obra Definitiva')
    const [obraDefinitiva, setObraDefinitiva] = useState('');
    const [idDefinitiva, setIdDefinitiva] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [desEng, setDesEng] = useState('');
    //////////////////////////////////////////////////
    const [referencia, setReferencia] = useState('');
    const [pesos, setPesos] = useState('');
    const [dolares, setDolares] = useState('');
    const [envColombia, setEnvColombia] = useState('');
    const [envEEUU, setEnvEEUU] = useState('');
    ////////////////////////////////////////////////////
    const [ficha, setFicha] = useState([]);
    const [nomFic, setNomFic] = useState('');
    const [valFic, setValFic] = useState('');
    const [fichaEng, setFichaEng] = useState([]);
    const [nomFicEng, setNomFicEng] = useState('');
    const [valFicEng, setValFicEng] = useState('');


    const adicionarFicha = () => {
        if (nomFic === '' || valFic === '') {
            alert("Los campos nombre y valor con obligatorios")
        } else {
            let it = {
                nombre: nomFic,
                descripcion: valFic
            }


            setFicha((array) => array.concat(it));
            setNomFic('');
            setValFic('')

        }
    }


    const adicionarFichaEng = () => {
        if (nomFicEng === '' || valFicEng === '') {
            alert("Los campos nombre y valor con obligatorios")
        } else {


            let eng = {
                nombre: nomFicEng,
                descripcion: valFicEng
            }


            setFichaEng((array) => array.concat(eng));
            setNomFicEng('');
            setValFicEng('')
        }
    }

    const borrarFincha = (nom) => {
        let fic = ficha;
        setFicha([])
        for (let i = 0; i < fic.length; i++) {
            if (fic[i].nombre !== nom) {
                setFicha((array) => array.concat(fic[i]));
            }
        }
    }

    const borrarFinchaEng = (nom) => {
        let fic = fichaEng;
        setFichaEng([])
        for (let i = 0; i < fic.length; i++) {
            if (fic[i].nombre !== nom) {
                setFichaEng((array) => array.concat(fic[i]));
            }
        }
    }


    const guardar = () => {


        if (nombre === ''
            || artista === ''
            || artista === ''
            || categoria === ''
            || referencia === ''
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


            let def = idDefinitiva;
            if (tipo === "Obra Previa") {
                for (let i = 0; i < definitivas.length; i++) {
                    if (obraDefinitiva === definitivas[i].nombre) {
                        def = definitivas[i].id;

                    }
                }
            }


            let obra = new ObraCrea(idObra, nombre, nomEng, artista, tipo, descripcion, desEng, referencia, pesos, dolares, envColombia,
                envEEUU, imgPrincipal, aar, ficha, fichaEng, destacada, cantidad, def, idArtista, categoria);

            let cole = OBRASDEFINITIVAS;
            if (tipo === "Obra Previa") {
                cole = OBRASPREVIAS
            }

            fire.firestore().collection(cole)
                .doc(obra.id).set(obra).then((dox) => {
                alert("Cambios guardados con exito")
                setIdObra(obra.id)
            }).catch((err) => {
                alert(err)
            })

        }


    }


    const llenarCampos = (oba) => {
        setIdObra(oba.id);
        setImgPrincipal(oba.imgPerfil)
        setDestacada(oba.destacada);
        setNombre(oba.nombre)
        setNomEng(oba.nomeng);
        setCategoria(oba.categoria);
        setArtista(oba.artista);
        setIdArtista(oba.idArtista);
        setTipo(oba.tipo);
        setCantidad(oba.numero)

        for (let i = 0; i < oba.imgs.length; i++) {
            switch (i) {
                case 0:
                    setImgUno(oba.imgs[0]);
                    break;
                case 1:
                    setImgDos(oba.imgs[1]);
                    break;
                case 2:
                    setImgTres(oba.imgs[2]);
                    break;
            }
        }

        setDescripcion(oba.palabras)
        setDesEng(oba.engpal);

        setReferencia(oba.referencia);
        setPesos(oba.valor);
        setDolares(oba.dolar);
        setEnvColombia(oba.envioNacional);
        setEnvEEUU(oba.envioEEUU);

        setFicha(oba.ficha);
        setFichaEng(oba.fichaEng)

    }

    useEffect(() => {
        fire.firestore().collection(ARTISTAS).get().then((snap) => {
            setArtistas([]);
            snap.forEach((doc) => {
                let art = new ArtistaDoc(doc);
                setArtistas((array) => array.concat(art));
            })
        })
    }, [])

    useEffect(() => {

        if (artista !== undefined) {

            for (let i = 0; i < artistas.length; i++) {
                if (artistas[i].nombre === artista) {
                    setIdArtista(artistas[i].id);
                    return;
                }
            }

        }


    }, [artista])

    useEffect(() => {
        if (idArtista !== undefined) {
            fire.firestore().collection(OBRASDEFINITIVAS).where("idArtista", "==", idArtista).get()
                .then((snap) => {
                    setDefinivas([])
                    snap.forEach((doc) => {
                        let obr = {
                            nombre: doc.data().nombre,
                            id: doc.data().id,
                        }
                        setDefinivas((array) => array.concat(obr));
                    })

                })
        }
    }, [idArtista])

    useEffect(() => {
        if (tipo === "Obra Previa") {
            setVer(true)
        } else {
            setVer(false);
        }
    }, [tipo])


    useEffect(() => {
        if (id !== "null" && id !== undefined) {


            fire.firestore().collection(OBRASDEFINITIVAS).doc(id).get().then((doc) => {

                if (doc.data() !== undefined) {
                    let oba = new ObraDoc(doc);
                    setTitulo("Detalle de " + oba.tipo);
                    llenarCampos(oba)
                } else {

                    fire.firestore().collection(OBRASPREVIAS).doc(id).get().then((doc) => {
                        let oba = new ObraDoc(doc);
                        setTitulo("Detalle de " + oba.tipo);
                        llenarCampos(oba)
                    })

                }


            })
        }
    }, [id])


    useEffect(() => {

        if (previas && tipo === "Obra Definitiva" && idObra !== '') {
            fire.firestore().collection(OBRASPREVIAS).where("IdDefinitiva", "==", idObra).onSnapshot((snap) => {
                setObras([]);

                if (snap.size > 0) {
                    snap.forEach((doc) => {
                        let obr = new ObraDoc(doc);
                        setObras((array) => array.concat(obr));
                    })
                } else {
                    alert("Esta Obra Definitiva aun no cuenta con Obra Previas")
                    setPrevias(false)
                }


            })
        }

    }, [previas])

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
                            carpeta={"obras"} valor={imgPrincipal} setValor={setImgPrincipal}/>
                    </Grid>

                    <Grid item lg={9} sm={12} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >


                            <Grid item container>
                                <FormControlLabel
                                    control={<Checkbox checked={destacada} onChange={(e) => setDestacada(!destacada)}/>}
                                    label="Destacada"/>
                            </Grid>

                            <Grid item lg={6} sm={12} xs={12}>
                                <TextField label={"Nombre"}
                                           value={nombre}
                                           onChange={(e) => setNombre(e.target.value)}
                                />
                            </Grid>


                            <Grid item lg={6} sm={12} xs={12}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Artista"
                                    value={artista}
                                    onChange={(e) => setArtista(e.target.value)}
                                >
                                    {artistas.map((option) => (
                                        <MenuItem key={option.id} value={option.nombre}>
                                            {option.nombre}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>


                            <Grid item lg={6} sm={12} xs={12}>
                                <TextField label={"Nombre (ENG)"}
                                           value={nomEng}
                                           onChange={(e) => setNomEng(e.target.value)}
                                />
                            </Grid>

                            <Grid item lg={6} sm={12} xs={12}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Tipo"
                                    value={tipo}
                                    onChange={(e) => setTipo(e.target.value)}
                                >
                                    {CTIPO.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>


                            <Grid item lg={6} sm={12} xs={12}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Categoria"
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                >
                                    {CCategorias.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item lg={6} sm={12} xs={12}>
                                {ver && <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Obra Definitiva"
                                    value={obraDefinitiva}
                                    onChange={(e) => setObraDefinitiva(e.target.value)}
                                >
                                    {definitivas.map((option) => (
                                        <MenuItem key={option.id} value={option.nombre}>
                                            {option.nombre}
                                        </MenuItem>
                                    ))}
                                </TextField>}

                            </Grid>

                            <Grid item lg={6} sm={12} xs={12} sx={{marginTop: 2}}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >

                                    <Grid item sx={{marginRight: 2}}>
                                        <Typography sx={{fontWeight: 600}}>Cantidad</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Sumador maximo={100} numero={cantidad} setNumero={setCantidad}/>
                                    </Grid>

                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>


            <Grid item container sx={{marginTop: 8}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >

                    <Grid item lg={2} sm={12} xs={12}>
                        <EscogedorImg
                            x={150} y={200} yc={4} xc={3}
                            carpeta={"obras"} valor={imgUno} setValor={setImgUno}/>
                    </Grid>

                    <Grid item lg={2} sm={12} xs={12}>
                        <EscogedorImg
                            x={150} y={200} yc={4} xc={3}
                            carpeta={"obras"} valor={imgDos} setValor={setImgDos}/>
                    </Grid>

                    <Grid item lg={2} sm={12} xs={12}>
                        <EscogedorImg
                            x={150} y={200} yc={4} xc={3}
                            carpeta={"obras"} valor={imgTres} setValor={setImgTres}/>
                    </Grid>


                </Grid>
            </Grid>

            <Grid item container sx={{marginTop: 8, paddingX: 4}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={4}
                >

                    <Grid item lg={6} sm={12} xs={12}>
                        <TextField rows={8} multiline label={"Palabras del artista"}
                                   value={descripcion}
                                   onChange={(e) => setDescripcion(e.target.value)}

                        />
                    </Grid>


                    <Grid item lg={6} sm={12} xs={12}>
                        <TextField rows={8} multiline label={"Palabras del artista (ENG)"}
                                   value={desEng}
                                   onChange={(e) => setDesEng(e.target.value)}
                        />
                    </Grid>


                </Grid>
            </Grid>

            <Grid item container sx={{borderTop: 1, paddingTop: 4, marginTop: 4}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Grid item>
                        <Typography sx={{fontWeight: 600}}>Datos Comerciales</Typography>
                    </Grid>

                    <Grid item>
                        <Button variant={"outlined"}
                                onClick={() => setComercial(!comercial)}>{comercial ? "Ver menos" : "ver mas"}</Button>
                    </Grid>


                </Grid>

            </Grid>

            <Grid item container sx={{marginTop: 4, paddingX: 2}}>
                <Collapse in={comercial} sx={{width: "100%"}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                        sx={{marginBottom: 4}}
                    >


                        <Grid item lg={4} sm={12} xs={12}>
                            <TextField label={"Referencia"}
                                       value={referencia}
                                       onChange={(e) => setReferencia(e.target.value)}
                            />
                        </Grid>

                        <Grid item lg={8} sm={12} xs={12}>

                        </Grid>

                        <Grid item lg={4} sm={12} xs={12}>
                            <TextField label={"Precio (COP)"}
                                       value={pesos}
                                       onChange={(e) => setPesos(e.target.value)}/>
                        </Grid>

                        <Grid item lg={4} sm={12} xs={12}>
                            <TextField label={"Precio (US)"}
                                       value={dolares}
                                       onChange={(e) => setDolares(e.target.value)}/>
                        </Grid>

                        <Grid item lg={4} sm={12} xs={12}>

                        </Grid>

                        <Grid item lg={4} sm={12} xs={12}>
                            <TextField label={"Valor envio Colombia (COP)"}
                                       value={envColombia}
                                       onChange={(e) => setEnvColombia(e.target.value)}/>
                        </Grid>

                        <Grid item lg={4} sm={12} xs={12}>
                            <TextField label={"Valor envio EEUU (US)"}
                                       value={envEEUU}
                                       onChange={(e) => setEnvEEUU(e.target.value)}/>
                        </Grid>

                    </Grid>
                </Collapse>

            </Grid>

            <Grid item container sx={{borderTop: 1, paddingTop: 4, marginTop: 0}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Grid item>
                        <Typography sx={{fontWeight: 600}}>Ficha Tecnica</Typography>
                    </Grid>

                    <Grid item>
                        <Button variant={"outlined"}
                                onClick={() => setTecnica(!tecnica)}>{tecnica ? "Ver menos" : "ver mas"}</Button>
                    </Grid>


                </Grid>
            </Grid>


            <Grid item container sx={{marginTop: 4}}>
                <Collapse in={tecnica} sx={{width: "100%"}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        sx={{marginBottom: 4}}
                    >

                        <Grid item lg={6} sm={12} xs={12}>

                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                            >

                                <Grid item lg={4} sm={12} xs={12}>
                                    <TextField label={"Nombre"}
                                               value={nomFic}
                                               onChange={(e) => setNomFic(e.target.value)}/>

                                </Grid>

                                <Grid item lg={6} sm={12} xs={12}>
                                    <TextField label={"Descripcion"}
                                               value={valFic}
                                               onChange={(e) => setValFic(e.target.value)}/>

                                </Grid>


                                <Grid item container sx={{marginTop: 2}}>
                                    <Button onClick={() => adicionarFicha()}>Agregar</Button>
                                </Grid>

                                <Grid item lg={4} sm={12} xs={12} sx={{marginTop: 6}}>
                                    <TextField label={"Nombre (ENG)"}
                                               value={nomFicEng}
                                               onChange={(e) => setNomFicEng(e.target.value)}/>

                                </Grid>


                                <Grid item lg={6} sm={12} xs={12} sx={{marginTop: 6}}>
                                    <TextField label={"Descripcion (ENG)"}
                                               value={valFicEng}
                                               onChange={(e) => setValFicEng(e.target.value)}/>

                                </Grid>

                                <Grid item container sx={{marginTop: 2}}>
                                    <Button onClick={() => adicionarFichaEng()}>Agregar</Button>
                                </Grid>

                            </Grid>


                        </Grid>

                        <Grid item lg={6} sm={12} xs={12}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >


                                <Grid item container>
                                    {ficha.map((item, index) => {
                                        return (
                                            <Grid item container sx={{
                                                paddingY: 1,
                                                paddingX: 2,
                                                backgroundColor: index % 2 === 0 ? "#00000010" : "#00000030"
                                            }}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="flex-start"
                                                    alignItems="center"
                                                >

                                                    <Grid item lg={4} sm={12} xs={12}>
                                                        <Typography sx={{fontWeight: 600}}>{item.nombre}</Typography>
                                                    </Grid>
                                                    <Grid item lg={7} sm={12} xs={12}>
                                                        <Typography>{item.descripcion}</Typography>
                                                    </Grid>

                                                    <Grid container item lg={1} sm={12} xs={12}
                                                          sx={{justifyContent: "flex-end"}}>
                                                        <IconButton onClick={() => borrarFincha(item.nombre)}>
                                                            <Trash color={"#000"} variant={"Bold"} size={20}/>
                                                        </IconButton>

                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                        )
                                    })}
                                </Grid>

                                <Grid item container sx={{marginTop: 6}}>
                                    {fichaEng.map((item, index) => {
                                        return (
                                            <Grid item container sx={{
                                                paddingY: 1,
                                                paddingX: 2,
                                                backgroundColor: index % 2 === 0 ? "#00000010" : "#00000030"
                                            }}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="flex-start"
                                                    alignItems="center"
                                                >

                                                    <Grid item lg={4} sm={12} xs={12}>
                                                        <Typography sx={{fontWeight: 600}}>{item.nombre}</Typography>
                                                    </Grid>
                                                    <Grid item lg={7} sm={12} xs={12}>
                                                        <Typography>{item.descripcion}</Typography>
                                                    </Grid>

                                                    <Grid container item lg={1} sm={12} xs={12}
                                                          sx={{justifyContent: "flex-end"}}>
                                                        <IconButton onClick={() => borrarFinchaEng(item.nombre)}>
                                                            <Trash color={"#000"} variant={"Bold"} size={20}/>
                                                        </IconButton>

                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                        )
                                    })}
                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>

                </Collapse>
            </Grid>


            {tipo !== "Obra Previa" && idObra !== '' && <>
                <Grid item container sx={{borderTop: 1, paddingTop: 4, marginTop: 0}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Grid item>
                            <Typography sx={{fontWeight: 700, fontSize: 22}}>Obras Previas</Typography>
                        </Grid>

                        <Grid item>
                            <Button variant={"outlined"}
                                    onClick={() => setPrevias(!previas)}>{previas ? "Ver menos" : "Cargar Obras"}</Button>
                        </Grid>


                    </Grid>

                </Grid>


                <Grid item container sx={{marginTop: 4}}>
                    <Collapse in={previas} sx={{width: "100%"}}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >


                            {obras.map((item) => {
                                return (
                                    <Grid item container>
                                        <CardObra item={item}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Collapse>
                </Grid>

            </>}

        </Grid>
    );
};
export default FObra;




