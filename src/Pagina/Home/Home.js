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

             <ListadoServicios />

             <Footer />
 
 
         </Grid>
     );
 };
 export default Home;