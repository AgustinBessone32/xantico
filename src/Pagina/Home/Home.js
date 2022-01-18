/*************************************************
 * nombre:       Home
 * descripcion:
 *
 * librerias:  libreria extra
 * props:
 * tiempo:       10 min
 *************************************************/
 import {useEffect, useState} from "react";
 import {Grid, Typography} from "@mui/material";
 import {fire} from "../../fire";
 import {SALUDOS} from "../../Constantes";
 import CarruselServicios from "../Home/Servicios/CarruselServicios";
import CardHabitaciones from "./Habitaciones/CardHabitaciones";
import { Footer } from "../../Dashboard/Components/Footer";
import { ListadoServicios } from "./Servicios/ListadoServicios";
import { CardReseñas } from "./Reseñas/CardReseñas";
import CarruselReseñas from "./Reseñas/CarruselReseñas";
import { ParaHacerCard } from "./ParaHacer/ParaHacerCard";
import  Encabezado  from "./Encabezado/Encabezado";
import { ReglasCasa } from "./ReglasCasa/ReglasCasa";
import CarruselZonasComunes from "./ZonasComunes/CarruselZonasComunes";
 
 
 const Home = () => {
     const [saludos, setSaludos] = useState([])
 

 
     return (
         <Grid
             container
             direction="row"
             justifyContent="flex-start"
             alignItems="flex-start"
         >
 
 
 
             <CarruselServicios/>

             <Encabezado titulo='Urban Spirit of Helsinki'
                descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />

             <CardHabitaciones />

             <ReglasCasa />

             <Encabezado titulo='Urban Spirit of Helsinki'
                descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />

             <CardReseñas />

             <Encabezado titulo='Urban Spirit of Helsinki'
                descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />

             <ListadoServicios />

             <CarruselZonasComunes />

             <Encabezado titulo='Urban Spirit of Helsinki'
                descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />

             <ParaHacerCard />

             <CarruselReseñas />
 
 
         </Grid>
     );
 };
 export default Home;