/*************************************************
 * nombre:       Home
 * descripcion:
 *
 * librerias:  libreria extra
 * props:
 * tiempo:       10 min
 *************************************************/
import {useState, useEffect} from "react";
import {Grid} from "@mui/material";
import CarruselServicios from "../Home/Servicios/CarruselServicios";
import CardHabitaciones from "./Habitaciones/CardHabitaciones";
import {ListadoServicios} from "./Servicios/ListadoServicios";
import {CardReseñas} from "./Reseñas/CardReseñas";
import CarruselReseñas from "./Reseñas/CarruselReseñas";
import {ParaHacerCard} from "./ParaHacer/ParaHacerCard";
import Encabezado from "./Encabezado/Encabezado";
import {ReglasCasa} from "./ReglasCasa/ReglasCasa";
import CarruselZonasComunes from "./ZonasComunes/CarruselZonasComunes";
import {fire} from "../../fire";
import {RUTAS} from "../../Constantes";
import {RutaDoc} from "../../Entidades/Rutas";


const Home = () => {
    const [rutas, setRutas] = useState([])


    useEffect(() => {
        fire.firestore().collection(RUTAS).where("destacada", "==", true).get().then((snap) => {
            setRutas([]);
            console.log(snap.size)
            snap.forEach((doc) => {
                let rut = new RutaDoc(doc);
                setRutas((array) => array.concat(rut))
            })
        })
    }, [])
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >


            <CarruselServicios/>


            <Grid item container sx={{marginTop: 12, justifyContent: "center"}}>
                <Encabezado titulo='Urban Spirit of Helsinki'
                            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </Grid>


            <Grid item container sx={{marginTop: 18}}>
                <CardHabitaciones/>
            </Grid>


            <Grid item container sx={{marginTop: 12}}>
                <ReglasCasa/>
            </Grid>


            <Grid item container sx={{marginTop: 12, justifyContent: "center"}}>
                <Encabezado titulo='Urban Spirit of Helsinki'
                            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </Grid>


            <Grid item container sx={{marginTop: 12}}>
                <CardReseñas/>
            </Grid>

            <Grid item container sx={{marginTop: 16, justifyContent: "center"}}>
                <Encabezado titulo='Urban Spirit of Helsinki'
                            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </Grid>


            <Grid item container sx={{marginTop: 14, justifyContent: "center"}}>
                <ListadoServicios/>
            </Grid>


            <Grid item container sx={{marginTop: 4}}>
                <CarruselZonasComunes/>
            </Grid>


            <Grid item container sx={{marginTop: 4, justifyContent: "center"}}>
                <Encabezado titulo='Urban Spirit of Helsinki'
                            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </Grid>


            <Grid item container sx={{marginTop: 14}}>
                <ParaHacerCard rutas={rutas}/>
            </Grid>


            <CarruselReseñas/>


        </Grid>
    );
};
export default Home;