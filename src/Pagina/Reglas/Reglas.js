/*************************************************
 * nombre:       Reglas
 * descripcion:
 *
 * librerias: 
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid } from '@mui/material';
import React from 'react';
import CardReglas from './CardReglas/CardReglas';
import ContentReglas from './ContentReglas/ContentReglas';
import Encabezado from '../Home/Encabezado/Encabezado'
import ListadoServicios from './ListadoServicios/ListadoServicios'
import ButtonReservar from './ButtonReservar/ButtonReservar';

const Reglas = () => {
    return (

        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
               <Grid item container sx={{mt: 4, justifyContent: "center" }} >
                <CardReglas />
            </Grid>

              <Grid item container sx={{mt: 12, justifyContent: "center" }}>
                <ContentReglas />
            </Grid>

            <Grid item container sx={{marginTop: 7, justifyContent: "center"}} >
                <Encabezado titulo='Recuerda que tu estadía incluye lo mejor de Xanticó '
                            descripcion='Para hacer tu estancia más acogedora, ponemos a disposición los servicios que puedes disfrutar en nuestro hostal.'
                />
            </Grid>

            <Grid item container sx={{mt: 12, justifyContent: "center" }}>
                <ListadoServicios />
            </Grid>


            <Grid item container sx={{mt:15,mb:-5 , justifyContent: "center" }}>
                <ButtonReservar />
            </Grid>



        </Grid>
        )
};

export default Reglas
