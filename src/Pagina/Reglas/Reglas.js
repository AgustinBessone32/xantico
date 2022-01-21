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
            justifyContent="center"
            alignItems="center"
        >
               <Grid item container sx={{ justifyContent: "center" }}>
                <CardReglas />
            </Grid>

              <Grid item container sx={{mt: 12, justifyContent: "center" }}>
                <ContentReglas />
            </Grid>

            <Grid item container sx={{marginTop: 7, justifyContent: "center"}} >
                <Encabezado titulo='Urban Spirit of Helsinki'
                            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </Grid>

            <Grid item container sx={{mt: 12, justifyContent: "center" }}>
                <ListadoServicios />
            </Grid>


            <Grid item container sx={{my: 15, justifyContent: "center" }}>
                <ButtonReservar />
            </Grid>



        </Grid>
        )
};

export default Reglas
