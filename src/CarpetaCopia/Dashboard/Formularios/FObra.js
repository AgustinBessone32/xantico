/*************************************************
 * nombre:       FObra
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
import { EscogedorImg } from "./EscogedoresImg/EscogedoresImg";
import { ARTISTAS, CCategorias, CTIPO, OBRASDEFINITIVAS, OBRASPREVIAS } from "../../Constantes";
import { Trash } from "iconsax-react";
import CardObra from "../Cards/CardObra/CardObra";
import fire from "../../fire";
import { ArtistaDoc } from "../../Entidades/Artista";
import { ObraCrea, ObraDoc } from "../../Entidades/Obra";
import Sumador from "./Sumador/Sumador";
import { useParams } from "react-router-dom";

const FObra = () => {
    const { id } = useParams();
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
            sx={{ padding: 4 }}
        >
            <Grid item container sx={{ justifyContent: "space-between", marginBottom: 8 }}>

                <Grid item>
                    <Typography
                        sx={{ fontSize: 20, fontWeight: 700, color: "#232323" }}>
                        {titulo}
                    </Typography>
                </Grid>

                <Grid item>

                    <Button variant={"contained"} color={"secondary"} size={"small"}
                        onClick={() => guardar()}
                    >Guardar Cambios</Button>

                </Grid>

            </Grid>
        </Grid>

    );
};
export default FObra;




