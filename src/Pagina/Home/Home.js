/*************************************************
 * nombre:       Home
 * descripcion:
 *
 * librerias:  libreria extra
 * props:
 * tiempo:       10 min
 *************************************************/
import React, {useEffect, useState} from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import CarruselServicios from "../Home/Servicios/CarruselServicios";
import {ListadoServicios} from "./Servicios/ListadoServicios";
import {CardReseñas} from "./Reseñas/CardReseñas";
import CarruselReseñas from "./Reseñas/CarruselReseñas";
import {ParaHacerCard} from "./ParaHacer/ParaHacerCard";
import Encabezado from "./Encabezado/Encabezado";
import CarruselZonasComunes from "./ZonasComunes/CarruselZonasComunes";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {RUTAS} from "../../Constantes";
import {RutaDoc} from "../../Entidades/Rutas";
import CardHabitaciones from "./Habitaciones/CardHabitaciones";
import {ReglasCasa} from "./ReglasCasa/ReglasCasa";
import {app} from "../../fire";
import {theme} from "../../Tema";


const Home = () => {
    const [rutas, setRutas] = useState([])
    const masSM = useMediaQuery(theme.breakpoints.up("md"));


    useEffect(() => {


        const db = getFirestore(app)
        const q = query(collection(db, RUTAS), where("destacada", "==", true));
        getDocs(q).then((snap) => {

            setRutas([]);
            snap.forEach((doc) => {

                let mac = new RutaDoc(doc);
                setRutas((array) => array.concat(mac))

            });
        });

    }, [])
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >


            <CarruselServicios/>


            <Grid item container sx={{marginTop: masSM ? 16 : 8, justifyContent: "center"}}>
                <Encabezado titulo='Hospédate con nosotros'
                            descripcion={"Nuestros espacios de descanso te garantizan una recarga de energía, para que continues disfrutando la aventura de viajar. Puedes elegir una cómoda habitación compartida y tener maravillosos encuentros, o una habitación privada llena de calidez y tranquilidad."}
                />
            </Grid>


            <Grid item container sx={{marginTop: masSM ? 12 : 4}}>
                <CardHabitaciones/>
            </Grid>


            <Grid item container sx={{marginTop: masSM ? 18 : 8}}>
                <ReglasCasa/>
            </Grid>


            <Grid item container sx={{marginTop: masSM ? 20 : 8, justifyContent: "center"}}>
                <Encabezado titulo='¿Qué incluye? Lo mejor de Xanticó '
                            descripcion='Para hacer tu estancia más acogedora, ponemos a disposición los servicios que puedes disfrutar en nuestro hostal.'
                />
            </Grid>


            <Grid item container sx={{marginTop: masSM ? 14 : 8, justifyContent: "center"}}>
                <ListadoServicios/>
            </Grid>


            <Grid item container sx={{mt: masSM ? 18 : 8}}>
                <CarruselZonasComunes/>
            </Grid>

            <Grid item container sx={{marginTop: masSM ? 16 : 4, px: masSM ? 0 : 2}}>
                <CardReseñas/>
            </Grid>


            <Grid item container sx={{mt: masSM ? 16 : 8, justifyContent: "center"}}>
                <Encabezado titulo='Cosas Para Hacer'
                            descripcion={'Nuestro hostal está ubicado en Ipiales, dentro del departamento de Nariño, un lugar con paisajes de postal, tenemos uno de los santuarios más bellos del mundo y una experiencia gastronómica que de seguro te atrapará.'}


                />

                <Typography sx={{
                    textAlign: 'center',
                    mt: 2,
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#663419",
                    lineHeight: 1.7
                }}>{"¡Encuentra esto y mucho más en tu visita al sur, no querrás irte de aquí! "}</Typography>
            </Grid>


            <Grid item container sx={{marginTop: 16, px: masSM ? 0 : 6}}>
                <ParaHacerCard rutas={rutas}/>
            </Grid>


            <Grid item container sx={{marginTop: 14}}>
                <CarruselReseñas/>
            </Grid>


        </Grid>
    );
};
export default Home;