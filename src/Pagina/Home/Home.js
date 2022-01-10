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

             <CardHabitaciones />

             <CardReseñas />

             <ListadoServicios />

             <CarruselReseñas />

             <Footer />
 
 
         </Grid>
     );
 };
 export default Home;