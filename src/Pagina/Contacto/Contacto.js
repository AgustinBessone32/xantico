/*************************************************
 * nombre:       Conacto
 * descripcion:  
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid } from "@mui/material";
import React from 'react';
import ContentContacto from "./ContentContacto/ContentContacto";
import Encabezado from '../Home/Encabezado/Encabezado'
import ListadoServicios  from "./ListadoServicios/ListadoServicios";
import ButtonReservar  from "./ButtonReservar/ButtonReservar";

const Contacto = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item container sx={{ mt: 20 }}>
                <ContentContacto />
            </Grid>

            <Grid item container sx={{ justifyContent: "center", mt: 10 }}>
                <Encabezado titulo='Urban Spirit of Helsinki'
                    descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </Grid>

            <Grid item container sx={{ justifyContent: "center", mt: 12}}>
                <ListadoServicios />
            </Grid>
            <Grid item container sx={{ justifyContent: "center", my: 12}}>
                <ButtonReservar />
            </Grid>
        </Grid>
    )
};

export default Contacto
